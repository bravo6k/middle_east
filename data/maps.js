const R={
mesopotamia:{name:'苏美尔·南美索不达米亚城邦带',center:[31.7,46.1],zoom:7,note:'今伊拉克南部与胡齐斯坦西缘 · 显示苏美尔核心区、灌溉腹地与周边接触带',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'核心城邦 / 宗教中心'},{kind:'gateway',label:'南北过渡枢纽'},{kind:'neighbor',label:'周边互动中心'}],
 polys:[
  {pts:[[33.15,43.75],[32.95,44.55],[32.6,45.25],[32.2,46.15],[31.8,47.1],[31.2,47.75],[30.55,48.15],[29.95,47.8],[29.7,47.1],[29.85,46.2],[30.15,45.35],[30.65,44.55],[31.35,43.95],[32.2,43.55],[33.15,43.75]],col:'#C9932A',lbl:'苏美尔城邦活动核心区',weight:2.8,fillOpacity:.26},
  {pts:[[32.7,44.1],[32.35,45.0],[31.95,45.95],[31.45,46.95],[30.95,47.55],[30.55,47.85],[30.15,47.55],[30.25,46.7],[30.45,45.95],[30.9,45.05],[31.45,44.35],[32.05,43.95],[32.7,44.1]],col:'#E0B04A',lbl:'主要灌溉城市带',weight:2,fillOpacity:.34},
  {pts:[[32.25,47.25],[32.15,48.25],[31.85,48.75],[31.4,48.85],[31.15,48.35],[31.2,47.55],[31.55,47.2],[32.25,47.25]],col:'#5DA9E9',lbl:'与伊朗高原西缘的接触带',weight:1.8,fillOpacity:.12,opacity:.85,dashArray:'6,5'}
 ],
 pts:[
  {lat:31.32,lng:45.64,label:'🏛 乌鲁克',kind:'core'},
  {lat:30.96,lng:46.10,label:'🏛 乌尔',kind:'core'},
  {lat:30.83,lng:45.99,label:'🏛 埃利都',kind:'core'},
  {lat:32.04,lng:45.25,label:'🏛 尼普尔',kind:'core'},
  {lat:31.61,lng:47.45,label:'🏛 拉格什',kind:'core'},
  {lat:32.54,lng:44.64,label:'🏛 基什',kind:'gateway'},
  {lat:31.84,lng:48.25,label:'🌄 苏萨 / 胡齐斯坦方向',kind:'neighbor'}]},
akkad:{name:'阿卡德帝国·萨尔贡统一两河',center:[33.1,44.8],zoom:6,note:'从南两河到中上幼发拉底 · 显示帝国第一次跨城邦整合',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'帝国核心 / 旧城邦中心'},{kind:'gateway',label:'北上与西向走廊'},{kind:'neighbor',label:'周边互动方向'}],
 polys:[
  {pts:[[33.6,43.8],[33.35,44.5],[33.0,45.35],[32.45,46.05],[31.9,46.45],[31.15,46.15],[30.75,45.55],[30.75,44.75],[31.05,44.1],[31.8,43.65],[32.7,43.55],[33.6,43.8]],col:'#B7742C',lbl:'阿卡德帝国核心整合区',weight:2.8,fillOpacity:.28},
  {pts:[[35.0,40.6],[34.6,41.8],[34.2,43.0],[33.8,44.15],[33.25,45.2],[32.5,45.95],[31.7,46.35],[31.1,46.15],[30.95,45.55],[31.3,44.75],[31.95,43.85],[32.8,43.1],[33.6,42.25],[34.25,41.2],[35.0,40.6]],col:'#D59649',lbl:'北上与西向控制走廊',weight:2.1,fillOpacity:.18},
  {pts:[[32.4,47.0],[32.25,47.9],[31.9,48.45],[31.45,48.55],[31.25,47.95],[31.45,47.2],[32.4,47.0]],col:'#5DA9E9',lbl:'东侧互动边缘',weight:1.8,fillOpacity:.12,opacity:.85,dashArray:'6,5'}
 ],
 pts:[
  {lat:32.54,lng:44.64,label:'👑 基什 / 阿卡德方向',kind:'core'},
  {lat:32.04,lng:45.25,label:'🏛 尼普尔',kind:'core'},
  {lat:31.32,lng:45.64,label:'🏛 乌鲁克',kind:'core'},
  {lat:30.96,lng:46.10,label:'🏛 乌尔',kind:'core'},
  {lat:34.55,lng:40.89,label:'🧭 马里',kind:'gateway'},
  {lat:35.46,lng:43.25,label:'🧭 阿淑尔方向',kind:'gateway'},
  {lat:31.84,lng:48.25,label:'🌄 苏萨方向',kind:'neighbor'}]},
babylon:{name:'古巴比伦王国·汉谟拉比统一时期',center:[33.1,44.8],zoom:6,note:'今伊拉克中南部至幼发拉底中游 · 显示核心王国、扩张走廊与周边竞争者',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'首都 / 核心城市 / 宗教中心'},{kind:'gateway',label:'旧强权中心 / 关键走廊'},{kind:'neighbor',label:'周边强权或互动中心'},{kind:'sacred',label:'宗教合法性节点'}],
 polys:[
  {pts:[[33.4,43.85],[33.2,44.55],[32.95,45.15],[32.5,45.8],[31.95,46.15],[31.35,46.05],[31.0,45.45],[31.0,44.7],[31.3,44.1],[31.85,43.7],[32.45,43.55],[33.0,43.6],[33.4,43.85]],col:'#A86424',lbl:'巴比伦王国核心控制区',weight:2.8,fillOpacity:.28},
  {pts:[[35.7,39.65],[35.35,40.55],[35.0,41.65],[34.75,42.85],[34.55,44.1],[34.15,45.15],[33.55,46.0],[32.75,46.45],[31.95,46.55],[31.25,46.2],[30.95,45.55],[31.05,44.75],[31.45,44.0],[32.1,43.45],[33.0,43.2],[34.0,42.75],[34.75,41.85],[35.35,40.8],[35.7,39.65]],col:'#C98A43',lbl:'汉谟拉比整合后的扩张与征服走廊',weight:2.2,fillOpacity:.18},
  {pts:[[33.15,46.35],[32.95,47.15],[32.6,48.1],[32.2,48.55],[31.9,48.3],[31.95,47.45],[32.35,46.6],[33.15,46.35]],col:'#5DA9E9',lbl:'与苏萨及埃兰世界接触的东侧边缘',weight:1.8,fillOpacity:.12,opacity:.85,dashArray:'6,5'}
 ],
 pts:[
  {lat:32.54,lng:44.42,label:'👑 巴比伦',kind:'core'},
  {lat:33.06,lng:44.28,label:'🏛 西帕尔',kind:'core'},
  {lat:32.39,lng:44.35,label:'🏛 博尔西帕',kind:'core'},
  {lat:32.04,lng:45.25,label:'⛩ 尼普尔',kind:'sacred'},
  {lat:31.30,lng:45.88,label:'⚓ 拉尔萨',kind:'gateway'},
  {lat:34.55,lng:40.89,label:'🧭 马里',kind:'gateway'},
  {lat:35.46,lng:43.25,label:'🛡 阿淑尔',kind:'neighbor'},
  {lat:32.19,lng:48.24,label:'🌄 苏萨',kind:'neighbor'}]},
neo_assyria:{name:'新亚述帝国·军政扩张高峰',center:[35.0,40.8],zoom:5,note:'从北两河到黎凡特与埃及 · 显示帝国核心、行省走廊与西线扩张',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'帝国核心都城'},{kind:'gateway',label:'被纳入的关键走廊'},{kind:'neighbor',label:'边缘强权或前线'}],
 polys:[
  {pts:[[37.2,41.2],[36.8,42.6],[36.3,44.1],[35.6,44.9],[34.9,44.85],[34.4,43.9],[34.3,42.6],[34.7,41.5],[35.5,40.85],[36.5,40.7],[37.2,41.2]],col:'#7B4A1B',lbl:'亚述帝国核心区',weight:2.8,fillOpacity:.28},
  {pts:[[31.0,30.8],[31.4,33.6],[32.5,36.3],[33.7,38.6],[34.9,40.7],[35.9,42.9],[36.9,44.6],[37.7,46.1],[36.8,47.0],[35.5,46.6],[34.2,44.9],[33.0,42.8],[31.9,40.2],[30.9,37.2],[30.3,34.2],[30.4,31.5],[31.0,30.8]],col:'#A9682A',lbl:'帝国行省与西线扩张带',weight:2.1,fillOpacity:.18},
  {pts:[[33.0,47.0],[32.8,48.1],[32.4,48.6],[31.9,48.5],[32.0,47.4],[33.0,47.0]],col:'#5DA9E9',lbl:'东侧边缘强权方向',weight:1.8,fillOpacity:.12,opacity:.85,dashArray:'6,5'}
 ],
 pts:[
  {lat:36.36,lng:43.15,label:'👑 尼尼微',kind:'core'},
  {lat:35.46,lng:43.25,label:'🏛 阿淑尔',kind:'core'},
  {lat:36.10,lng:43.32,label:'🏛 尼姆鲁德',kind:'core'},
  {lat:32.54,lng:44.42,label:'🧭 巴比伦',kind:'gateway'},
  {lat:33.51,lng:36.29,label:'🧭 大马士革',kind:'gateway'},
  {lat:31.78,lng:35.23,label:'🧭 耶路撒冷',kind:'gateway'},
  {lat:29.87,lng:31.21,label:'🌍 孟菲斯方向',kind:'neighbor'},
  {lat:32.19,lng:48.24,label:'🌄 苏萨方向',kind:'neighbor'}]},
neo_babylon:{name:'新巴比伦王国·尼布甲尼撒时期',center:[33.0,43.8],zoom:5,note:'从巴比伦到黎凡特 · 显示晚期本地帝国与波斯来临前夜',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'首都 / 宗教行政核心'},{kind:'gateway',label:'西线与流亡记忆节点'},{kind:'neighbor',label:'东方强权方向'}],
 polys:[
  {pts:[[33.4,43.7],[33.2,44.5],[32.9,45.3],[32.3,45.95],[31.7,46.15],[31.0,45.8],[30.85,45.0],[31.1,44.2],[31.6,43.7],[32.4,43.45],[33.4,43.7]],col:'#874B1E',lbl:'新巴比伦核心控制区',weight:2.8,fillOpacity:.28},
  {pts:[[34.9,35.0],[34.6,37.1],[34.2,39.3],[33.9,41.1],[33.5,42.9],[32.9,44.6],[32.0,45.8],[31.5,45.6],[31.5,44.7],[31.9,43.6],[32.6,42.2],[33.0,40.3],[33.3,38.2],[33.6,36.4],[34.1,35.2],[34.9,35.0]],col:'#B56B31',lbl:'西线控制与冲突走廊',weight:2.1,fillOpacity:.18},
  {pts:[[32.9,46.9],[32.75,47.8],[32.3,48.45],[31.9,48.5],[31.95,47.35],[32.9,46.9]],col:'#5DA9E9',lbl:'波斯与埃兰方向',weight:1.8,fillOpacity:.12,opacity:.85,dashArray:'6,5'}
 ],
 pts:[
  {lat:32.54,lng:44.42,label:'👑 巴比伦',kind:'core'},
  {lat:33.06,lng:44.28,label:'🏛 西帕尔',kind:'core'},
  {lat:32.39,lng:44.35,label:'🏛 博尔西帕',kind:'core'},
  {lat:32.04,lng:45.25,label:'🏛 尼普尔',kind:'core'},
  {lat:35.00,lng:39.00,label:'🧭 哈兰方向',kind:'gateway'},
  {lat:31.78,lng:35.23,label:'🧭 耶路撒冷',kind:'gateway'},
  {lat:33.27,lng:35.20,label:'🧭 推罗方向',kind:'gateway'},
  {lat:32.19,lng:48.24,label:'🌄 苏萨 / 波斯方向',kind:'neighbor'}]},
persia:{name:'阿契美尼德波斯帝国·居鲁士至大流士时期',center:[33.5,50.5],zoom:4,note:'从伊朗高原到埃及与小亚细亚 · 显示王朝核心区、帝国整合空间与西部前线',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'王朝核心都城 / 王权中心'},{kind:'gateway',label:'行省枢纽 / 皇家道路节点'},{kind:'neighbor',label:'边缘前线或重要旧文明中心'}],
 polys:[
  {pts:[[33.4,48.2],[32.7,49.3],[31.7,50.6],[30.8,51.8],[29.7,53.3],[29.1,54.4],[29.5,55.3],[30.7,55.8],[32.0,55.0],[33.0,53.6],[34.1,52.0],[34.7,50.6],[34.6,49.1],[33.9,48.3],[33.4,48.2]],col:'#5B3A9B',lbl:'波斯王朝本土核心区',weight:2.8,fillOpacity:.26},
  {pts:[[40.9,26.0],[39.6,29.4],[38.2,33.4],[36.2,36.5],[34.3,39.0],[32.4,42.8],[31.1,45.4],[30.0,49.2],[29.2,54.0],[28.4,59.4],[28.6,64.8],[30.7,67.4],[34.2,66.8],[36.7,63.5],[38.8,59.2],[40.8,53.4],[41.7,47.6],[41.7,41.0],[41.2,35.4],[40.9,26.0]],col:'#8461C9',lbl:'阿契美尼德帝国主要整合空间',weight:2.2,fillOpacity:.16},
  {pts:[[39.6,25.1],[39.0,26.8],[38.4,28.5],[37.7,29.4],[37.1,28.2],[37.3,26.5],[38.1,25.3],[39.6,25.1]],col:'#5DA9E9',lbl:'爱琴海东缘与小亚细亚西岸前线',weight:1.8,fillOpacity:.10,opacity:.85,dashArray:'6,5'}
 ],
 pts:[
  {lat:30.20,lng:53.18,label:'👑 帕萨尔加德',kind:'core'},
  {lat:29.94,lng:52.89,label:'👑 波斯波利斯',kind:'core'},
  {lat:32.19,lng:48.24,label:'🏛 苏萨',kind:'core'},
  {lat:34.80,lng:48.51,label:'🏛 埃克巴坦那',kind:'core'},
  {lat:32.54,lng:44.42,label:'🧭 巴比伦',kind:'gateway'},
  {lat:38.48,lng:28.03,label:'🧭 萨第斯',kind:'gateway'},
  {lat:30.04,lng:31.24,label:'🧭 孟菲斯',kind:'gateway'},
  {lat:31.78,lng:35.23,label:'🧭 耶路撒冷',kind:'gateway'},
  {lat:37.95,lng:23.72,label:'🌊 雅典方向',kind:'neighbor'},
  {lat:36.76,lng:34.61,label:'⚓ 奇里乞亚门户',kind:'neighbor'}]},
persia_wars:{name:'波斯战争·帝国西部前线',center:[38.0,31.5],zoom:5,note:'从苏萨到爱琴海 · 显示帝国西线、爱奥尼亚和希腊本土碰撞',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'帝国决策中心'},{kind:'gateway',label:'前线枢纽 / 海峡门户'},{kind:'neighbor',label:'希腊世界关键方向'}],
 polys:[
  {pts:[[39.2,26.4],[38.8,27.8],[38.3,29.1],[37.7,30.6],[37.0,31.6],[36.6,30.8],[36.7,29.4],[37.1,28.0],[37.8,26.9],[38.6,26.2],[39.2,26.4]],col:'#6F4AAE',lbl:'波斯在爱琴海东缘的稳定控制区',weight:2.8,fillOpacity:.24},
  {pts:[[38.8,47.9],[38.3,45.3],[37.8,42.0],[37.2,38.6],[36.8,35.0],[36.9,31.8],[37.4,29.1],[38.1,27.0],[39.1,26.1],[39.8,27.2],[40.0,30.0],[39.9,34.0],[39.8,38.7],[39.7,43.3],[39.4,46.3],[38.8,47.9]],col:'#8E67D0',lbl:'帝国西向交通与统治空间',weight:2.1,fillOpacity:.14},
  {pts:[[40.2,24.0],[39.7,25.4],[39.1,26.2],[38.4,25.7],[38.3,24.5],[39.1,23.8],[40.2,24.0]],col:'#5DA9E9',lbl:'海峡与爱琴海前线',weight:1.8,fillOpacity:.12,opacity:.85,dashArray:'6,5'}
 ],
 pts:[
  {lat:32.19,lng:48.24,label:'👑 苏萨',kind:'core'},
  {lat:38.48,lng:28.03,label:'🧭 萨第斯',kind:'gateway'},
  {lat:37.53,lng:27.27,label:'🧭 米利都',kind:'gateway'},
  {lat:40.20,lng:26.40,label:'🧭 赫勒斯滂方向',kind:'gateway'},
  {lat:38.15,lng:24.00,label:'🌊 马拉松方向',kind:'neighbor'},
  {lat:37.95,lng:23.72,label:'🌊 雅典方向',kind:'neighbor'}]},
alexander:{name:'亚历山大帝国·希腊化时代',center:[30,55],zoom:3,note:'从马其顿到印度河的征服 · 希腊化文明扩散',boundsMode:'fit',padRatio:0.1,
 pointLegend:[{kind:'core',label:'帝国核心城市'},{kind:'gateway',label:'征服路线关键节点'},{kind:'neighbor',label:'帝国边缘方向'}],
 polys:[
  {pts:[[42,20],[40,24],[38,27],[36,36],[31,33],[24,31],[20,38],[18,50],[20,56],[28,66],[36,68],[44,62],[47,48],[44,36],[42,25]],col:'#2060A0',lbl:'亚历山大帝国最大疆域',weight:2.5,fillOpacity:.22},
  {pts:[[41,22],[40,25],[38.5,28],[37,32],[36,35],[35,33],[36,30],[37.5,26],[39,23],[41,22]],col:'#4A90D0',lbl:'马其顿-安纳托利亚核心走廊',weight:2,fillOpacity:.30}
 ],
 pts:[
  {lat:31.2,lng:29.9,label:'🏛 亚历山大港',kind:'core'},
  {lat:32.5,lng:44.4,label:'👑 巴比伦（逝世地）',kind:'core'},
  {lat:29.9,lng:52.9,label:'🏛 波斯波利斯',kind:'gateway'},
  {lat:40.6,lng:22.9,label:'🧭 佩拉（马其顿）',kind:'gateway'},
  {lat:36.8,lng:36.2,label:'🧭 伊苏斯战役',kind:'gateway'},
  {lat:36.3,lng:43.1,label:'🧭 高加米拉战役',kind:'gateway'},
  {lat:31.5,lng:67.0,label:'🌄 印度河方向',kind:'neighbor'}]},
umayyad:{name:'倭马亚哈里发国·伊斯兰最大疆域',center:[28,25],zoom:2,note:'从西班牙到中亚 · 以大马士革为首都的阿拉伯帝国',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'帝国首都 / 核心城市'},{kind:'gateway',label:'征服前线 / 关键节点'},{kind:'sacred',label:'宗教圣地'}],
 polys:[
  {pts:[[43,-9],[40,0],[36,4],[32,8],[28,6],[24,6],[20,10],[16,14],[14,22],[16,28],[20,26],[24,20],[28,12],[32,8],[36,4],[40,2],[42,-8]],col:'#C07010',lbl:'北非',weight:2.2,fillOpacity:.20},
  {pts:[[42,25],[40,30],[38,36],[34,36],[28,37],[24,44],[20,50],[20,58],[24,62],[30,66],[36,64],[42,58],[46,50],[44,38],[42,30]],col:'#D08820',lbl:'中东至中亚',weight:2.5,fillOpacity:.25},
  {pts:[[42,-9],[40,-5],[38,0],[36,4],[34,2],[34,-6],[36,-10],[40,-10]],col:'#A06820',lbl:'伊比利亚（安达卢斯）',weight:2,fillOpacity:.22}
 ],
 pts:[
  {lat:33.5,lng:36.3,label:'👑 大马士革（首都）',kind:'core'},
  {lat:21.4,lng:39.8,label:'⛩ 麦加',kind:'sacred'},
  {lat:24.5,lng:39.6,label:'⛩ 麦地那',kind:'sacred'},
  {lat:37.5,lng:-0.9,label:'🧭 科尔多瓦',kind:'gateway'},
  {lat:30.0,lng:31.2,label:'🧭 福斯塔特（开罗前身）',kind:'gateway'},
  {lat:39.5,lng:44.0,label:'🧭 东部前线',kind:'neighbor'}]},
abbasid:{name:'阿拔斯哈里发国·伊斯兰黄金时代',center:[30,42],zoom:3,note:'以巴格达为中心 · 知识与文明的顶峰',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'帝国首都 / 学术中心'},{kind:'gateway',label:'行省核心城市'},{kind:'sacred',label:'宗教圣地'}],
 polys:[
  {pts:[[42,25],[40,30],[38,36],[34,37],[28,34],[24,40],[20,50],[20,56],[24,62],[30,66],[36,64],[42,58],[46,50],[44,36],[42,25]],col:'#1A5020',lbl:'阿拔斯帝国',weight:2.5,fillOpacity:.22},
  {pts:[[34.5,43.0],[34.0,44.5],[33.5,45.5],[32.5,45.5],[32.0,44.0],[32.5,43.0],[33.5,42.5],[34.5,43.0]],col:'#2A7030',lbl:'巴格达核心区',weight:2.8,fillOpacity:.35}
 ],
 pts:[
  {lat:33.3,lng:44.4,label:'👑 巴格达（智慧宫）',kind:'core'},
  {lat:36.2,lng:36.2,label:'🧭 阿勒颇',kind:'gateway'},
  {lat:21.4,lng:39.8,label:'⛩ 麦加',kind:'sacred'},
  {lat:30.0,lng:31.2,label:'🧭 福斯塔特',kind:'gateway'},
  {lat:39.6,lng:47.0,label:'🧭 东部行省',kind:'neighbor'}]},
crusader:{name:'十字军国家·黎凡特',center:[33,36],zoom:6,note:'1099–1291 · 欧洲基督教封建殖民的前线',boundsMode:'fit',padRatio:0.1,
 pointLegend:[{kind:'core',label:'十字军首都 / 核心据点'},{kind:'gateway',label:'重要港口 / 补给线'},{kind:'neighbor',label:'周边伊斯兰力量'}],
 polys:[
  {pts:[[37,35.5],[36,37],[35,38],[33.5,38.5],[32,37.5],[31.2,36.5],[30.8,35],[31.5,34.3],[32.5,34],[34.5,35],[35.5,35.5],[37,35.5]],col:'#8B2020',lbl:'十字军国家（全盛期）',weight:2.5,fillOpacity:.22},
  {pts:[[31.2,34.2],[31.8,35.5],[32.5,35.5],[33.0,34.8],[32.5,34.0],[31.2,34.2]],col:'#B03030',lbl:'耶路撒冷王国核心',weight:2.8,fillOpacity:.32}
 ],
 pts:[
  {lat:31.8,lng:35.2,label:'✝ 耶路撒冷',kind:'core'},
  {lat:32.9,lng:35.1,label:'⚓ 阿卡（港口）',kind:'gateway'},
  {lat:36.2,lng:36.2,label:'🧭 安条克公国',kind:'gateway'},
  {lat:34.4,lng:35.8,label:'🧭 的黎波里伯国',kind:'gateway'},
  {lat:33.5,lng:36.3,label:'🌄 大马士革方向',kind:'neighbor'}]},
mongol_invasion:{name:'蒙古入侵·巴格达覆灭',center:[38,60],zoom:3,note:'从蒙古草原到中东 · 1258年文明浩劫',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'蒙古帝国核心'},{kind:'gateway',label:'西征关键节点'},{kind:'neighbor',label:'被毁灭的城市'}],
 polys:[
  {pts:[[55,45],[50,55],[46,68],[42,78],[38,80],[34,68],[32,62],[34,56],[38,50],[44,46],[50,44],[55,46]],col:'#504010',lbl:'蒙古帝国西征路线',weight:2.2,fillOpacity:.18},
  {pts:[[36,42],[34,43],[32,45],[30,47],[29,48],[30,49],[32,48],[34,46],[36,44],[36,42]],col:'#8B2020',lbl:'被摧毁的伊拉克核心区',weight:2.8,fillOpacity:.28}
 ],
 pts:[
  {lat:33.3,lng:44.4,label:'💀 巴格达（1258洗劫）',kind:'neighbor'},
  {lat:40.6,lng:72.8,label:'🧭 撒马尔罕',kind:'gateway'},
  {lat:47.9,lng:106.9,label:'👑 哈拉和林',kind:'core'},
  {lat:30.0,lng:31.2,label:'🛡 开罗（马穆鲁克阻挡）',kind:'neighbor'}]},
ottoman_peak:{name:'奥斯曼帝国·苏莱曼全盛期',center:[37,27],zoom:3,note:'地跨三大洲 · 16世纪世界最强帝国',boundsMode:'fit',padRatio:0.06,
 pointLegend:[{kind:'core',label:'帝国首都'},{kind:'gateway',label:'行省核心城市'},{kind:'neighbor',label:'帝国边缘 / 对手方向'}],
 polys:[
  {pts:[[50,14],[46,18],[42,22],[40,22],[38,20],[37,16],[38,10],[42,10],[46,14]],col:'#1A3050',lbl:'欧洲行省（含匈牙利）',weight:2,fillOpacity:.20},
  {pts:[[42,26],[40,30],[38,36],[37,42],[38,44],[42,42],[44,38],[44,26]],col:'#1E4570',lbl:'安纳托利亚核心',weight:2.8,fillOpacity:.28},
  {pts:[[38,35],[36,37],[32,37],[28,36],[24,42],[20,50],[20,54],[24,56],[28,48],[32,42],[36,40],[38,39]],col:'#2A5090',lbl:'中东·阿拉伯半岛',weight:2.2,fillOpacity:.22},
  {pts:[[36,8],[32,14],[28,14],[22,14],[16,18],[16,24],[18,28],[22,24],[26,18],[30,14],[34,10]],col:'#1E4070',lbl:'北非行省',weight:2,fillOpacity:.18}
 ],
 pts:[
  {lat:41.0,lng:28.9,label:'👑 伊斯坦布尔',kind:'core'},
  {lat:30.0,lng:31.2,label:'🧭 开罗',kind:'gateway'},
  {lat:33.5,lng:36.3,label:'🧭 大马士革',kind:'gateway'},
  {lat:33.3,lng:44.4,label:'🧭 巴格达',kind:'gateway'},
  {lat:21.4,lng:39.8,label:'⛩ 麦加',kind:'sacred'},
  {lat:48.2,lng:16.4,label:'🌄 维也纳（被围）',kind:'neighbor'}]},
sykes_picot:{name:'赛克斯-皮科协议·1916',center:[33,40],zoom:4,note:'英法秘密瓜分奥斯曼中东遗产',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'协议划分的核心城市'},{kind:'gateway',label:'势力范围关键节点'},{kind:'neighbor',label:'争议 / 共管区'}],
 polys:[
  {pts:[[37,35],[35,39],[33,40],[31,39],[32,37],[34,35.5],[37,35]],col:'#4060A0',lbl:'法国势力范围（叙利亚·黎巴嫩）',weight:2.5,fillOpacity:.25},
  {pts:[[37,38],[34.5,44],[31,48],[29,50],[31,52],[34,50],[38,44],[37,38]],col:'#A04020',lbl:'英国势力范围（伊拉克·约旦）',weight:2.5,fillOpacity:.25},
  {pts:[[33.5,34.2],[33,35.5],[32,36.5],[31,35],[31.2,34],[33,34]],col:'#808020',lbl:'国际共管区（巴勒斯坦）',weight:2,fillOpacity:.20,dashArray:'6,5'}
 ],
 pts:[
  {lat:33.5,lng:36.3,label:'🧭 大马士革',kind:'core'},
  {lat:31.8,lng:35.2,label:'🧭 耶路撒冷',kind:'neighbor'},
  {lat:33.3,lng:44.4,label:'🧭 巴格达',kind:'core'},
  {lat:33.9,lng:35.5,label:'🧭 贝鲁特',kind:'gateway'},
  {lat:31.9,lng:35.9,label:'🧭 安曼',kind:'gateway'}]},
israel_1948:{name:'以色列建国·第一次中东战争',center:[31.8,35.2],zoom:7,note:'1948年停火线 · 以色列、西岸与加沙的初始划分',boundsMode:'fit',padRatio:0.1,
 pointLegend:[{kind:'core',label:'主要城市'},{kind:'gateway',label:'战略要地'},{kind:'neighbor',label:'周边国家方向'}],
 polys:[
  {pts:[[33.3,35.4],[33.1,36.2],[32.5,36.6],[31.2,35.3],[30.6,34.8],[30.5,34.3],[31.8,34.2],[32.5,34.8],[33.3,35.4]],col:'#1A3A6A',lbl:'以色列（1948停火线）',weight:2.5,fillOpacity:.25},
  {pts:[[32.3,35.2],[32,35.8],[31.3,36],[31,35.5],[31.3,35],[32.3,35.2]],col:'#806020',lbl:'西岸（约旦控制）',weight:2,fillOpacity:.28},
  {pts:[[31.6,34.2],[31.5,34.6],[31.2,34.6],[31.2,34.2]],col:'#604020',lbl:'加沙（埃及控制）',weight:2,fillOpacity:.28}
 ],
 pts:[
  {lat:31.8,lng:35.2,label:'✡ 耶路撒冷（分治）',kind:'core'},
  {lat:32.1,lng:34.8,label:'🏛 特拉维夫',kind:'core'},
  {lat:32.8,lng:35.0,label:'⚓ 海法',kind:'gateway'},
  {lat:31.25,lng:34.8,label:'🧭 贝尔谢巴',kind:'gateway'},
  {lat:29.5,lng:34.9,label:'🌄 埃拉特方向',kind:'neighbor'}]},
war_1967:{name:'六日战争·占领区',center:[31.0,34.5],zoom:5,note:'1967年以色列领土骤扩三倍 · 占领西岸、加沙、西奈、戈兰',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'主要城市'},{kind:'gateway',label:'战略要地 / 占领区'},{kind:'neighbor',label:'战场前线'}],
 polys:[
  {pts:[[33.3,35.4],[32.5,36.6],[31.2,35.3],[30.5,34.3],[31.8,34.2],[32.5,34.8],[33.3,35.4]],col:'#1A3A6A',lbl:'以色列本土',weight:2.8,fillOpacity:.28},
  {pts:[[32.5,35],[32,35.8],[31.3,36],[31,35.5],[31.3,35],[32.5,35]],col:'#2A5090',lbl:'占领：约旦河西岸',weight:2,fillOpacity:.22},
  {pts:[[31.7,34.2],[31.6,34.6],[31.2,34.6],[31.2,34.2]],col:'#203060',lbl:'占领：加沙',weight:2,fillOpacity:.22},
  {pts:[[31.5,32],[29.5,33],[27,34],[27,32],[29,28],[31.5,31]],col:'#3A6090',lbl:'占领：西奈半岛',weight:2,fillOpacity:.18},
  {pts:[[33.4,35.6],[33.4,36.2],[32.7,36.2],[32.7,35.6]],col:'#4A70A0',lbl:'占领：戈兰高地',weight:2,fillOpacity:.22}
 ],
 pts:[
  {lat:31.8,lng:35.2,label:'✡ 耶路撒冷（统一控制）',kind:'core'},
  {lat:29.98,lng:31.13,label:'🧭 西奈（占领）',kind:'gateway'},
  {lat:33.1,lng:35.8,label:'🧭 戈兰高地',kind:'gateway'},
  {lat:31.5,lng:34.45,label:'🧭 加沙',kind:'gateway'},
  {lat:32.0,lng:35.5,label:'🧭 纳布卢斯',kind:'neighbor'}]},
iran:{name:'伊朗伊斯兰共和国',center:[33,52],zoom:5,note:'1979年革命后 · 什叶派神权体制与区域强权',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'首都 / 政治中心'},{kind:'gateway',label:'重要城市 / 军事节点'},{kind:'sacred',label:'宗教圣城'}],
 polys:[{pts:[[42,44],[38,50],[34,56],[34,62],[38,64],[42,62],[46,52],[46,44]],col:'#1A5030',lbl:'伊朗',weight:2.5,fillOpacity:.22}],
 pts:[
  {lat:35.7,lng:51.4,label:'👑 德黑兰',kind:'core'},
  {lat:32.7,lng:51.7,label:'🏛 伊斯法罕',kind:'gateway'},
  {lat:34.6,lng:50.9,label:'⛩ 库姆（宗教中心）',kind:'sacred'},
  {lat:29.6,lng:52.5,label:'🧭 设拉子',kind:'gateway'},
  {lat:38.1,lng:46.3,label:'🧭 大不里士',kind:'gateway'}]},
afghanistan:{name:'阿富汗·反恐战争',center:[34,66],zoom:5,note:'2001–2021 · 美国最长战争的主战场',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'首都'},{kind:'gateway',label:'战略要地'},{kind:'neighbor',label:'边境 / 补给线'}],
 polys:[{pts:[[38,60],[34,64],[30,62],[28,62],[28,66],[32,70],[36,74],[40,70],[42,62],[38,60]],col:'#604020',lbl:'阿富汗',weight:2.5,fillOpacity:.22}],
 pts:[
  {lat:34.5,lng:69.2,label:'👑 喀布尔',kind:'core'},
  {lat:31.6,lng:65.7,label:'🧭 坎大哈',kind:'gateway'},
  {lat:36.7,lng:67.1,label:'🧭 马扎里沙里夫',kind:'gateway'},
  {lat:34.0,lng:71.5,label:'🌄 巴基斯坦边境',kind:'neighbor'}]},
iraq_war:{name:'伊拉克战争·萨达姆倒台',center:[33,44],zoom:5,note:'2003年美国入侵 · 权力真空与教派重组',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'首都 / 核心城市'},{kind:'gateway',label:'战略要地 / 逊尼三角'},{kind:'neighbor',label:'库区 / 南部港口'}],
 polys:[
  {pts:[[37,38],[34.5,44],[31,48],[29,50],[31,52],[36,47],[38,44],[37,38]],col:'#604020',lbl:'伊拉克',weight:2.5,fillOpacity:.22},
  {pts:[[35.5,42.5],[34.5,44.5],[33.0,44.5],[33.0,43.0],[34.0,42.0],[35.5,42.5]],col:'#8B4020',lbl:'逊尼三角区',weight:2,fillOpacity:.18,dashArray:'6,5'}
 ],
 pts:[
  {lat:33.3,lng:44.4,label:'👑 巴格达',kind:'core'},
  {lat:36.3,lng:43.1,label:'🧭 摩苏尔',kind:'gateway'},
  {lat:30.5,lng:47.8,label:'🧭 巴士拉',kind:'neighbor'},
  {lat:36.4,lng:44.4,label:'🧭 埃尔比勒（库区）',kind:'neighbor'},
  {lat:33.4,lng:43.8,label:'🧭 法卢杰',kind:'gateway'}]},
arab_spring:{name:'阿拉伯之春·2010–2012',center:[28,22],zoom:3,note:'多国革命浪潮 · 威权统治的多米诺倒塌',boundsMode:'fit',padRatio:0.06,
 pointLegend:[{kind:'core',label:'革命核心城市'},{kind:'gateway',label:'政权倒台 / 内战爆发'},{kind:'neighbor',label:'波及国家'}],
 polys:[
  {pts:[[38,8],[33,11],[33,8],[36,8]],col:'#A06020',lbl:'突尼斯（起火点）',weight:2.5,fillOpacity:.28},
  {pts:[[31.5,25],[29,33],[24,33],[20,36],[22,39],[26,36],[30,34],[31.5,28]],col:'#C07020',lbl:'埃及（穆巴拉克倒台）',weight:2.5,fillOpacity:.25},
  {pts:[[33,9],[28,14],[22,12],[16,18],[16,24],[18,28],[22,22],[28,14],[32,10]],col:'#805020',lbl:'利比亚（内战）',weight:2,fillOpacity:.20},
  {pts:[[37,35],[34,38],[28,36],[28,38],[34,40],[37.5,38]],col:'#8B2020',lbl:'叙利亚（长期内战）',weight:2.5,fillOpacity:.25}
 ],
 pts:[
  {lat:36.8,lng:10.2,label:'🔥 突尼斯',kind:'core'},
  {lat:30.0,lng:31.2,label:'🔥 开罗（解放广场）',kind:'core'},
  {lat:32.9,lng:13.2,label:'🧭 的黎波里',kind:'gateway'},
  {lat:33.5,lng:36.3,label:'🧭 大马士革',kind:'gateway'},
  {lat:15.4,lng:44.2,label:'🌄 萨那（也门）',kind:'neighbor'},
  {lat:26.2,lng:50.6,label:'🌄 麦纳麦（巴林）',kind:'neighbor'}]},
isis:{name:'伊斯兰国·IS控制区',center:[35,41],zoom:5,note:'2014–2019 · IS"哈里发国"的兴亡',boundsMode:'fit',padRatio:0.08,
 pointLegend:[{kind:'core',label:'IS"首都"/ 核心据点'},{kind:'gateway',label:'主要控制城市'},{kind:'neighbor',label:'IS扩展方向'}],
 polys:[
  {pts:[[37,36],[35,40],[33,44],[31,44],[30.5,43],[32,42],[34,40],[36,37],[37,36]],col:'#1a1a1a',lbl:'IS最大控制区（2014—2015）',weight:2.5,fillOpacity:.25},
  {pts:[[36.5,38.0],[36.0,39.5],[35.5,39.5],[35.5,38.5],[36.5,38.0]],col:'#3a3a3a',lbl:'拉卡核心区',weight:2.8,fillOpacity:.35}
 ],
 pts:[
  {lat:35.9,lng:38.9,label:'💀 拉卡（IS首都）',kind:'core'},
  {lat:36.3,lng:43.1,label:'⚠️ 摩苏尔',kind:'gateway'},
  {lat:33.4,lng:43.8,label:'🧭 法卢杰',kind:'gateway'},
  {lat:34.5,lng:41.0,label:'🧭 代尔祖尔',kind:'gateway'},
  {lat:34.6,lng:38.3,label:'🏛 帕尔米拉（被毁）',kind:'neighbor'}]},
gaza:{name:'加沙地带·2023年战争',center:[31.4,34.4],zoom:10,note:'365平方公里 · 世界上人口密度最高的冲突区',boundsMode:'fit',padRatio:0.15,
 pointLegend:[{kind:'core',label:'主要城市'},{kind:'gateway',label:'关键通道 / 边境'},{kind:'neighbor',label:'周边节点'}],
 polys:[{pts:[[31.7,34.15],[31.7,34.55],[31.2,34.55],[31.2,34.2]],col:'#8B1010',lbl:'加沙地带',weight:2.8,fillOpacity:.28}],
 pts:[
  {lat:31.5,lng:34.45,label:'🏛 加沙城',kind:'core'},
  {lat:31.4,lng:34.38,label:'🧭 汗尤尼斯',kind:'gateway'},
  {lat:31.28,lng:34.27,label:'🧭 拉法（南部边境）',kind:'gateway'},
  {lat:31.24,lng:34.21,label:'🌄 埃及方向',kind:'neighbor'}]},
};
