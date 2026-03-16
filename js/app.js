let currentMode = 'regional';
let currentCountry = null;
let currentConflict = null;
let currentEra = 'all';
const expandedSections = new Set();
let leafletMap = null;
let mapLayers = [];
let countryPickerMap = null;
let countryPickerLayers = [];
let countryPickerHighlight = null;

const eraLabels = {
  ancient: '🏛 古代文明  BC 3500-AD 200',
  classical: '⚔️ 古典时代  BC 500-AD 400',
  islamic: '🌙 伊斯兰兴起  AD 570-850',
  medieval: '🗡 中世纪  AD 900-1400',
  ottoman: '☪️ 奥斯曼帝国  AD 1453-1918',
  modern: '🔥 近现代  1916-1989',
  contemporary: '🌐 当代  1990-今'
};

const regionalEraSummaries = {
  ancient: '从两河和尼罗河的城市化起步，中东先学会了把城市、文字、水利和权力绑在一起。',
  classical: '帝国视角从近东内部转向地中海，波斯、希腊化与罗马把中东拉进更大的古典世界。',
  islamic: '宗教共同体迅速转为帝国秩序，新的政治语言、圣地网络与宗派记忆开始定型。',
  medieval: '突厥、十字军、蒙古与地方王朝轮番改写权力分布，中东进入多中心竞争时期。',
  ottoman: '奥斯曼把核心区重新整合进一个大帝国，直到欧洲干预和现代化压力逐步拆开旧秩序。',
  modern: '一战后殖民划线和民族国家拼装落地，现代边界与长期裂痕开始显影。',
  contemporary: '冷战后美国主导、代理人战争、巴以反复升级和以伊公开化对抗，共同定义了当代中东。'
};

function escapeInlineArg(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, ' ');
}

function getDetail(key) {
  return DETAILS[key] || p('该事件深度内容正在整理中。');
}

function getCurrentSelection() {
  if (currentMode === 'country') return COUNTRIES.find(item => item.id === currentCountry) || null;
  if (currentMode === 'conflict') return CONFLICTS.find(item => item.id === currentConflict) || null;
  return null;
}

function getLineKey() {
  if (currentMode === 'country') return `country:${currentCountry || 'none'}`;
  if (currentMode === 'conflict') return `conflict:${currentConflict || 'none'}`;
  return 'regional';
}

function getSectionKey(era) {
  return `${getLineKey()}|${era}|${currentEra}`;
}

function clearExpandedSections() {
  expandedSections.clear();
}

function initNavigation() {
  const countrySel = document.getElementById('countrySel');
  const conflictSel = document.getElementById('conflictSel');

  countrySel.innerHTML = `
    <div class="country-map-shell">
      <div class="country-map-stage" id="countryMap"></div>
      <div class="country-map-list">
        ${COUNTRIES.map(country => `<button class="country-list-btn" data-country-list="${country.id}" type="button">${country.name}</button>`).join('')}
      </div>
    </div>
  `;

  conflictSel.innerHTML = CONFLICTS.map(conflict =>
    `<button class="sub-btn" data-conflict="${conflict.id}">${conflict.name}</button>`
  ).join('');

  document.getElementById('modeBar').addEventListener('click', event => {
    const button = event.target.closest('.mode-btn');
    if (!button) return;

    currentMode = button.dataset.mode;
    currentCountry = null;
    currentConflict = null;
    clearExpandedSections();
    if (countryPickerHighlight && countryPickerMap) {
      countryPickerMap.removeLayer(countryPickerHighlight);
      countryPickerHighlight = null;
    }

    document.querySelectorAll('.mode-btn').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.sub-btn').forEach(item => item.classList.remove('active'));

    document.getElementById('countrySel').classList.toggle('open', currentMode === 'country');
    document.getElementById('conflictSel').classList.toggle('open', currentMode === 'conflict');

    if (currentMode === 'country') {
      ensureCountryPickerMap();
      setTimeout(() => {
        countryPickerMap && countryPickerMap.invalidateSize();
        syncCountryPickerSelection();
      }, 0);
    }
    renderOverview();
    rebuildTimeline();
  });

  countrySel.addEventListener('click', event => {
    const button = event.target.closest('[data-country-list]');
    if (!button) return;
    selectCountry(button.dataset.countryList);
  });

  conflictSel.addEventListener('click', event => {
    const button = event.target.closest('.sub-btn');
    if (!button) return;

    currentConflict = button.dataset.conflict;
    document.querySelectorAll('#conflictSel .sub-btn').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    clearExpandedSections();
    renderOverview();
    rebuildTimeline();
  });

  document.getElementById('timeline').addEventListener('click', event => {
    const toggle = event.target.closest('[data-era-toggle]');
    if (!toggle) return;
    const sectionKey = getSectionKey(toggle.dataset.eraToggle);
    if (expandedSections.has(sectionKey)) expandedSections.delete(sectionKey);
    else expandedSections.add(sectionKey);
    rebuildTimeline();
  });

  ensureCountryPickerMap();
}

function renderOverview() {
  const card = document.getElementById('overviewCard');
  const titleEl = document.getElementById('overviewTitle');
  const bodyEl = document.getElementById('overviewBody');
  const selection = getCurrentSelection();

  if (currentMode === 'regional') {
    card.classList.remove('open');
    return;
  }

  if (!selection) {
    card.classList.remove('open');
    return;
  }

  titleEl.textContent = selection.name;
  bodyEl.innerHTML = `${selection.overview || '<p>概览内容正在整理中。</p>'}`;
  card.classList.add('open');
}

function selectCountry(countryId) {
  currentCountry = countryId;
  clearExpandedSections();
  syncCountryPickerSelection();

  const selectedCountry = COUNTRIES.find(item => item.id === countryId);
  if (selectedCountry?.mapArea && countryPickerMap) {
    if (countryPickerHighlight) countryPickerMap.removeLayer(countryPickerHighlight);
    countryPickerHighlight = L.rectangle(selectedCountry.mapArea.bounds, {
      color: '#ff7f4d',
      weight: 2,
      fillColor: '#ff7f4d',
      fillOpacity: 0.12,
      interactive: false
    }).addTo(countryPickerMap);
    countryPickerMap.invalidateSize();
    setTimeout(() => {
      countryPickerMap.fitBounds(selectedCountry.mapArea.bounds, {
        maxZoom: 7,
        padding: [36, 36],
        animate: true
      });
    }, 30);
  }

  renderOverview();
  rebuildTimeline();
}

function getFilteredEvents() {
  const sorted = [...events].sort((a, b) => a.sortKey - b.sortKey);
  let filtered = sorted.filter(event => event.lineTypes?.includes(currentMode));

  if (currentMode === 'country') {
    if (!currentCountry) return [];
    filtered = filtered.filter(event => event.countries?.includes(currentCountry));
  } else if (currentMode === 'conflict') {
    if (!currentConflict) return [];
    filtered = filtered.filter(event => event.themes?.includes(currentConflict));
  }

  if (currentMode === 'regional' && currentEra !== 'all') {
    filtered = filtered.filter(event => event.era === currentEra);
  }

  return filtered;
}

function groupEventsByEra(filteredEvents) {
  return Object.keys(eraLabels)
    .map(era => ({
      era,
      events: filteredEvents.filter(event => event.era === era)
    }))
    .filter(group => group.events.length > 0);
}

function buildEraSummary(era, eraEvents) {
  if (currentMode === 'regional') {
    const regionalTitles = eraEvents
      .slice(0, 2)
      .map(event => event.me?.title || event.id)
      .join(' · ');
    const worldTitles = eraEvents
      .filter(event => event.world)
      .slice(0, 2)
      .map(event => event.world.title)
      .join(' · ');

    return `
      <div class="era-summary-grid">
        <div class="era-summary-card me">
          <span>中东主线</span>
          <strong>${regionalEraSummaries[era] || '这一章解释该时期怎样改变中东结构。'}</strong>
          <small>${regionalTitles || '本章展开后查看主要节点'}</small>
        </div>
        <div class="era-summary-spacer" aria-hidden="true"></div>
        <div class="era-summary-card world">
          <span>世界参照</span>
          <strong>${worldTitles || '展开后查看同期世界变化'}</strong>
          <small>和中东主线并排阅读</small>
        </div>
      </div>
    `;
  }

  const selection = getCurrentSelection();
  const representative = eraEvents
    .filter(event => event.priority !== 'context')
    .slice(0, 3)
    .map(event => event.me?.title || event.id);

  if (currentMode === 'country') {
    if (representative.length === 0) return `这一阶段主要用来交代${selection.name}在该时期的背景和位置。`;
    return `这一阶段重点看${selection.name}如何被${representative.join('、')}塑形。`;
  }

  if (representative.length === 0) return `这一阶段主要交代“${selection.name}”这条裂缝的结构背景。`;
  return `这一阶段重点看“${selection.name}”如何在${representative.join('、')}中进入新的升级段落。`;
}

function buildEraMeta(eraEvents) {
  const representative = eraEvents
    .filter(event => event.priority !== 'context')
    .slice(0, 3)
    .map(event => event.me?.title || event.id);

  const countText = `核心事件 ${eraEvents.length}`;
  if (representative.length === 0) return countText;
  return `${countText} · ${representative.join(' · ')}`;
}

function buildEmptyState() {
  const message = currentMode === 'country'
    ? '请选择一个国家'
    : '请选择一条专题';

  return `<div class="empty-state">
    <h3>${currentMode === 'country' ? '国家支线' : '冲突专题'}</h3>
    <p>${message}</p>
  </div>`;
}

function buildLineBadges(event, limit = 4) {
  const badges = [];

  (event.countries || []).slice(0, limit).forEach(countryId => {
    const country = COUNTRIES.find(item => item.id === countryId);
    if (country) badges.push(`<span class="line-badge country">${country.shortName || country.name}</span>`);
  });

  const remaining = Math.max(0, limit - badges.length);
  (event.themes || []).slice(0, remaining).forEach(themeId => {
    const conflict = CONFLICTS.find(item => item.id === themeId);
    if (conflict) badges.push(`<span class="line-badge conflict">${conflict.shortName || conflict.name}</span>`);
  });

  if (badges.length === 0) return '';
  return `<div class="line-badges">${badges.join('')}</div>`;
}

function buildRegionalRows(eraEvents) {
  const rows = eraEvents.map((event, index) => {
    const dotClass = (event.me && event.world) ? 'both' : (!event.me ? 'wo' : '');
    const meTag = escapeInlineArg(event.me?.tag || '');
    const meTitle = escapeInlineArg(event.me?.title || '');
    const worldTag = escapeInlineArg(event.world?.tag || '');
    const worldTitle = escapeInlineArg(event.world?.title || '');

    const meCard = event.me ? `<div class="event-card me">
      <div class="card-inner">
        <div class="card-tag">${event.me.tag}</div>
        <div class="card-title">${event.me.title}</div>
        ${event.me.meta ? `<div class="card-meta">${event.me.meta}</div>` : ''}
        <div class="card-desc">${event.me.desc}</div>
        <div class="card-actions">
          ${event.me.rid ? `<button class="act-btn map-btn" onclick="openMap('${event.me.rid}',event)">地图</button>` : ''}
          ${event.me.dk ? `<button class="act-btn dtl-btn" onclick="openDetail('${meTag}','${meTitle}','${event.year}','${event.me.dk}',event)">详情</button>` : ''}
        </div>
        ${buildLineBadges(event)}
      </div>
    </div>` : '<div class="event-card empty"></div>';

    const worldCard = event.world ? `<div class="event-card we">
      <div class="card-inner">
        <div class="card-tag">${event.world.tag}</div>
        <div class="card-title">${event.world.title}</div>
        <div class="card-desc">${event.world.desc}</div>
        <div class="card-actions">
          ${event.world.rid ? `<button class="act-btn map-btn" onclick="openMap('${event.world.rid}',event)">地图</button>` : ''}
          ${event.world.dk ? `<button class="act-btn dtl-btn" onclick="openDetail('${worldTag}','${worldTitle}','${event.year}','${event.world.dk}',event)">详情</button>` : ''}
        </div>
      </div>
    </div>` : '<div class="event-card empty"></div>';

    return `<div class="event-row vis" style="animation-delay:${index * 40}ms">
      <div>${meCard}</div>
      <div class="event-node">
        <div class="node-year">${event.yearShort}</div>
        <div class="node-dot ${dotClass}"></div>
      </div>
      <div>${worldCard}</div>
    </div>`;
  }).join('');

  return `
    <div class="regional-inline-head">
      <div class="regional-inline-label left"><span>中东</span></div>
      <div></div>
      <div class="regional-inline-label right"><span>世界</span></div>
    </div>
    ${rows}
  `;
}

function getScopedReason(event) {
  const selection = getCurrentSelection();
  if (!selection) return '';

  if (currentMode === 'country') {
    return `纳入本线原因：这件事改变了${selection.name}的边界、统治结构、内部裂痕或周边安全环境。`;
  }

  return `纳入本线原因：这件事让“${selection.name}”这条裂缝进入新的升级阶段，或改变了它的参与者与玩法。`;
}

function buildReadingCards(eraEvents) {
  return `<div class="reading-list">${eraEvents.map(event => {
    const meTag = escapeInlineArg(event.me?.tag || '');
    const meTitle = escapeInlineArg(event.me?.title || '');
    const factNote = event.factAsOf ? `<div class="reading-fact">事实冻结：${event.factAsOf}${event.status ? ` · 状态：${event.status}` : ''}</div>` : '';
    const worldAside = event.world ? `<div class="reading-aside"><strong>同期世界：</strong>${event.world.title}。${event.world.desc}</div>` : '';

    return `<article class="reading-card">
      <div class="reading-head">
        <div>
          <div class="reading-kicker">${event.yearShort} · ${event.me?.tag || '区域节点'}</div>
          <h3>${event.me?.title || event.id}</h3>
        </div>
        <div class="reading-actions">
          ${event.me?.rid ? `<button class="act-btn map-btn" onclick="openMap('${event.me.rid}',event)">地图</button>` : ''}
          ${event.me?.dk ? `<button class="act-btn dtl-btn" onclick="openDetail('${meTag}','${meTitle}','${event.year}','${event.me.dk}',event)">详情</button>` : ''}
        </div>
      </div>
      <p class="reading-desc">${event.me?.desc || ''}</p>
      <p class="reading-reason">${getScopedReason(event)}</p>
      <div class="reading-bridge"><strong>从上一章走到这里：</strong>${event.bridgeFromPrev}</div>
      ${factNote}
      ${worldAside}
      ${buildLineBadges(event, 5)}
    </article>`;
  }).join('')}</div>`;
}

function rebuildTimeline() {
  const container = document.getElementById('timeline');
  const filteredEvents = getFilteredEvents();
  document.getElementById('filterBar').style.display = currentMode === 'regional' ? 'flex' : 'none';
  document.querySelector('.col-headers').style.display = 'none';
  document.querySelector('.legend').style.display = currentMode === 'regional' ? 'flex' : 'none';

  container.dataset.mode = currentMode;

  if ((currentMode === 'country' && !currentCountry) || (currentMode === 'conflict' && !currentConflict)) {
    container.innerHTML = buildEmptyState();
    return;
  }

  const groups = groupEventsByEra(filteredEvents);
  if (groups.length === 0) {
    container.innerHTML = '<div class="empty-state"><h3>当前没有可显示内容</h3><p>请切换时代筛选，或选择另一条阅读线。</p></div>';
    return;
  }

  container.innerHTML = groups.map(({ era, events: eraEvents }) => {
    const sectionKey = getSectionKey(era);
    const isOpen = expandedSections.has(sectionKey);
    const summary = buildEraSummary(era, eraEvents);
    const content = currentMode === 'regional' ? buildRegionalRows(eraEvents) : buildReadingCards(eraEvents);

    return `<section class="era-section ${isOpen ? 'open' : ''}">
      <button class="era-toggle" data-era-toggle="${era}">
        <div class="era-toggle-main">
          <div class="era-toggle-label">${eraLabels[era]}</div>
          <div class="era-toggle-summary">${summary}</div>
          <div class="era-toggle-meta">${buildEraMeta(eraEvents)}</div>
        </div>
        <div class="era-toggle-state">${isOpen ? '收起章节' : '展开章节'}</div>
      </button>
      <div class="era-content ${isOpen ? 'open' : ''}">
        ${content}
      </div>
    </section>`;
  }).join('');
}

function syncCountryPickerSelection() {
  document.querySelectorAll('.country-list-btn').forEach(button => {
    button.classList.toggle('active', button.dataset.countryList === currentCountry);
  });

  countryPickerLayers.forEach(({ id, layer }) => {
    const isActive = id === currentCountry;
    layer.setStyle({
      color: isActive ? '#ff7f4d' : '#ffffff',
      weight: isActive ? 2.3 : 1.6,
      fillColor: isActive ? '#ff7f4d' : '#17385d',
      fillOpacity: isActive ? 1 : 0.96,
      radius: isActive ? 8 : 5.5
    });
  });
}

function ensureCountryPickerMap() {
  const target = document.getElementById('countryMap');
  if (!target || countryPickerMap) return;

  countryPickerMap = L.map('countryMap', {
    zoomControl: true,
    attributionControl: false,
    scrollWheelZoom: true
  }).setView(COUNTRY_PICKER_VIEW.center, COUNTRY_PICKER_VIEW.zoom);

  L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&hl=zh-CN&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 9
  }).addTo(countryPickerMap);

  countryPickerLayers = COUNTRIES
    .filter(country => country.mapArea)
    .map(country => {
      const layer = L.circleMarker(country.mapArea.point, {
        radius: 5.5,
        color: '#ffffff',
        weight: 1.6,
        fillColor: '#17385d',
        fillOpacity: 0.96
      }).addTo(countryPickerMap);

      layer.bindTooltip(country.name, { permanent: false, direction: 'top', className: 'leaflet-tooltip' });
      layer.on('mouseover', () => {
        if (country.id === currentCountry) return;
        layer.setStyle({ radius: 7, fillColor: '#4f7cff' });
      });
      layer.on('mouseout', () => {
        if (country.id === currentCountry) {
          syncCountryPickerSelection();
          return;
        }
        layer.setStyle({ radius: 5.5, fillColor: '#17385d' });
      });
      layer.on('click', () => selectCountry(country.id));
      return { id: country.id, layer };
    });
}

function ensureMap() {
  if (leafletMap) return;
  leafletMap = L.map('theMap', { zoomControl: true }).setView([31.5, 46], 6);
  L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&hl=zh-CN&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    attribution: '© Google Maps',
    maxZoom: 18
  }).addTo(leafletMap);
}

function clearMapLayers() {
  mapLayers.forEach(layer => leafletMap.removeLayer(layer));
  mapLayers = [];
}

function openMap(rid, evt) {
  if (evt) evt.stopPropagation();
  const region = R[rid];
  if (!region) return;

  const POINT_STYLES = {
    core: { radius: 7, color: '#fff', weight: 2, fillColor: '#E8B84B', fillOpacity: 0.95 },
    gateway: { radius: 7, color: '#fff', weight: 2, fillColor: '#D98324', fillOpacity: 0.95 },
    neighbor: { radius: 6, color: '#fff', weight: 2, fillColor: '#5DA9E9', fillOpacity: 0.95 },
    sacred: { radius: 6, color: '#fff', weight: 2, fillColor: '#A87DFF', fillOpacity: 0.95 }
  };
  const pointLegendDefault = {
    core: '重要城市 / 核心节点',
    gateway: '关键枢纽',
    neighbor: '周边互动中心',
    sacred: '宗教中心'
  };

  document.getElementById('mapTitle').textContent = region.name;
  document.getElementById('mapSubtitle').textContent = `历史疆域示意图 · ${region.note} · 底图：Google 地图当代国界与地名`;
  document.getElementById('mapModal').classList.add('open');
  ensureMap();
  clearMapLayers();

  let displayBounds = null;
  const usedPointKinds = new Set();

  if (region.polys) {
    region.polys.forEach(poly => {
      const layer = L.polygon(poly.pts, {
        color: poly.col,
        weight: poly.weight ?? 2.5,
        opacity: poly.opacity ?? 0.9,
        fillColor: poly.col,
        fillOpacity: poly.fillOpacity ?? 0.32,
        dashArray: poly.dashArray || null
      }).addTo(leafletMap);
      layer.bindTooltip(poly.lbl, { permanent: false, direction: 'center', className: 'leaflet-tooltip' });
      mapLayers.push(layer);
      displayBounds = displayBounds ? displayBounds.extend(layer.getBounds()) : layer.getBounds();
    });
  }

  if (region.pts) {
    region.pts.forEach(rawPoint => {
      const point = Array.isArray(rawPoint) ? { lat: rawPoint[0], lng: rawPoint[1], label: rawPoint[2], kind: 'core' } : rawPoint;
      const kind = point.kind || 'core';
      usedPointKinds.add(kind);
      const marker = L.circleMarker([point.lat, point.lng], POINT_STYLES[kind] || POINT_STYLES.core).addTo(leafletMap);
      marker.bindTooltip(point.label, { permanent: false, direction: 'top', className: 'leaflet-tooltip' });
      mapLayers.push(marker);
      displayBounds = displayBounds ? displayBounds.extend([point.lat, point.lng]) : L.latLngBounds([[point.lat, point.lng]]);
    });
  }

  const polyLegend = region.polys ? '<h4>历史疆域图例</h4>' + region.polys.map(poly =>
    `<div class="leg-item"><div class="leg-swatch" style="background:${poly.col}55;border:2px solid ${poly.col}"></div>${poly.lbl}</div>`
  ).join('') : '';

  const pointLegendItems = (region.pointLegend && region.pointLegend.length
    ? region.pointLegend
    : Array.from(usedPointKinds).map(kind => ({ kind, label: pointLegendDefault[kind] || '关键点位' })))
    .map(item => {
      const style = POINT_STYLES[item.kind] || POINT_STYLES.core;
      return `<div class="leg-item"><div class="leg-swatch" style="width:${(style.radius || 6) * 1.5}px;height:${(style.radius || 6) * 1.5}px;border-radius:50%;background:${style.fillColor};border:2px solid ${style.color}"></div>${item.label}</div>`;
    }).join('');

  const pointLegend = pointLegendItems ? `<div style="margin-top:10px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.75">主要点位</div>${pointLegendItems}` : '';

  document.getElementById('mapLegend').innerHTML = polyLegend + pointLegend
    + '<div class="leg-item" style="margin-top:10px;opacity:.6;font-size:10px;border-top:1px solid rgba(201,147,42,.2);padding-top:8px">注意：轮廓展示的是历史势力空间 / 互动范围，不等于现代国界</div>'
    + '<div class="leg-item" style="margin-top:4px;opacity:.5;font-size:10px">底图：Google 地图当代国界·城市·地名</div>';

  setTimeout(() => {
    leafletMap.invalidateSize();
    if (region.boundsMode === 'fit' && displayBounds && displayBounds.isValid()) {
      leafletMap.fitBounds(displayBounds.pad(region.padRatio ?? 0.06), { padding: [22, 22], maxZoom: region.zoom || 7, animate: true, duration: 1.2 });
    } else {
      leafletMap.flyTo(region.center, region.zoom, { duration: 1.2 });
    }
  }, 100);
}

function closeMap() {
  document.getElementById('mapModal').classList.remove('open');
}

function openDetail(tag, title, year, dk, evt) {
  if (evt) evt.stopPropagation();
  document.getElementById('detailTag').textContent = tag;
  document.getElementById('detailHeadTitle').textContent = title;
  document.getElementById('detailYear').textContent = year;
  document.getElementById('detailBody').innerHTML = getDetail(dk);
  document.getElementById('detailModal').classList.add('open');
  document.body.classList.add('detail-open');
}

function closeDetail() {
  document.getElementById('detailModal').classList.remove('open');
  document.body.classList.remove('detail-open');
}

function maybeCloseDetail(evt) {
  if (evt.target === document.getElementById('detailModal')) closeDetail();
}

document.getElementById('filterBar').addEventListener('click', event => {
  const button = event.target.closest('.filter-btn');
  if (!button) return;

  currentEra = button.dataset.era;
  document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  clearExpandedSections();
  rebuildTimeline();
  window.scrollTo({ top: 200, behavior: 'smooth' });
});

document.getElementById('mapModal').addEventListener('click', event => {
  if (event.target === event.currentTarget) closeMap();
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (document.getElementById('detailModal').classList.contains('open')) {
    closeDetail();
    return;
  }
  if (document.getElementById('mapModal').classList.contains('open')) closeMap();
});

initNavigation();
renderOverview();
rebuildTimeline();
