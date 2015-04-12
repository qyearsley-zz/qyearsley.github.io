/**
 * tradsimp.js
 * Convert all text that's marked as language 'zh' to simplified characters.
 * Requires jQuery.
 *
 * Quinten Yearsley
 * Created 2010
 * Modified 2013
*/

'use strict';

$(document).ready(function() {
  $("[lang|='zh']").each(function() {
    var text = $(this).html();
    $(this).html(simplify(text));
  });
});

// Build a simplified version by looking up one character at a time.
function simplify(str) {
  result = '';
  for (var i = 0; i < str.length; i++) {
    if (simplified[str[i]]) {
      result += simplified[str[i]];
    } else {
      result += str[i];
    }
  }
  return result;
}

// A dictionary of the ~1000 most common traditional characters that have
// different simplified equivalents.
var simplified = {
  '資': '资', '這': '这', '個': '个', '會': '会', '為': '为',
  '來': '来', '學': '学', '時': '时', '說': '说', '沒': '没',
  '問': '问', '過': '过', '請': '请', '們': '们', '麼': '麽',
  '還': '还', '電': '电', '對': '对', '機': '机', '訊': '讯',
  '國': '国', '發': '发', '無': '无', '當': '当', '於': '于',
  '嗎': '吗', '現': '现', '點': '点', '題': '题', '樣': '样',
  '經': '经', '謝': '谢', '開': '开', '話': '话', '與': '与',
  '實': '实', '愛': '爱', '華': '华', '動': '动', '應': '应',
  '種': '种', '車': '车', '長': '长', '關': '关', '間': '间',
  '鳳': '凤', '覺': '觉', '該': '该', '進': '进', '著': '着',
  '將': '将', '兩': '两', '論': '论', '龍': '龙', '別': '别',
  '體': '体', '給': '给', '聽': '听', '見': '见', '裡': '里',
  '東': '东', '風': '风', '灣': '湾', '網': '网', '區': '区',
  '錯': '错', '樂': '乐', '書': '书', '讓': '让', '選': '选',
  '較': '较', '數': '数', '內': '内', '場': '场', '從': '从',
  '歡': '欢', '認': '认', '幾': '几', '難': '难', '頭': '头',
  '許': '许', '買': '买', '統': '统', '記': '记', '號': '号',
  '處': '处', '計': '计', '師': '师', '並': '并', '張': '张',
  '誰': '谁', '結': '结', '連': '连', '設': '设', '陳': '陈',
  '報': '报', '轉': '转', '黨': '党', '變': '变', '氣': '气',
  '試': '试', '單': '单', '義': '义', '戰': '战', '隊': '队',
  '卻': '却', '業': '业', '寫': '写', '聲': '声', '臺': '台',
  '員': '员', '討': '讨', '則': '则', '檔': '档', '興': '兴',
  '強': '强', '議': '议', '辦': '办', '價': '价', '總': '总',
  '傳': '传', '決': '决', '組': '组', '萬': '万', '級': '级',
  '標': '标', '獨': '独', '貓': '猫', '門': '门', '語': '语',
  '線': '线', '馬': '马', '黃': '黄', '參': '参', '視': '视',
  '觀': '观', '聯': '联', '腦': '脑', '兒': '儿', '錢': '钱',
  '錄': '录', '專': '专', '換': '换', '遠': '远', '備': '备',
  '幫': '帮', '確': '确', '裝': '装', '類': '类', '講': '讲',
  '畫': '画', '訴': '诉', '帶': '带', '圖': '图', '費': '费',
  '賽': '赛', '識': '识', '邊': '边', '雖': '虽', '運': '运',
  '務': '务', '權': '权', '驗': '验', '讀': '读', '飛': '飞',
  '滿': '满', '夢': '梦', '課': '课', '軍': '军', '約': '约',
  '願': '愿', '達': '达', '夠': '够', '談': '谈', '術': '术',
  '賣': '卖', '勝': '胜', '準': '准', '況': '况', '離': '离',
  '導': '导', '團': '团', '調': '调', '證': '证', '傷': '伤',
  '剛': '刚', '殺': '杀', '軟': '软', '條': '条', '絕': '绝',
  '稱': '称', '據': '据', '盡': '尽', '聞': '闻', '園': '园',
  '產': '产', '雙': '双', '紅': '红', '執': '执', '雲': '云',
  '遊': '游', '須': '须', '質': '质', '職': '职', '復': '复',
  '輸': '输', '節': '节', '規': '规', '畢': '毕', '熱': '热',
  '館': '馆', '態': '态', '親': '亲', '亂': '乱', '寶': '宝',
  '擊': '击', '舉': '举', '終': '终', '斷': '断', '輕': '轻',
  '環': '环', '簡': '简', '響': '响', '隨': '随', '練': '练',
  '續': '续', '魚': '鱼', '極': '极', '陽': '阳', '幹': '干',
  '習': '习', '羅': '罗', '樓': '楼', '廣': '广', '煩': '烦',
  '鳥': '鸟', '顯': '显', '碼': '码', '聖': '圣', '壞': '坏',
  '預': '预', '眾': '众', '責': '责', '爭': '争', '誤': '误',
  '順': '顺', '貴': '贵', '負': '负', '壓': '压', '適': '适',
  '係': '系', '測': '测', '懷': '怀', '嗚': '呜', '評': '评',
  '細': '细', '醫': '医', '屬': '属', '戀': '恋', '敗': '败',
  '楊': '杨', '靈': '灵', '際': '际', '騎': '骑', '項': '项',
  '戲': '戏', '營': '营', '歷': '历', '爾': '尔', '編': '编',
  '護': '护', '補': '补', '擇': '择', '歲': '岁', '隻': '只',
  '領': '领', '尋': '寻', '溫': '温', '養': '养', '謂': '谓',
  '異': '异', '優': '优', '爛': '烂', '惡': '恶', '狀': '状',
  '維': '维', '陸': '陆', '吳': '吴', '詞': '词', '劇': '剧',
  '靜': '静', '亞': '亚', '陣': '阵', '嚴': '严', '壘': '垒',
  '勢': '势', '蘭': '兰', '緣': '缘', '週': '周', '廠': '厂',
  '簽': '签', '蠻': '蛮', '絡': '络', '輯': '辑', '創': '创',
  '趙': '赵', '舊': '旧', '雜': '杂', '麗': '丽', '禮': '礼',
  '腳': '脚', '劍': '剑', '慮': '虑', '紹': '绍', '劉': '刘',
  '憶': '忆', '諸': '诸', '罵': '骂', '純': '纯', '藝': '艺',
  '誠': '诚', '繼': '继', '紀': '纪', '釋': '释', '製': '制',
  '鍵': '键', '趕': '赶', '筆': '笔', '註': '注', '樹': '树',
  '鐵': '铁', '榮': '荣', '歸': '归', '葉': '叶', '彈': '弹',
  '衛': '卫', '銘': '铭', '塊': '块', '漢': '汉', '賞': '赏',
  '載': '载', '險': '险', '鐘': '钟', '構': '构', '囉': '罗',
  '螢': '萤', '偉': '伟', '薦': '荐', '啟': '启', '燈': '灯',
  '檢': '检', '媽': '妈', '豬': '猪', '濟': '济', '訓': '训',
  '藍': '蓝', '劃': '划', '擔': '担', '紙': '纸', '貼': '贴',
  '罷': '罢', '詳': '详', '協': '协', '顧': '顾', '臉': '脸',
  '島': '岛', '獎': '奖', '敵': '敌', '鄉': '乡', '冊': '册',
  '輪': '轮', '衝': '冲', '鷹': '鹰', '棄': '弃', '縣': '县',
  '緊': '紧', '購': '购', '僅': '仅', '帳': '帐', '層': '层',
  '鏡': '镜', '贊': '赞', '顆': '颗', '詩': '诗', '曉': '晓',
  '擁': '拥', '慶': '庆', '績': '绩', '獅': '狮', '圍': '围',
  '餘': '馀', '鬥': '斗', '範': '范', '輝': '辉', '譯': '译',
  '廳': '厅', '蓋': '盖', '揮': '挥', '積': '积', '驚': '惊',
  '碩': '硕', '籃': '篮', '丟': '丢', '盤': '盘', '宮': '宫',
  '帥': '帅', '貨': '货', '虛': '虚', '遺': '遗', '掛': '挂',
  '滅': '灭', '誌': '志', '圓': '圆', '銀': '银', '飯': '饭',
  '頂': '顶', '俠': '侠', '雞': '鸡', '諾': '诺', '輔': '辅',
  '臨': '临', '唸': '念', '憐': '怜', '蘇': '苏', '減': '减',
  '瘋': '疯', '採': '采', '屆': '届', '輩': '辈', '藥': '药',
  '騙': '骗', '綠': '绿', '縮': '缩', '獲': '获', '漸': '渐',
  '鋼': '钢', '廢': '废', '淚': '泪', '樞': '枢', '贏': '赢',
  '歐': '欧', '財': '财', '訂': '订', '觸': '触', '賢': '贤',
  '傑': '杰', '脫': '脱', '佈': '布', '蒼': '苍', '厭': '厌',
  '堅': '坚', '懶': '懒', '橋': '桥', '穩': '稳', '詢': '询',
  '絲': '丝', '塵': '尘', '慣': '惯', '濤': '涛', '誼': '谊',
  '佔': '占', '賴': '赖', '階': '阶', '豐': '丰', '貝': '贝',
  '郵': '邮', '隱': '隐', '慘': '惨', '納': '纳', '鄭': '郑',
  '煙': '烟', '倫': '伦', '搖': '摇', '織': '织', '複': '复',
  '莊': '庄', '擾': '扰', '揚': '扬', '癡': '痴', '頻': '频',
  '針': '针', '暫': '暂', '庫': '库', '陰': '阴', '蟲': '虫',
  '燒': '烧', '頁': '页', '蕭': '萧', '寧': '宁', '憲': '宪',
  '撥': '拨', '昇': '升', '髮': '发', '龜': '龟', '顏': '颜',
  '閒': '闲', '殘': '残', '託': '托', '鴻': '鸿', '辯': '辩',
  '擬': '拟', '違': '违', '憂': '忧', '銷': '销', '勞': '劳',
  '寢': '寝', '戶': '户', '額': '额', '農': '农', '擺': '摆',
  '橫': '横', '賀': '贺', '齊': '齐', '賺': '赚', '滾': '滚',
  '譜': '谱', '烏': '乌', '瞭': '了', '鬆': '松', '嚇': '吓',
  '鬧': '闹', '孫': '孙', '牠': '它', '鎖': '锁', '凱': '凯',
  '損': '损', '聰': '聪', '迴': '回', '競': '竞', '厲': '厉',
  '淨': '净', '牽': '牵', '溝': '沟', '飄': '飘', '淺': '浅',
  '獻': '献', '麵': '面', '艦': '舰', '縱': '纵', '閃': '闪',
  '蓮': '莲', '麥': '麦', '閱': '阅', '諒': '谅', '攝': '摄',
  '儀': '仪', '審': '审', '毀': '毁', '闆': '板', '憑': '凭',
  '鎮': '镇', '鋒': '锋', '寬': '宽', '驅': '驱', '頗': '颇',
  '臥': '卧', '遙': '遥', '蠍': '蝎', '奧': '奥', '齋': '斋',
  '槍': '枪', '閉': '闭', '頓': '顿', '勵': '励', '訪': '访',
  '薩': '萨', '飲': '饮', '閣': '阁', '搶': '抢', '緒': '绪',
  '儘': '尽', '掃': '扫', '欄': '栏', '嘗': '尝', '勸': '劝',
  '鮮': '鲜', '奮': '奋', '賜': '赐', '闡': '阐', '擴': '扩',
  '盜': '盗', '証': '证', '罰': '罚', '監': '监', '籌': '筹',
  '遲': '迟', '誇': '夸', '稅': '税', '紛': '纷', '誕': '诞',
  '鬱': '郁', '砲': '炮', '牆': '墙', '窩': '窝', '傾': '倾',
  '辭': '辞', '沖': '冲', '輛': '辆', '齡': '龄', '邏': '逻',
  '豈': '岂', '涼': '凉', '獸': '兽', '徑': '径', '潛': '潜',
  '猶': '犹', '築': '筑', '呂': '吕', '噴': '喷', '婦': '妇',
  '幣': '币', '壯': '壮', '魯': '鲁', '億': '亿', '恥': '耻',
  '捨': '舍', '湯': '汤', '窮': '穷', '勁': '劲', '膽': '胆',
  '醜': '丑', '躍': '跃', '繳': '缴', '澤': '泽', '韓': '韩',
  '彥': '彦', '駕': '驾', '緩': '缓', '恆': '恒', '軒': '轩',
  '鑑': '鉴', '彎': '弯', '賦': '赋', '刪': '删', '礙': '碍',
  '盃': '杯', '濃': '浓', '擋': '挡', '釣': '钓', '遜': '逊',
  '嘆': '叹', '蹟': '迹', '惱': '恼', '滄': '沧', '蔣': '蒋',
  '潔': '洁', '奪': '夺', '萊': '莱', '貪': '贪', '跡': '迹',
  '鍾': '锺', '穌': '稣', '療': '疗', '礎': '础', '僑': '侨',
  '霧': '雾', '徹': '彻', '謀': '谋', '犧': '牺', '繞': '绕',
  '壽': '寿', '爺': '爷', '騷': '骚', '繪': '绘', '飽': '饱',
  '鳴': '鸣', '貢': '贡', '壢': '坜', '鈴': '铃', '撿': '捡',
  '飾': '饰', '禍': '祸', '撐': '撑', '捲': '卷', '嵐': '岚',
  '靂': '雳', '擠': '挤', '覽': '览', '瑪': '玛', '錦': '锦',
  '楓': '枫', '賓': '宾', '獄': '狱', '側': '侧', '悶': '闷',
  '喬': '乔', '齒': '齿', '嶺': '岭', '韻': '韵', '綜': '综',
  '蹤': '踪', '邁': '迈', '傢': '家', '譽': '誉', '褲': '裤',
  '駛': '驶', '殼': '壳', '兇': '凶', '鍋': '锅', '懼': '惧',
  '銳': '锐', '虧': '亏', '闊': '阔', '塗': '涂', '夾': '夹',
  '鄰': '邻', '悅': '悦', '轟': '轰', '駐': '驻', '賭': '赌',
  '欽': '钦', '洩': '泄', '餅': '饼', '彌': '弥', '貫': '贯',
  '綱': '纲', '翹': '翘', '墮': '堕', '頑': '顽', '贈': '赠',
  '拋': '抛', '禪': '禅', '災': '灾', '偵': '侦', '讚': '赞',
  '趨': '趋', '遷': '迁', '爐': '炉', '慾': '欲', '濫': '滥',
  '漲': '涨', '賤': '贱', '鵝': '鹅', '軌': '轨', '貞': '贞',
  '祕': '秘', '蝦': '虾', '謠': '谣', '膠': '胶', '遞': '递',
  '髒': '脏', '倆': '俩', '屍': '尸', '鑽': '钻', '廁': '厕',
  '鶴': '鹤', '喪': '丧', '灑': '洒', '脈': '脉', '纏': '缠',
  '櫻': '樱', '渾': '浑', '噁': '恶', '儲': '储', '桿': '杆',
  '繫': '系', '茲': '兹', '鄧': '邓', '棟': '栋', '騰': '腾',
  '併': '并', '晉': '晋', '鴨': '鸭', '暢': '畅', '劑': '剂',
  '飆': '飙', '攜': '携', '壇': '坛', '喚': '唤', '儂': '侬',
  '櫃': '柜', '蟻': '蚁', '販': '贩', '襲': '袭', '謹': '谨',
  '敘': '叙', '賊': '贼', '燦': '灿', '侶': '侣', '攤': '摊',
  '羨': '羡', '謎': '谜', '綿': '绵', '賠': '赔', '籤': '签',
  '脅': '胁', '紐': '纽', '喲': '哟', '詠': '咏', '攔': '拦',
  '驟': '骤', '膚': '肤', '廟': '庙', '腸': '肠', '倉': '仓',
  '謊': '谎', '貿': '贸', '禦': '御', '踴': '踊', '蘋': '苹',
  '崗': '岗', '盪': '荡', '曆': '历', '匯': '汇', '誘': '诱',
  '謙': '谦', '鑰': '钥', '鈕': '钮', '堯': '尧', '盧': '卢',
  '憤': '愤', '螞': '蚂', '紋': '纹', '瑋': '玮', '囂': '嚣',
  '彿': '佛', '獵': '猎', '勳': '勋', '懇': '恳', '瓊': '琼',
  '凍': '冻', '穎': '颖', '軸': '轴', '樑': '梁', '潑': '泼',
  '龐': '庞', '銅': '铜', '閩': '闽', '糾': '纠', '叢': '丛',
  '鍊': '炼', '湊': '凑', '斃': '毙', '驕': '骄', '償': '偿',
  '蕩': '荡', '潤': '润', '餓': '饿', '佇': '伫', '濕': '湿',
  '踐': '践', '偽': '伪', '貧': '贫', '謬': '谬', '駁': '驳',
  '淵': '渊', '馳': '驰', '斬': '斩', '詭': '诡', '籠': '笼',
  '訝': '讶', '顛': '颠', '撲': '扑', '癢': '痒', '賄': '贿',
  '緻': '致', '饒': '饶', '闖': '闯', '諷': '讽', '診': '诊',
  '諧': '谐', '掙': '挣', '鈞': '钧', '覓': '觅', '瀟': '潇',
  '鋪': '铺', '懸': '悬', '詮': '诠', '岡': '冈', '攏': '拢',
  '壺': '壶', '淒': '凄', '肅': '肃', '濾': '滤', '醬': '酱',
  '纖': '纤', '輻': '辐', '寵': '宠', '漁': '渔', '墊': '垫',
  '縫': '缝', '駿': '骏', '駝': '驼', '疊': '叠', '僕': '仆',
  '箏': '筝', '剎': '刹', '墜': '坠', '癮': '瘾', '蠟': '蜡',
  '禱': '祷', '錶': '表', '籲': '吁', '娛': '娱', '颱': '台',
  '撫': '抚', '傘': '伞', '嬌': '娇', '錫': '锡', '禿': '秃',
  '淪': '沦', '剝': '剥', '湧': '涌', '絃': '弦', '磚': '砖',
  '狹': '狭', '頹': '颓', '驢': '驴', '珮': '佩', '債': '债',
  '鹽': '盐', '噹': '当', '噓': '嘘', '墾': '垦', '韋': '韦',
  '瑩': '莹', '穫': '获', '縛': '缚', '暈': '晕', '頸': '颈',
  '竊': '窃', '濁': '浊', '峽': '峡', '蘊': '蕴', '餵': '喂',
  '訣': '诀', '臟': '脏', '廂': '厢', '豔': '艳', '鵬': '鹏',
  '臘': '腊', '漿': '浆', '廚': '厨', '睜': '睁', '鑼': '锣',
  '釘': '钉', '嬰': '婴', '濱': '滨', '艱': '艰', '緯': '纬',
  '姦': '奸', '摯': '挚', '鴉': '鸦', '嚐': '尝', '璿': '璇',
  '撈': '捞', '綁': '绑', '貳': '贰', '燭': '烛', '懲': '惩',
  '爍': '烁', '膩': '腻', '樸': '朴', '頌': '颂', '遼': '辽',
  '妝': '妆', '諮': '谘', '蘿': '萝', '嚮': '向', '馮': '冯',
  '灘': '滩', '屢': '屡', '歎': '叹', '礦': '矿', '脹': '胀',
  '賈': '贾', '譴': '谴', '煉': '炼', '蠶': '蚕', '闢': '辟',
  '嘍': '喽', '盞': '盏', '飼': '饲', '鋁': '铝', '鉛': '铅',
  '嶼': '屿', '釵': '钗', '嘯': '啸', '頃': '顷', '鰱': '鲢',
  '彙': '汇', '豎': '竖', '燙': '烫', '吶': '呐', '鏘': '锵',
  '綽': '绰', '柵': '栅', '煥': '焕', '鷗': '鸥', '蠅': '蝇',
  '潰': '溃', '攪': '搅', '棲': '栖', '繭': '茧', '鴿': '鸽',
  '繩': '绳', '暱': '昵', '瞞': '瞒'
};

