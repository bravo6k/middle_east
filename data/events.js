const events = [
  // ═══ ANCIENT ═══
  {id:'mesopotamia', era:'ancient', year:'约 BC 3500', yearShort:'3500BC',
   me:{tag:'苏美尔文明',title:'美索不达米亚城邦兴起',meta:'起点 · 城邦网络、文字与水利国家雏形',desc:'南两河灌溉平原上，乌鲁克、乌尔、尼普尔等城邦与周边聚落网络加速成形，文字和早期行政管理开始出现',rid:'mesopotamia',dk:'mesopotamia'},
   world:{tag:'史前世界',title:'尼罗河埃及走向统一',desc:'上下埃及逐渐统一，法老文明的黎明',rid:null,dk:null},
   countries:['Iraq'], themes:[], priority:'core'},

  {id:'akkad', era:'ancient', year:'BC 2334', yearShort:'2334BC',
   me:{tag:'阿卡德帝国',title:'萨尔贡跨城邦统一两河',meta:'距上一章约1100年 · 城邦竞争走向征服帝国',desc:'阿卡德王权第一次把南北两河压进同一帝国逻辑，苏美尔传统被收编进更大的王权机器',rid:'akkad',dk:'akkad'},
   world:{tag:'埃及',title:'古王国前夜的集中化',desc:'尼罗河谷也在探索更高强度的王权整合，河谷国家时代逐步成形',rid:null,dk:null},
   countries:['Iraq'], themes:[], priority:'core'},

  {id:'babylon', era:'ancient', year:'BC 1754', yearShort:'1754BC',
   me:{tag:'古巴比伦王国',title:'汉谟拉比整合两河并立法',meta:'距上一章约580年 · 帝国崩塌后，王国重新整合河谷',desc:'巴比伦从诸城竞争中胜出，282条判例式法律把王权、审判与秩序叙事捆在一起',rid:'babylon',dk:'babylon'},
   world:{tag:'中国',title:'商朝建立·甲骨文时代',desc:'约BC1600商汤建商，甲骨文时代开启，中华文明进入有文字记录的历史',rid:null,dk:null},
   countries:['Iraq'], themes:[], priority:'core'},

  {id:'neo_assyria', era:'ancient', year:'约 BC 671', yearShort:'671BC',
   me:{tag:'新亚述帝国',title:'军政帝国扩张至黎凡特与埃及',meta:'距上一章约1080年 · 帝国机器军事化、行省化',desc:'亚述把道路、行省、迁徙与高压统治推向极致，中东第一次见到真正的军政超级帝国',rid:'neo_assyria',dk:'neo_assyria'},
   world:{tag:'地中海',title:'希腊城邦与埃及同步活跃',desc:'爱琴海城邦世界逐渐成形，尼罗河与黎凡特继续卷入更广阔的区域政治',rid:null,dk:null},
   countries:['Iraq','Syria','Egypt','Lebanon'], themes:[], priority:'core'},

  {id:'neo_babylon', era:'ancient', year:'BC 586', yearShort:'586BC',
   me:{tag:'新巴比伦王国',title:'尼布甲尼撒重振巴比伦并西控黎凡特',meta:'距上一章约85年 · 亚述倒下后，巴比伦接手西方核心区',desc:'巴比伦重新成为帝国心脏，耶路撒冷陷落与流亡记忆让这一章深刻影响后世宗教传统',rid:'neo_babylon',dk:'neo_babylon'},
   world:{tag:'地中海',title:'城邦、王国与商路并存',desc:'埃及、腓尼基与希腊世界并行发展，东地中海越来越像相互连通的政治海盆',rid:null,dk:null},
   countries:['Iraq','Israel','Palestine'], themes:['巴以冲突'], priority:'core'},

  {id:'persia', era:'ancient', year:'BC 539', yearShort:'539BC',
   me:{tag:'阿契美尼德波斯',title:'居鲁士大帝攻克巴比伦',meta:'距上一章约47年 · 波斯吞并巴比伦，进入多民族帝国时代',desc:'波斯从伊朗高原强权跃升为跨地区帝国，收编巴比伦等旧文明中心，开启多民族帝国时代',rid:'persia',dk:'persia'},
   world:{tag:'中国',title:'春秋末·孔子时代',desc:'孔子BC551年生，儒家思想兴起，东西文明轴心时代同步到来',rid:null,dk:null},
   countries:['Iran','Iraq','Egypt','Turkey'], themes:[], priority:'core'},

  // ═══ CLASSICAL ═══
  {id:'persia_wars', era:'classical', year:'BC 490', yearShort:'490BC',
   me:{tag:'波斯战争',title:'马拉松战役与帝国西线碰撞',meta:'距上一章约49年 · 同一帝国的镜头转向爱琴海前线',desc:'这里讲的不是新帝国，而是同一波斯帝国在西部边缘与希腊城邦发生的正面冲撞',rid:'persia_wars',dk:'persia_wars'},
   world:{tag:'中国',title:'战国时代开始',desc:'周王室式微，七雄并立，诸子百家争鸣，商鞅变法向统一迈进',rid:null,dk:null},
   countries:['Iran','Turkey'], themes:[], priority:'core'},

  {id:'alexander', era:'classical', year:'BC 334', yearShort:'334BC',
   me:{tag:'亚历山大大帝',title:'马其顿军队横扫中东',meta:'距上一章约156年 · 希腊反向打回亚洲，进入希腊化时代',desc:'亚历山大征服波斯、埃及、两河流域，希腊化文明扩散至整个中东',rid:'alexander',dk:'alexander'},
   world:{tag:'印度',title:'孔雀王朝建立',desc:'旃陀罗笈多统一印度，阿育王时代到来，佛教开始向亚洲各地传播',rid:null,dk:null},
   countries:['Iran','Iraq','Egypt','Syria','Turkey'], themes:[], priority:'core'},

  {id:'roman_pompey', era:'classical', year:'BC 63', yearShort:'63BC',
   me:{tag:'罗马东方扩张',title:'庞培进入耶路撒冷·罗马接管叙利亚',meta:'距上一章约271年 · 希腊化王朝衰落，罗马接手东地中海',desc:'塞琉古与托勒密之后，中东东地中海逐步纳入罗马东方秩序，希腊化进入新阶段',rid:null,dk:'roman_pompey'},
   world:{tag:'罗马',title:'共和国迈向帝国前夜',desc:'地中海逐步被罗马收束，旧有王国越来越难独立生存',rid:null,dk:null},
   countries:['Syria','Israel','Palestine','Lebanon'], themes:['巴以冲突'], priority:'core'},

  {id:'jesus_crucifixion', era:'classical', year:'约 AD 30', yearShort:'AD30',
   me:{tag:'宗教诞生',title:'耶稣被钉十字架',desc:'基督教起源于巴勒斯坦，改变中东乃至整个西方文明走向',rid:null,dk:null},
   world:{tag:'中国',title:'东汉建立',desc:'刘秀光武中兴，佛教经丝路传入中国，中西文化交流深化',rid:null,dk:null},
   countries:['Israel','Palestine'], themes:['巴以冲突'], priority:'context'},

  {id:'second_temple', era:'classical', year:'AD 70', yearShort:'70',
   me:{tag:'罗马帝国',title:'第二圣殿被毁·犹太历史转折',meta:'距上一章约100年 · 罗马统治深化，宗教与身份结构重组',desc:'耶路撒冷第二圣殿毁灭，犹太社会、罗马统治与后世亚伯拉罕诸宗教记忆被深刻改写',rid:null,dk:'second_temple'},
   world:{tag:'罗马',title:'帝国秩序巩固',desc:'地中海进入更稳定的帝国统治，地方宗教与身份被重新塑形',rid:null,dk:null},
   countries:['Israel','Palestine'], themes:['巴以冲突'], priority:'core'},

  {id:'constantine_313', era:'classical', year:'AD 313', yearShort:'313',
   me:{tag:'晚期古典世界',title:'君士坦丁转向基督教·帝国宗教结构重排',meta:'距上一章约243年 · 受压宗教开始走向帝国中心',desc:'基督教从边缘群体走向帝国认可，为后来的拜占庭中东与宗教政治奠下新框架',rid:null,dk:'constantine_313'},
   world:{tag:'欧亚',title:'帝国宗教化加速',desc:'大型帝国越来越依赖统一信仰与政治秩序彼此加固',rid:null,dk:null},
   countries:['Turkey'], themes:[], priority:'core'},

  // ═══ ISLAMIC ═══
  {id:'muhammad_birth', era:'islamic', year:'AD 570', yearShort:'570',
   me:{tag:'伊斯兰诞生',title:'先知穆罕默德诞生于麦加',desc:'改变世界历史走向的人物之一，伊斯兰教创始人，永久改变了中东乃至全球格局',rid:null,dk:'muhammad_birth'},
   world:{tag:'中国',title:'隋朝统一中国',desc:'隋文帝结束南北朝分裂，修建大运河，开科举制度，为盛唐奠基',rid:null,dk:null},
   countries:['Saudi'], themes:['逊尼派-什叶派'], priority:'core'},

  {id:'hijra_622', era:'islamic', year:'AD 622', yearShort:'622',
   me:{tag:'伊斯兰共同体',title:'希吉拉·麦地那共同体形成',meta:'距上一章约52年 · 宗教运动开始转为政治共同体',desc:'穆罕默德迁往麦地那，伊斯兰从启示运动进入共同体建政阶段，时间纪元也由此展开',rid:null,dk:'hijra_622'},
   world:{tag:'欧亚',title:'晚古典世界裂变',desc:'拜占庭与萨珊长期消耗，给新力量腾出空间',rid:null,dk:null},
   countries:['Saudi'], themes:['逊尼派-什叶派'], priority:'core'},

  {id:'arab_conquests_636', era:'islamic', year:'AD 636', yearShort:'636',
   me:{tag:'阿拉伯征服',title:'亚穆克与卡迪西亚后，旧帝国退场',meta:'距上一章约14年 · 新共同体迅速变成地区霸权',desc:'伊斯兰共同体击败拜占庭与萨珊，两大旧帝国在中东核心区迅速失势',rid:null,dk:'arab_conquests_636'},
   world:{tag:'欧亚',title:'旧秩序松动',desc:'罗马-波斯双帝国长期对耗后的真空开始被新政权填补',rid:null,dk:null},
   countries:['Iraq','Syria','Iran','Egypt'], themes:[], priority:'core'},

  {id:'umayyad', era:'islamic', year:'AD 661', yearShort:'661',
   me:{tag:'倭马亚王朝',title:'倭马亚哈里发国建立（大马士革）',desc:'伊斯兰帝国版图扩展至西班牙、中亚；阿拉伯文化与科学大放异彩',rid:'umayyad',dk:'umayyad'},
   world:{tag:'唐朝',title:'唐朝李世民贞观之治',desc:'长安成为国际大都市，波斯、阿拉伯商人云集，丝路贸易繁盛',rid:null,dk:null},
   countries:['Syria','Iraq','Saudi','Egypt'], themes:['逊尼派-什叶派'], priority:'core'},

  {id:'karbala_680', era:'islamic', year:'AD 680', yearShort:'680',
   me:{tag:'宗派分化',title:'卡尔巴拉事件',meta:'距上一章约19年 · 哈里发继承冲突转为持久宗派记忆',desc:'侯赛因之死成为什叶派历史记忆核心，逊尼与什叶的政治神学分野被长期放大',rid:null,dk:'karbala_680'},
   world:{tag:'欧亚',title:'帝国与信仰并行扩展',desc:'宗教共同体与王朝统治的结合正在重塑更广阔的旧大陆',rid:null,dk:null},
   countries:['Iraq','Iran'], themes:['逊尼派-什叶派'], priority:'core'},

  {id:'abbasid', era:'islamic', year:'AD 750', yearShort:'750',
   me:{tag:'伊斯兰黄金时代',title:'阿拔斯哈里发国建立（巴格达）',desc:'伊斯兰黄金时代：科学、数学、天文、哲学空前繁荣，保存并发展古希腊知识',rid:'abbasid',dk:'abbasid'},
   world:{tag:'中国',title:'唐朝盛世',desc:'唐玄宗开元盛世，李白杜甫并世，是中国诗歌史上最辉煌的时代',rid:null,dk:null},
   countries:['Iraq','Iran'], themes:[], priority:'core'},

  // ═══ MEDIEVAL ═══
  {id:'seljuks_baghdad', era:'medieval', year:'AD 1055', yearShort:'1055',
   me:{tag:'塞尔柱突厥',title:'塞尔柱进入巴格达',meta:'距上一章约305年 · 阿拔斯仍在，但军政主导权北移',desc:'巴格达继续是宗教与学术中心，但真正的军政主导权开始转向突厥军事王朝',rid:null,dk:'seljuks_baghdad'},
   world:{tag:'欧亚草原',title:'突厥军事力量上升',desc:'游牧军事传统与定居帝国行政结构越来越深地结合',rid:null,dk:null},
   countries:['Iraq','Turkey','Iran'], themes:[], priority:'core'},

  {id:'crusaders', era:'medieval', year:'AD 1099', yearShort:'1099',
   me:{tag:'十字军',title:'第一次十字军东征·攻占耶路撒冷',desc:'欧洲基督徒屠城，建立十字军国家，中东各宗教命运深刻交织',rid:'crusader',dk:'crusaders'},
   world:{tag:'中国',title:'北宋鼎盛',desc:'宋代科技文化高峰：活字印刷（毕昇）、罗盘航海、火药武器化、纸币（世界最早）',rid:null,dk:null},
   countries:['Israel','Palestine','Syria','Lebanon','Turkey'], themes:['巴以冲突'], priority:'core'},

  {id:'saladin_1187', era:'medieval', year:'AD 1187', yearShort:'1187',
   me:{tag:'萨拉丁',title:'哈丁战役后收复耶路撒冷',meta:'距上一章约88年 · 十字军国家受挫，伊斯兰再整合反攻',desc:'萨拉丁击败十字军并收复耶路撒冷，反十字军叙事进入中东核心历史记忆',rid:null,dk:'saladin_1187'},
   world:{tag:'欧亚',title:'十字军与商路交织',desc:'地中海战争、朝圣和贸易正在把欧洲与中东更紧地绑在一起',rid:null,dk:null},
   countries:['Israel','Palestine','Syria','Egypt'], themes:['巴以冲突'], priority:'core'},

  {id:'mongols_baghdad', era:'medieval', year:'AD 1258', yearShort:'1258',
   me:{tag:'蒙古入侵',title:'蒙古洗劫巴格达·阿拔斯王朝覆灭',desc:'旭烈兀率蒙古骑兵灭亡阿拔斯王朝，巴格达图书馆付之一炬，伊斯兰黄金时代终结',rid:'mongol_invasion',dk:'mongols_baghdad'},
   world:{tag:'蒙古',title:'蒙古帝国·元朝建立',desc:'成吉思汗子孙建立横跨欧亚的蒙古帝国，忽必烈1271年建元朝',rid:null,dk:null},
   countries:['Iraq','Iran'], themes:[], priority:'core'},

  {id:'ottoman_founding_1299', era:'medieval', year:'AD 1299', yearShort:'1299',
   me:{tag:'奥斯曼前夜',title:'奥斯曼贝伊国崛起',meta:'距上一章约41年 · 蒙古冲击后，安纳托利亚出现新边疆强权',desc:'塞尔柱秩序碎裂后，奥斯曼家族从安纳托利亚边疆小邦开始扩张，未来帝国的种子出现',rid:null,dk:'ottoman_founding_1299'},
   world:{tag:'欧亚',title:'蒙古秩序重组后时代',desc:'旧帝国碎片、商路与地方军阀共同塑造新的边疆国家',rid:null,dk:null},
   countries:['Turkey'], themes:[], priority:'core'},

  // ═══ OTTOMAN ═══
  {id:'ottoman_conquest', era:'ottoman', year:'AD 1453', yearShort:'1453',
   me:{tag:'奥斯曼帝国',title:'穆罕默德二世攻陷君士坦丁堡',desc:'东罗马帝国终结，伊斯坦布尔成为新首都，奥斯曼主导中东',rid:'ottoman_peak',dk:'ottoman_conquest'},
   world:{tag:'欧洲',title:'文艺复兴鼎盛时代',desc:'达芬奇、米开朗基罗同时代，古腾堡印刷机改变信息传播，拜占庭学者逃亡意大利',rid:null,dk:null},
   countries:['Turkey'], themes:[], priority:'core'},

  {id:'ottoman_1517', era:'ottoman', year:'AD 1517', yearShort:'1517',
   me:{tag:'奥斯曼帝国',title:'征服开罗与阿拉伯核心区',meta:'距上一章约64年 · 帝国真正成为中东主宰',desc:'奥斯曼击败马穆鲁克，接管叙利亚、埃及与圣地保护权，中东核心区被正式纳入伊斯坦布尔体系',rid:null,dk:'ottoman_1517'},
   world:{tag:'印度洋',title:'海陆霸权重排',desc:'火器帝国、红海航线与葡萄牙海权共同改变旧有商贸网络',rid:null,dk:null},
   countries:['Turkey','Egypt','Syria','Iraq','Saudi'], themes:[], priority:'core'},

  {id:'ottoman_suleiman', era:'ottoman', year:'AD 1520', yearShort:'1520',
   me:{tag:'奥斯曼黄金时代',title:'苏莱曼大帝登基·帝国最盛期',desc:'疆域覆盖三大洲，建筑与文化辉煌，奥斯曼帝国成为当时世界最强大的政治实体',rid:'ottoman_peak',dk:null},
   world:{tag:'美洲',title:'阿兹特克帝国被征服',desc:'科尔特斯征服墨西哥，美洲白银流向欧洲，改变全球经济格局',rid:null,dk:null},
   countries:['Turkey','Egypt','Syria','Iraq'], themes:[], priority:'context'},

  {id:'napoleon_1798', era:'ottoman', year:'AD 1798', yearShort:'1798',
   me:{tag:'帝国震荡',title:'拿破仑入侵埃及',meta:'距上一章约278年 · 奥斯曼仍在，但欧洲力量开始直接改写中东',desc:'法国远征暴露奥斯曼边缘脆弱性，现代化与欧洲干预议题一起闯入中东',rid:null,dk:'napoleon_1798'},
   world:{tag:'欧洲',title:'革命与帝国时代',desc:'法国大革命后的欧洲正在把战争和新政治语言带向全球',rid:null,dk:null},
   countries:['Egypt'], themes:[], priority:'core'},

  // ═══ MODERN ═══
  {id:'sykes_picot', era:'modern', year:'1916', yearShort:'1916',
   me:{tag:'殖民地划分',title:'赛克斯-皮科协议',desc:'英法秘密瓜分奥斯曼中东遗产，人为划定国界，埋下百年冲突根源',rid:'sykes_picot',dk:'sykes_picot'},
   world:{tag:'一战',title:'第一次世界大战激战',desc:'凡尔登战役、索姆河战役——欧洲青年在战壕中大批死去，旧秩序走向崩溃',rid:null,dk:null},
   countries:['Syria','Lebanon','Iraq','Jordan','Palestine'], themes:['库尔德问题'], priority:'core'},

  {id:'sanremo_1920', era:'modern', year:'1920', yearShort:'1920',
   me:{tag:'委任统治',title:'圣雷莫会议与英法托管落地',meta:'距上一章约4年 · 秘密瓜分转为实际国界与托管统治',desc:'伊拉克、叙利亚、黎巴嫩、巴勒斯坦等地进入委任统治框架，现代国家拼装开始真正落地',rid:null,dk:'sanremo_1920'},
   world:{tag:'战后秩序',title:'国际联盟时代',desc:'一战后的新国际秩序试图用托管与条约管理旧帝国遗产',rid:null,dk:null},
   countries:['Syria','Lebanon','Iraq','Jordan','Palestine'], themes:['巴以冲突','库尔德问题'], priority:'core'},

  {id:'turkey_1923', era:'modern', year:'1923', yearShort:'1923',
   me:{tag:'国家成型',title:'土耳其共和国成立',meta:'距上一章约3年 · 帝国核心残部重组为民族国家',desc:'凯末尔废除苏丹国后的新共和国巩固安纳托利亚，现代土耳其国家框架成形',rid:null,dk:'turkey_1923'},
   world:{tag:'欧洲',title:'凡尔赛后重组持续',desc:'战后民族国家与帝国残余仍在重新拼装，欧亚边界和认同都在重写',rid:null,dk:null},
   countries:['Turkey'], themes:['库尔德问题'], priority:'core'},

  {id:'saudi_1932', era:'modern', year:'1932', yearShort:'1932',
   me:{tag:'国家成型',title:'沙特阿拉伯王国成立',meta:'距上一章约9年 · 半岛核心在王朝与宗教联盟下整合',desc:'伊本·沙特完成汉志与内志整合，阿拉伯半岛中部与圣地政治被重新组织',rid:null,dk:'saudi_1932'},
   world:{tag:'全球',title:'大萧条冲击世界',desc:'经济危机改变各国财政与战略，资源、贸易与国家能力问题更受重视',rid:null,dk:null},
   countries:['Saudi'], themes:[], priority:'core'},

  {id:'levant_independence_1946', era:'modern', year:'1946', yearShort:'1946',
   me:{tag:'国家成型',title:'叙黎独立与托管终结',meta:'距上一章约14年 · 委任统治逐步转为主权国家',desc:'叙利亚、黎巴嫩与周边托管地相继独立，英法拼装的政治单位开始以国家身份生存',rid:null,dk:'levant_independence_1946'},
   world:{tag:'战后世界',title:'联合国体系建立',desc:'殖民帝国开始退潮，主权国家与民族自决成为新合法性语言',rid:null,dk:null},
   countries:['Syria','Lebanon','Jordan'], themes:[], priority:'core'},

  {id:'israel_1948', era:'modern', year:'1948', yearShort:'1948',
   me:{tag:'以色列建国',title:'以色列宣布独立·第一次中东战争',desc:'犹太国家建立，70万巴勒斯坦人流离失所（纳克巴），现代冲突核心形成',rid:'israel_1948',dk:'israel_1948'},
   world:{tag:'冷战开始',title:'马歇尔计划·联合国人权宣言',desc:'美苏铁幕降落，二战后新世界秩序形成',rid:null,dk:null},
   countries:['Israel','Palestine','Egypt','Jordan','Syria','Lebanon','Iraq'], themes:['巴以冲突'], priority:'core'},

  {id:'suez_1956', era:'modern', year:'1956', yearShort:'1956',
   me:{tag:'苏伊士危机',title:'苏伊士运河危机与纳赛尔崛起',meta:'距上一章约8年 · 巴以冲突外溢为运河与大国角力',desc:'埃及国有化苏伊士运河，英法以联合出兵失败，阿拉伯民族主义声望大涨',rid:null,dk:'suez_1956'},
   world:{tag:'冷战',title:'去殖民化加速',desc:'美苏竞争与殖民帝国衰落同时推动新国家崛起',rid:null,dk:null},
   countries:['Egypt','Israel'], themes:['巴以冲突'], priority:'core'},

  {id:'war_1967', era:'modern', year:'1967', yearShort:'1967',
   me:{tag:'六日战争',title:'六日战争·以色列占领西岸与加沙',desc:'以色列六天击溃三国联军，占领西岸、加沙、西奈、戈兰高地，问题延续至今',rid:'war_1967',dk:'war_1967'},
   world:{tag:'越战',title:'越南战争升级·全球反战运动',desc:'美国深陷越战泥潭，全球青年运动与反文化浪潮席卷欧美',rid:null,dk:null},
   countries:['Israel','Palestine','Egypt','Jordan','Syria'], themes:['巴以冲突'], priority:'core'},

  {id:'yom_kippur_1973', era:'modern', year:'1973', yearShort:'1973',
   me:{tag:'十月战争',title:'赎罪日战争与石油武器',meta:'距上一章约6年 · 军事对抗延伸为全球能源政治',desc:'埃及和叙利亚突袭以色列，战后石油禁运冲击全球经济，也改变阿拉伯战略选择',rid:null,dk:'yom_kippur_1973'},
   world:{tag:'全球经济',title:'能源危机爆发',desc:'石油价格震荡让中东从地区冲突中心变成全球经济命门',rid:null,dk:null},
   countries:['Israel','Egypt','Syria','Saudi'], themes:['巴以冲突'], priority:'core'},

  {id:'iran_revolution', era:'modern', year:'1979', yearShort:'1979',
   me:{tag:'伊朗革命',title:'伊朗伊斯兰革命·苏联入侵阿富汗',desc:'霍梅尼推翻巴列维王朝建立伊斯兰共和国；苏联入侵阿富汗，圣战组织获美国支持',rid:'iran',dk:'iran_revolution'},
   world:{tag:'冷战末期',title:'撒切尔·里根上台',desc:'英美新自由主义政策重塑西方经济，冷战最后阶段紧张态势',rid:null,dk:null},
   countries:['Iran'], themes:['伊朗-美国-以色列','逊尼派-什叶派'], priority:'core'},

  {id:'iran_iraq_1980', era:'modern', year:'1980', yearShort:'1980',
   me:{tag:'两伊战争',title:'伊朗伊拉克战争爆发',meta:'距上一章约1年 · 革命输出与地区遏制走向全面消耗战',desc:'萨达姆与霍梅尼的政权安全焦虑点燃八年战争，海湾格局长期畸变',rid:null,dk:'iran_iraq_1980'},
   world:{tag:'冷战',title:'地区代理战争增多',desc:'大国竞争与革命政治让区域战争更加持久且致命',rid:null,dk:null},
   countries:['Iran','Iraq'], themes:['逊尼派-什叶派','伊朗-美国-以色列'], priority:'core'},

  // ═══ CONTEMPORARY ═══
  {id:'gulf_war_1990', era:'contemporary', year:'1990', yearShort:'1990',
   me:{tag:'海湾战争',title:'伊拉克入侵科威特·美国重兵进驻海湾',meta:'距上一章约10年 · 冷战后美国成为中东安全主导者',desc:'萨达姆吞并科威特触发多国联军，中东从区域争霸进一步转入美军深度介入时代',rid:null,dk:'gulf_war_1990'},
   world:{tag:'冷战终局',title:'单极时刻来临',desc:'苏联解体前夜，美国开始以压倒性力量塑造海湾秩序',rid:null,dk:null},
   countries:['Iraq','Kuwait','Saudi'], themes:['伊朗-美国-以色列'], priority:'core'},

  {id:'oslo_1993', era:'contemporary', year:'1993', yearShort:'1993',
   me:{tag:'巴以进程',title:'奥斯陆协议签署',meta:'距上一章约3年 · 占领冲突短暂转向谈判框架',desc:'以巴互相承认并启动有限自治安排，两国方案一度看似进入可操作阶段',rid:null,dk:'oslo_1993'},
   world:{tag:'后冷战',title:'谈判主义与全球化扩张',desc:'冷战结束后的国际气氛鼓励以协议而非总战争处理长期冲突',rid:null,dk:null},
   countries:['Israel','Palestine'], themes:['巴以冲突'], priority:'core'},

  {id:'sept11', era:'contemporary', year:'2001', yearShort:'2001',
   me:{tag:'反恐战争',title:'9·11恐怖袭击',desc:'基地组织袭击纽约，约3000人罹难；美国随即入侵阿富汗，「反恐战争」时代开启',rid:'afghanistan',dk:'sept11'},
   world:{tag:'全球',title:'互联网泡沫破裂·中国加入WTO',desc:'纳斯达克崩溃，全球化与技术革命并行，中国开始对世界经济产生决定性影响',rid:null,dk:null},
   countries:['Saudi'], themes:['代理人战争','伊朗-美国-以色列'], priority:'core'},

  {id:'iraq_war', era:'contemporary', year:'2003', yearShort:'2003',
   me:{tag:'伊拉克战争',title:'美国入侵伊拉克·萨达姆倒台',desc:'以"大规模杀伤性武器"为由开战，战后权力真空孕育IS，地区乱局延续至今',rid:'iraq_war',dk:'iraq_war'},
   world:{tag:'中国',title:'中国经济腾飞',desc:'GDP高速增长，成为世界工厂，全球化重心东移',rid:null,dk:null},
   countries:['Iraq'], themes:['代理人战争','伊朗-美国-以色列'], priority:'core'},

  {id:'lebanon_2006', era:'contemporary', year:'2006', yearShort:'2006',
   me:{tag:'黎以冲突',title:'以色列与真主党战争',meta:'距上一章约3年 · 巴以之外的北线战场单独升温',desc:'黎巴嫩南部与以色列北部爆发高强度战争，真主党-伊朗-以色列三角张力进一步制度化',rid:null,dk:'lebanon_2006'},
   world:{tag:'全球',title:'全球化高峰与反恐持续',desc:'美国仍在伊拉克和阿富汗深陷，区域武装与国家战争边界更模糊',rid:null,dk:null},
   countries:['Lebanon','Israel','Iran'], themes:['代理人战争','伊朗-美国-以色列'], priority:'core'},

  {id:'arab_spring', era:'contemporary', year:'2010', yearShort:'2010',
   me:{tag:'阿拉伯之春',title:'阿拉伯之春爆发',desc:'突尼斯小贩自焚引燃全区域革命浪潮，多国政权动荡，民主化命运各异',rid:'arab_spring',dk:'arab_spring'},
   world:{tag:'全球',title:'全球金融危机余波',desc:'欧债危机爆发，全球占领华尔街运动，经济不平等引发全球性社会运动',rid:null,dk:null},
   countries:['Egypt','Syria','Yemen','Tunisia','Libya'], themes:[], priority:'core'},

  {id:'syria_2011', era:'contemporary', year:'2011', yearShort:'2011',
   me:{tag:'叙利亚内战',title:'叙利亚内战全面爆发',meta:'距上一章约1年 · 阿拉伯之春在叙利亚转成长期代理人战争',desc:'抗议迅速演变为内战、难民潮与多国介入，中东秩序被重新撕裂',rid:null,dk:'syria_2011'},
   world:{tag:'欧洲',title:'难民与安全议题抬头',desc:'中东内战的外溢效应开始重塑欧洲与全球政治',rid:null,dk:null},
   countries:['Syria','Iran','Turkey','Iraq','Lebanon'], themes:['代理人战争','库尔德问题','逊尼派-什叶派'], priority:'core'},

  {id:'isis', era:'contemporary', year:'2014', yearShort:'2014',
   me:{tag:'IS崛起',title:'伊斯兰国占领摩苏尔·宣布建国',desc:'IS控制伊叙大片领土，对世界各地实施恐袭，引发大规模难民潮',rid:'isis',dk:'isis'},
   world:{tag:'乌克兰',title:'乌克兰危机·克里米亚被俄并吞',desc:'俄乌冲突开始，国际秩序受到冲击，西方对俄制裁拉开序幕',rid:null,dk:null},
   countries:['Iraq','Syria'], themes:['代理人战争'], priority:'core'},

  {id:'yemen_2015', era:'contemporary', year:'2015', yearShort:'2015',
   me:{tag:'也门内战',title:'也门战争地区化',meta:'距上一章约1年 · 代理人网络与红海安全问题合流',desc:'胡塞武装扩张后，沙特主导联军介入，也门冲突从内战升级为区域安全与航运危机的一部分',rid:null,dk:'yemen_2015'},
   world:{tag:'全球',title:'地区战争持续外溢',desc:'难民、航运与反恐议题开始把中东边缘战场推向全球视野',rid:null,dk:null},
   countries:['Yemen','Saudi','Iran'], themes:['代理人战争','逊尼派-什叶派'], priority:'core'},

  {id:'abraham_2020', era:'contemporary', year:'2020', yearShort:'2020',
   me:{tag:'地区重组',title:'亚伯拉罕协议与中东结盟重排',meta:'距上一章约6年 · 反伊朗与现实主义外交推动公开关系重排',desc:'以色列与多个阿拉伯国家关系正常化，巴勒斯坦问题不再是区域外交唯一轴心',rid:null,dk:'abraham_2020'},
   world:{tag:'全球',title:'疫情与地缘政治叠加',desc:'公共卫生危机与大国竞争同时推动各国重新思考联盟与供应链',rid:null,dk:null},
   countries:['Israel','UAE','Bahrain','Saudi'], themes:['巴以冲突','伊朗-美国-以色列'], priority:'core'},

  {id:'gaza_2023', era:'contemporary', year:'2023-10-07', yearShort:'2023.10',
   me:{tag:'加沙战争',title:'哈马斯袭击以色列·以军大规模攻击加沙',desc:'10月7日哈马斯突袭造成1200名以色列人死亡，以色列随即对加沙展开军事行动，人道主义危机空前',rid:'gaza',dk:'gaza_2023'},
   world:{tag:'全球',title:'俄乌战争持续·AI革命爆发',desc:'ChatGPT引发生成式AI浪潮，人类文明进入新技术纪元；多极世界格局加速形成',rid:null,dk:null},
   countries:['Israel','Palestine','Iran','Egypt','Lebanon'], themes:['巴以冲突','代理人战争'], priority:'core'},

  {id:'iran_israel_2024', era:'contemporary', year:'2024-04-13', yearShort:'2024.04',
   me:{tag:'以伊升级',title:'伊朗与以色列首次公开直接交火',meta:'距上一章约6个月 · 影子战争开始部分公开化',desc:'2024年4月13日至14日，伊朗从本土向以色列发射大量无人机与导弹，双方对抗首次公开跨越长期默契边界',rid:null,dk:'iran_israel_2024'},
   world:{tag:'全球',title:'国际法与威慑争议升温',desc:'各方围绕主权、报复、威慑与升级控制展开新一轮博弈',rid:null,dk:null},
   countries:['Israel','Iran'], themes:['伊朗-美国-以色列','代理人战争'], priority:'core'},

  {id:'assad_fall_2024', era:'contemporary', year:'2024-12-08', yearShort:'2024.12',
   me:{tag:'叙利亚转折',title:'阿萨德政权倒台',meta:'距上一章约8个月 · 代理人体系断裂开始改写黎凡特格局',desc:'2024年12月8日，反对派武装攻入大马士革，阿萨德政权垮台并流亡俄罗斯，叙利亚进入高度不确定的过渡阶段',rid:null,dk:'assad_fall_2024'},
   world:{tag:'地区秩序',title:'各方争夺后阿萨德时代布局',desc:'土耳其、海湾国家、伊朗残余网络与西方都在重新评估叙利亚与黎凡特力量平衡',rid:null,dk:null},
   countries:['Syria','Turkey','Iran','Lebanon'], themes:['代理人战争'], priority:'core'},

  {id:'gaza_ceasefire_2025_01', era:'contemporary', year:'2025-01-19', yearShort:'2025.01',
   me:{tag:'停火窗口',title:'加沙停火生效与分阶段换俘启动',meta:'距上一章约1个月 · 战火短暂停下，但战后安排仍悬空',desc:'2025年1月19日停火生效，部分人质与被关押的巴勒斯坦人开始交换，外交努力短暂压住了全面升级风险',rid:null,dk:'gaza_ceasefire_2025_01'},
   world:{tag:'地区外交',title:'各方试图阻止全面地区战争',desc:'海湾与周边国家在停火、援助与降级之间反复斡旋，稳定仍然脆弱',rid:null,dk:null},
   countries:['Israel','Palestine','Egypt'], themes:['巴以冲突'], priority:'core'},

  {id:'gaza_war_resume_2025_03', era:'contemporary', year:'2025-03-18', yearShort:'2025.03',
   me:{tag:'停火破裂',title:'加沙停火破裂与大规模战事恢复',meta:'距上一章约2个月 · 暂时降温未能跨过核心政治分歧',desc:'2025年3月18日大规模军事行动恢复，停火窗口关闭，关于治理、撤军和人质安排的分歧重新把冲突拖回高强度状态',rid:null,dk:'gaza_war_resume_2025_03'},
   world:{tag:'国际社会',title:'停火破裂引发新一轮谴责与斡旋',desc:'联合国与多国重新聚焦人道援助、停火条件和战后治理方案，但地面现实继续恶化',rid:null,dk:null},
   countries:['Israel','Palestine','Egypt'], themes:['巴以冲突','代理人战争'], priority:'core'},

  {id:'iran_us_israel_2026', era:'contemporary', year:'2026-03-15', yearShort:'2026.03',
   me:{tag:'局势卡',title:'截至 2026-03-15 的伊朗-以色列-美国紧张局势',meta:'距上一章约1年 · 核问题、代理人网络与海湾航道危机合流',desc:'截至2026年3月15日，伊朗、以色列和美国之间的对抗继续升温，地区安全、油运航道与升级控制一起承压',rid:null,dk:'iran_us_israel_2026'},
   world:{tag:'全球市场',title:'能源与航运风险上升',desc:'霍尔木兹海峡和地区基地安全重新牵动全球能源、保险和市场预期',rid:null,dk:null},
   countries:['Iran','Israel'], themes:['伊朗-美国-以色列','代理人战争'], priority:'core'},
];

const FACT_CUTOFF = '2026-03-15';
const ERA_ORDER = ['ancient', 'classical', 'islamic', 'medieval', 'ottoman', 'modern', 'contemporary'];
const EVENT_OVERRIDES = {
  mesopotamia: {
    bridgeFromPrev: '这是区域主线的起点：城市、文字和行政结构第一次在中东被稳定地绑在一起。',
    bridgeToNext: '下一章会从城邦竞争转入第一次跨城邦征服，说明两河如何从网络走向帝国。'
  },
  gaza_2023: {
    status: 'ongoing',
    bridgeFromPrev: '亚伯拉罕协议试图绕开巴勒斯坦问题，但 2023 年 10 月 7 日证明这条裂缝无法被外交重组简单覆盖。',
    bridgeToNext: '战火外溢把伊朗、以色列、黎巴嫩和红海安全都卷了进来，下一章因此转向公开化的以伊对抗。'
  },
  iran_israel_2024: {
    bridgeFromPrev: '加沙战争把长期影子对抗推向台前，伊朗与以色列首次以国家名义公开交换远程打击。',
    bridgeToNext: '这种公开化并没有立刻变成全面战争，但它削弱了旧有威慑默契，并为 2024 年底的黎凡特重组铺路。'
  },
  assad_fall_2024: {
    bridgeFromPrev: '以伊公开交火和代理人体系受损之后，叙利亚旧秩序也在 2024 年底突然断裂。',
    bridgeToNext: '后阿萨德时代没有自动带来稳定，接下来的停火与战事反复继续暴露整个地区的政治真空。'
  },
  gaza_ceasefire_2025_01: {
    bridgeFromPrev: '多线战场承压后，停火成为各方争取喘息和换俘的最低共识。',
    bridgeToNext: '但停火并未触及治理、撤军和主权等核心分歧，因此很快又被拖回战争逻辑。'
  },
  gaza_war_resume_2025_03: {
    bridgeFromPrev: '停火窗口很短，战场与谈判之间的落差再次证明“停火”不等于政治解决。',
    bridgeToNext: '当加沙问题重新僵死，地区安全焦点进一步回到伊朗核门槛与美以伊三角博弈。'
  },
  iran_us_israel_2026: {
    status: 'ongoing',
    bridgeFromPrev: '停火破裂后，地区重新回到更高一级的结构性问题：核门槛、海湾航道和联盟重组。',
    bridgeToNext: '这也是当前阶段的暂时终点：中东仍在等待下一轮秩序重组如何落地。'
  }
};

function parseSortKey(year, index) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(year)) {
    const [y, m, d] = year.split('-').map(Number);
    return y + ((m - 1) * 31 + d) / 372;
  }

  const bcMatch = year.match(/BC\s*(\d{1,4})/i);
  if (bcMatch) return -Number(bcMatch[1]) + index / 1000;

  const adMatch = year.match(/AD\s*(\d{1,4})/i);
  if (adMatch) return Number(adMatch[1]) + index / 1000;

  const yearMatch = year.match(/(\d{3,4})/);
  if (yearMatch) return Number(yearMatch[1]) + index / 1000;

  return index;
}

function defaultBridgeFrom(event, previousEvent) {
  if (!previousEvent) return '这是这条阅读主线的起点，先交代结构是如何长出来的。';
  return `上一章聚焦“${previousEvent.me?.title || previousEvent.id}”，这一章把视角推进到“${event.me?.title || event.id}”，展示结构如何继续演化。`;
}

function defaultBridgeTo(event, nextEvent) {
  if (!nextEvent) return '这暂时是当前主线的最后一个节点，后续需要继续关注其如何向下一轮秩序变化延伸。';
  return `这一章留下的结构性变化，会在下一章的“${nextEvent.me?.title || nextEvent.id}”里继续放大。`;
}

events
  .sort((a, b) => parseSortKey(a.year, 0) - parseSortKey(b.year, 0))
  .forEach((event, index, sortedEvents) => {
    const overrides = EVENT_OVERRIDES[event.id] || {};
    const previousEvent = sortedEvents[index - 1] || null;
    const nextEvent = sortedEvents[index + 1] || null;

    event.sortKey = overrides.sortKey ?? parseSortKey(event.year, index);
    event.lineTypes = overrides.lineTypes || [
      'regional',
      ...(event.countries?.length ? ['country'] : []),
      ...(event.themes?.length ? ['conflict'] : [])
    ];
    event.bridgeFromPrev = overrides.bridgeFromPrev || defaultBridgeFrom(event, previousEvent);
    event.bridgeToNext = overrides.bridgeToNext || defaultBridgeTo(event, nextEvent);
    event.status = overrides.status || event.status || null;

    if (event.era === 'contemporary') {
      event.factAsOf = event.factAsOf || FACT_CUTOFF;
    }
  });
