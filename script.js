/*
Note: Below json objects were initially designed to be stored in a seperate .json file.
      It has been moved and modified into json objects due to CORS (Cross-Origin Resource Sharing) error.
      This website could be further enhanced later by moving these data back to .json file.
 */
const surname = '{"kor":"김", "eng":"Kim", "jap":"キム", "schn":"金","tchn":"金"}\n'
+'{"kor":"박", "eng":"Park", "jap":"パク", "schn":"朴", "tchn":"朴"}\n'
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"徐", "tchn":"徐"}\n'
+'{"kor":"최", "eng":"Choi", "jap":"チェ", "schn":"崔", "tchn":"崔"}\n'
+'{"kor":"윤", "eng":"Yoon", "jap":"ユン", "schn":"尹", "tchn":"尹"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"淨", "tchn":"净"}\n'
+'{"kor":"남", "eng":"Nam", "jap":"ナム", "schn":"南", "tchn":"南"}\n'
+'{"kor":"손", "eng":"Son", "jap":"ソン", "schn":"孙", "tchn":"孫"}\n'
+'{"kor":"송", "eng":"Song", "jap":"ソン", "schn":"宋", "tchn":"宋"}\n'
+'{"kor":"이", "eng":"Lee", "jap":"イ", "schn":"李", "tchn":"李"}\n'
+'{"kor":"방", "eng":"Bang", "jap":"バン", "schn":"庞", "tchn":"龐"}\n'
+'{"kor":"한", "eng":"Han", "jap":"ハン", "schn":"韩", "tchn":"韓"}\n'
+'{"kor":"변", "eng":"Byeon", "jap":"ビョン", "schn":"卞", "tchn":"卞"}\n'
+'{"kor":"문", "eng":"Moon", "jap":"ムン", "schn":"文", "tchn":"文"}\n'
+'{"kor":"노", "eng":"Roh", "jap":"ノ", "schn":"卢", "tchn":"盧"}\n'
+'{"kor":"남궁", "eng":"Namgung", "jap":"ナムグン", "schn":"南宫", "tchn":"南宫"}\n'
+'{"kor":"유", "eng":"Yoo", "jap":"ユ", "schn":"刘", "tchn":"劉"}\n'
+'{"kor":"조", "eng":"Jo", "jap":"ジョ", "schn":"赵", "tchn":"趙"}\n'
+'{"kor":"김", "eng":"Kim", "jap":"キム", "schn":"金","tchn":"金"}\n'
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"徐", "tchn":"徐"}\n'
+'{"kor":"차", "eng":"Cha", "jap":"チャ", "schn":"车", "tchn":"車"}\n'
+'{"kor":"소", "eng":"So", "jap":"ソ", "schn":"苏", "tchn":"蘇"}\n'
+'{"kor":"하", "eng":"Ha", "jap":"ハ", "schn":"河", "tchn":"河"}\n'
+'{"kor":"이", "eng":"Lee", "jap":"イ", "schn":"李", "tchn":"李"}\n'
+'{"kor":"강", "eng":"Gang", "jap":"カン", "schn":"姜", "tchn":"姜"}\n'
+'{"kor":"나", "eng":"Na", "jap":"ナ", "schn":"罗", "tchn":"羅"}\n'
+'{"kor":"김", "eng":"Kim", "jap":"キム", "schn":"金","tchn":"金"}\n'
+'{"kor":"백", "eng":"Baek", "jap":"ペク", "schn":"白", "tchn":"白"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"朱", "tchn":"朱"}\n'
+'{"kor":"봉", "eng":"Bong", "jap":"ポン", "schn":"奉", "tchn":"奉"}\n'
+'{"kor":"탁", "eng":"Tak", "jap":"タク", "schn":"卓", "tchn":"卓"}\n'
+'{"kor":"윤", "eng":"Yoon", "jap":"ユン", "schn":"尹", "tchn":"尹"}\n'
+'{"kor":"공", "eng":"Gong", "jap":"ゴン", "schn":"孔", "tchn":"孔"}\n'
+'{"kor":"구", "eng":"Goo", "jap":"ク", "schn":"具", "tchn":"具"}\n'
+'{"kor":"최", "eng":"Choi", "jap":"チェ", "schn":"崔", "tchn":"崔"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"淨", "tchn":"净"}\n'
+'{"kor":"장", "eng":"Jang", "jap":"ジャン", "schn":"张", "tchn":"張"}\n'
+'{"kor":"민", "eng":"Min", "jap":"ミン", "schn":"闵", "tchn":"閔"}\n'
+'{"kor":"전", "eng":"Jeon", "jap":"ジョン", "schn":"全", "tchn":"全"}\n'
+'{"kor":"곽", "eng":"Gwak", "jap":"カァク", "schn":"郭", "tchn":"郭"}\n'
+'{"kor":"오", "eng":"Oh", "jap":"オ", "schn":"吳", "tchn":"吳"}\n'
+'{"kor":"한", "eng":"Han", "jap":"ハン", "schn":"韩", "tchn":"韓"}\n'
+'{"kor":"표", "eng":"Pyo", "jap":"ピョ", "schn":"表", "tchn":"表"}\n'
+'{"kor":"배", "eng":"Bae", "jap":"ペ", "schn":"裵", "tchn":"裵"}\n'
+'{"kor":"최", "eng":"Choi", "jap":"チェ", "schn":"崔", "tchn":"崔"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"淨", "tchn":"净"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"池", "tchn":"池"}\n'
+'{"kor":"도", "eng":"Do", "jap":"ト", "schn":"都", "tchn":"都"}\n'
+'{"kor":"박", "eng":"Park", "jap":"パク", "schn":"朴", "tchn":"朴"}\n'
+'{"kor":"심", "eng":"Sim", "jap":"シム", "schn":"沈", "tchn":"沈"}\n'
+'{"kor":"신", "eng":"Shin", "jap":"シン", "schn":"申", "tchn":"申"}\n'
+'{"kor":"설", "eng":"Seol", "jap":"ソル", "schn":"薛", "tchn":"薛"}\n'
+'{"kor":"황", "eng":"Hwang", "jap":"ファン", "schn":"黃", "tchn":"黃"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"淨", "tchn":"净"}\n'
+'{"kor":"홍", "eng":"Hong", "jap":"ホン", "schn":"洪", "tchn":"洪"}\n'
+'{"kor":"최", "eng":"Choi", "jap":"チェ", "schn":"崔", "tchn":"崔"}\n'
+'{"kor":"조", "eng":"Jo", "jap":"ジョ", "schn":"赵", "tchn":"趙"}\n'
+'{"kor":"박", "eng":"Park", "jap":"パク", "schn":"朴", "tchn":"朴"}\n'
+'{"kor":"변", "eng":"Byeon", "jap":"ビョン", "schn":"卞", "tchn":"卞"}\n'
+'{"kor":"반", "eng":"Ban", "jap":"パン", "schn":"潘", "tchn":"潘"}\n'
+'{"kor":"이", "eng":"Lee", "jap":"イ", "schn":"李", "tchn":"李"}\n'
+'{"kor":"김", "eng":"Kim", "jap":"キム", "schn":"金","tchn":"金"}\n'
+'{"kor":"안", "eng":"An", "jap":"アン", "schn":"安", "tchn":"安"}\n'
+'{"kor":"박", "eng":"Park", "jap":"パク", "schn":"朴", "tchn":"朴"}\n'
+'{"kor":"양", "eng":"Yang", "jap":"ヤン", "schn":"梁", "tchn":"梁"}\n'
+'{"kor":"염", "eng":"Yeom", "jap":"ヨム", "schn":"廉", "tchn":"廉"}\n'
+'{"kor":"엄", "eng":"Eom", "jap":"オム", "schn":"严", "tchn":"嚴"}\n'
+'{"kor":"여", "eng":"Yeoh", "jap":"ヨ", "schn":"余", "tchn":"余"}\n'
+'{"kor":"왕", "eng":"Wang", "jap":"ワン", "schn":"王", "tchn":"王"}\n'
+'{"kor":"우", "eng":"Woo", "jap":"ウ", "schn":"禹", "tchn":"禹"}\n'
+'{"kor":"김", "eng":"Kim", "jap":"キム", "schn":"金","tchn":"金"}\n'
+'{"kor":"전", "eng":"Jeon", "jap":"ジョン", "schn":"全", "tchn":"全"}\n'
+'{"kor":"강", "eng":"Gang", "jap":"カン", "schn":"姜", "tchn":"姜"}\n'
+'{"kor":"윤", "eng":"Yoon", "jap":"ユン", "schn":"尹", "tchn":"尹"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"陈", "tchn":"陳"}\n'
+'{"kor":"임", "eng":"Lim", "jap":"イム", "schn":"林", "tchn":"林"}\n'
+'{"kor":"백", "eng":"Baek", "jap":"ペク", "schn":"白", "tchn":"白"}\n'
+'{"kor":"추", "eng":"Choo", "jap":"チュ", "schn":"秋", "tchn":"秋"}\n'
+'{"kor":"한", "eng":"Han", "jap":"ハン", "schn":"韩", "tchn":"韓"}\n'
+'{"kor":"천", "eng":"Cheon", "jap":"チョン", "schn":"千", "tchn":"千"}\n'
+'{"kor":"문", "eng":"Moon", "jap":"ムン", "schn":"文", "tchn":"文"}\n'
+'{"kor":"배", "eng":"Bae", "jap":"ペ", "schn":"裵", "tchn":"裵"}\n'
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"徐", "tchn":"徐"}\n'
+'{"kor":"이", "eng":"Lee", "jap":"イ", "schn":"李", "tchn":"李"}\n'
+'{"kor":"채", "eng":"Chae", "jap":"チェ", "schn":"蔡", "tchn":"蔡"}\n'
+'{"kor":"태", "eng":"Tae", "jap":"テ", "schn":"太", "tchn":"太"}\n'
+'{"kor":"라", "eng":"Ra", "jap":"ラ", "schn":"罗", "tchn":"羅"}\n'
+'{"kor":"최", "eng":"Choi", "jap":"チェ", "schn":"崔", "tchn":"崔"}\n'
+'{"kor":"류", "eng":"Ryu", "jap":"リュ", "schn":"柳", "tchn":"柳"}\n'
+'{"kor":"견", "eng":"Gyeon", "jap":"ギョン", "schn":"甄", "tchn":"甄"}\n'
+'{"kor":"국", "eng":"Guk", "jap":"グク", "schn":"鞠", "tchn":"鞠"}\n'
+'{"kor":"예", "eng":"Ye", "jap":"イェ", "schn":"芮", "tchn":"芮"}\n'
+'{"kor":"권", "eng":"Kwon", "jap":"クォン", "schn":"权", "tchn":"權"}\n'
+'{"kor":"성", "eng":"Seong", "jap":"ソング", "schn":"成", "tchn":"成"}\n'
+'{"kor":"금", "eng":"Geum", "jap":"クム", "schn":"琴", "tchn":"琴"}\n'
+'{"kor":"함", "eng":"Ham", "jap":"ハム", "schn":"咸", "tchn":"咸"}\n'
+'{"kor":"안", "eng":"An", "jap":"アン", "schn":"安", "tchn":"安"}\n'
+'{"kor":"허", "eng":"Heoh", "jap":"ホ", "schn":"许", "tchn":"許"}\n'
+'{"kor":"이", "eng":"Lee", "jap":"イ", "schn":"李", "tchn":"李"}\n'
+'{"kor":"마", "eng":"Ma", "jap":"マ", "schn":"马", "tchn":"馬"}\n'
+'{"kor":"김", "eng":"Kim", "jap":"キム", "schn":"金","tchn":"金"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"玄", "tchn":"玄"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"池", "tchn":"池"}\n'
+'{"kor":"전", "eng":"Jeon", "jap":"ジョン", "schn":"全", "tchn":"全"}\n'
+'{"kor":"윤", "eng":"Yoon", "jap":"ユン", "schn":"尹", "tchn":"尹"}\n'
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"徐", "tchn":"徐"}\n'
+'{"kor":"오", "eng":"Oh", "jap":"オ", "schn":"吳", "tchn":"吳"}\n'
+'{"kor":"이", "eng":"Lee", "jap":"イ", "schn":"李", "tchn":"李"}';

const f_first = '{"kor":"수", "eng":"Soo", "jap":"ス", "schn":"秀", "tchn":"秀", "mean":"Outstanding"}\n'
+'{"kor":"", "eng":"", "jap":"", "schn":"", "tchn":"", "mean":""}\n'
+'{"kor":"", "eng":"", "jap":"", "schn":"", "tchn":"", "mean":""}\n'
+'{"kor":"", "eng":"", "jap":"", "schn":"", "tchn":"", "mean":""}\n'
+'{"kor":"가", "eng":"Ga", "jap":"ガ", "schn":"可", "tchn":"可", "mean":"Right"}\n'
+'{"kor":"가", "eng":"Ga", "jap":"ガ", "schn":"佳", "tchn":"佳", "mean":"Beautiful"}\n'
+'{"kor":"다", "eng":"Da", "jap":"ダ", "schn":"多", "tchn":"多", "mean":"Many"}\n'
+'{"kor":"수", "eng":"Soo", "jap":"ス", "schn":"守", "tchn":"守", "mean":"Protecting"}\n'
+'{"kor":"윤", "eng":"Yun", "jap":"ユン", "schn":"阭", "tchn":"阭", "mean":"High"}\n'
+'{"kor":"윤", "eng":"Yun", "jap":"ユン", "schn":"赟", "tchn":"贇", "mean":"Pretty"}\n'
+'{"kor":"하", "eng":"Ha", "jap":"ハ", "schn":"沇", "tchn":"沇", "mean":"Flowing"}\n'
+'{"kor":"하", "eng":"Ha", "jap":"ハ", "schn":"霞", "tchn":"霞", "mean":"Sunset"}\n'
+'{"kor":"하", "eng":"Ha", "jap":"ハ", "schn":"抲", "tchn":"抲", "mean":"Leading"}\n'
+'{"kor":"미", "eng":"Mi", "jap":"ミ", "schn":"美", "tchn":"美", "mean":"Beautiful"}\n'
+'{"kor":"미", "eng":"Mi", "jap":"ミ", "schn":"媺", "tchn":"媺", "mean":"Kind and beautiful"}\n'
+'{"kor":"민", "eng":"Min", "jap":"ミン", "schn":"暋", "tchn":"暋", "mean":"Strong"}\n'
+'{"kor":"민", "eng":"Min", "jap":"ミン", "schn":"慜", "tchn":"慜", "mean":"Intelligent"}\n'
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"藇", "tchn":"藇", "mean":"Beautiful"}\n'
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"曙", "tchn":"曙", "mean":"Dawn"}\n'
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"㷂", "tchn":"㷂", "mean":"Bright"}\n'
+'{"kor":"세", "eng":"Sae", "jap":"セ", "schn":"洒", "tchn":"洒", "mean":"Washing"}\n'
+'{"kor":"시", "eng":"Si", "jap":"シ", "schn":"时", "tchn":"時", "mean":"Time"}\n'
+'{"kor":"소", "eng":"So", "jap":"ソ", "schn":"小", "tchn":"小", "mean":"Little"}\n'
+'{"kor":"승", "eng":"Seung", "jap":"スン", "schn":"承", "tchn":"承", "mean":"Connecting"}\n'
+'{"kor":"성", "eng":"Seong", "jap":"ソン", "schn":"晟", "tchn":"晟", "mean":"Bright"}\n'
+'{"kor":"성", "eng":"Seong", "jap":"ソン", "schn":"惺", "tchn":"惺", "mean":"Realizing"}\n'
+'{"kor":"설", "eng":"Seol", "jap":"ソル", "schn":"雪", "tchn":"雪", "mean":"Snow"}\n'
+'{"kor":"설", "eng":"Seol", "jap":"ソル", "schn":"契", "tchn":"偰", "mean":"Pure"}\n'
+'{"kor":"나", "eng":"Na", "jap":"ナ", "schn":"娜", "tchn":"娜", "mean":"Beautiful"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"善", "tchn":"善", "mean":"Kind"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"宣", "tchn":"宣", "mean":"Generous"}\n'
+'{"kor":"솔", "eng":"Sol", "jap":"ソル", "schn":"率", "tchn":"率", "mean":"Leading"}\n'
+'{"kor":"라", "eng":"Ra", "jap":"ラ", "schn":"蓏", "tchn":"蓏", "mean":"Berry"}\n'
+'{"kor":"리", "eng":"Ri", "jap":"リ", "schn":"悧", "tchn":"悧", "mean":"Clever"}\n'
+'{"kor":"아", "eng":"Ah", "jap":"ア", "schn":"雅", "tchn":"雅", "mean":"Clear"}\n' 
+'{"kor":"아", "eng":"Ah", "jap":"ア", "schn":"猗", "tchn":"猗", "mean":"Gentle"}\n'
+'{"kor":"여", "eng":"Yeo", "jap":"ヨ", "schn":"与", "tchn":"與", "mean":"Together"}\n'
+'{"kor":"예", "eng":"Yea", "jap":"イェ", "schn":"叡", "tchn":"叡", "mean":"Bright"}\n'
+'{"kor":"예", "eng":"Yea", "jap":"イェ", "schn":"艾", "tchn":"艾", "mean":"Ruling"}\n'
+'{"kor":"여", "eng":"Yeo", "jap":"ヨ", "schn":"丽", "tchn":"麗", "mean":"Lovely"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"缘", "tchn":"緣", "mean":"Tie"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"娫", "tchn":"娫", "mean":"Shinning"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"莲", "tchn":"蓮", "mean":"Lotus"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"宁", "tchn":"寧", "mean":"Peaceful"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"煐", "tchn":"煐", "mean":"Bright"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"伶", "tchn":"伶", "mean":"Smart"}\n'
+'{"kor":"유", "eng":"Yoo", "jap":"ユ", "schn":"唯", "tchn":"唯", "mean":"Only"}\n'
+'{"kor":"유", "eng":"Yoo", "jap":"ユ", "schn":"留", "tchn":"留", "mean":"Staying"}\n'
+'{"kor":"유", "eng":"Yoo", "jap":"ユ", "schn":"柳", "tchn":"柳", "mean":"Willow"}\n'
+'{"kor":"은", "eng":"Eun", "jap":"ウン", "schn":"恩", "tchn":"恩", "mean":"Grace"}\n'
+'{"kor":"은", "eng":"Eun", "jap":"ウン", "schn":"银", "tchn":"銀", "mean":"Silver"}\n'
+'{"kor":"은", "eng":"Eun", "jap":"ウン", "schn":"訚", "tchn":"誾", "mean":"Mild"}\n'
+'{"kor":"세", "eng":"Sae", "jap":"セ", "schn":"𡜧", "tchn":"𡜧", "mean":"Quiet"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"淨", "tchn":"净", "mean":"Clean"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"正", "tchn":"正", "mean":"Right"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"昼", "tchn":"晝", "mean":"Day"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"柱", "tchn":"柱", "mean":"Pillar"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"智", "tchn":"智", "mean":"Wisdom"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"支", "tchn":"支", "mean":"Sustaining"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"持", "tchn":"持", "mean":"Having"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"进", "tchn":"進", "mean":"Advancing"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"真", "tchn":"眞", "mean":"Honest"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"昣", "tchn":"昣", "mean":"Bright"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"渽", "tchn":"渽", "mean":"Clear"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"栽", "tchn":"栽", "mean":"Planting"}\n'
+'{"kor":"채", "eng":"Chae", "jap":"チェ", "schn":"彩", "tchn":"彩", "mean":"Colored"}\n'
+'{"kor":"채", "eng":"Chae", "jap":"チェ", "schn":"棌", "tchn":"棌", "mean":"Oak tree"}\n'
+'{"kor":"해", "eng":"Hae", "jap":"へ", "schn":"海", "tchn":"海", "mean":"Ocean"}\n'
+'{"kor":"해", "eng":"Hae", "jap":"へ", "schn":"祄", "tchn":"祄", "mean":"Helping"}\n'
+'{"kor":"태", "eng":"Tae", "jap":"テ", "schn":"脫", "tchn":"脫", "mean":"Delighted"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"炫", "tchn":"炫", "mean":"Bright"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"昡", "tchn":"昡", "mean":"Sunshine"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"玄", "tchn":"玄", "mean":"Black"}\n'
+'{"kor":"혜", "eng":"Hae", "jap":"へ", "schn":"慧", "tchn":"慧", "mean":"Wise"}\n'
+'{"kor":"혜", "eng":"Hae", "jap":"へ", "schn":"惠", "tchn":"惠", "mean":"Grace"}\n'
+'{"kor":"혜", "eng":"Hae", "jap":"へ", "schn":"憓", "tchn":"憓", "mean":"Loving"}\n'
+'{"kor":"혜", "eng":"Hae", "jap":"へ", "schn":"潓", "tchn":"潓", "mean":"Wave"}\n'
+'{"kor":"효", "eng":"Hyo", "jap":"ヒョ", "schn":"晓", "tchn":"曉", "mean":"Dawn"}\n'
+'{"kor":"희", "eng":"Hee", "jap":"ヒ", "schn":"喜", "tchn":"喜", "mean":"Glad"}\n'
+'{"kor":"희", "eng":"Hee", "jap":"ヒ", "schn":"熙", "tchn":"熙", "mean":"Splendid"}\n'
+'{"kor":"희", "eng":"Hee", "jap":"ヒ", "schn":"烯", "tchn":"烯", "mean":"Glow"}\n'
+'{"kor":"홍", "eng":"Hong", "jap":"ホン", "schn":"红", "tchn":"紅", "mean":"Red"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"贤", "tchn":"賢", "mean":"Clever"}';

const f_second = '{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"真", "tchn":"眞", "mean":"honest"}\n'
+'{"kor":"경", "eng":"Gyung", "jap":"ギョン", "schn":"景", "tchn":"景", "mean":"sunlight"}\n'
+'{"kor":"경", "eng":"Gyung", "jap":"ギョン", "schn":"庚", "tchn":"庚", "mean":"star"}\n'
+'{"kor":"경", "eng":"Gyung", "jap":"ギョン", "schn":"茎", "tchn":"莖", "mean":"stem"}\n'
+'{"kor":"란", "eng":"Ran", "jap":"ラン", "schn":"蘭", "tchn":"蘭", "mean":"orchid"}\n'
+'{"kor":"련", "eng":"Ryeon", "jap":"リョン", "schn":"莲", "tchn":"蓮", "mean":"lotus"}\n'
+'{"kor":"리", "eng":"Ri", "jap":"リ", "schn":"梨", "tchn":"梨", "mean":"pear tree"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"辰", "tchn":"辰", "mean":"star"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"珍", "tchn":"珍", "mean":"treasure"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"榛", "tchn":"榛", "mean":"hazel"}\n'
+'{"kor":"희", "eng":"Hee", "jap":"ヒ", "schn":"烯", "tchn":"烯", "mean":"glow"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"晛", "tchn":"晛", "mean":"sunshine"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"昡", "tchn":"昡", "mean":"sunlight"}\n'
+'{"kor":"해", "eng":"Hae", "jap":"へ", "schn":"海", "tchn":"海", "mean":"ocean"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"昡", "tchn":"昡", "mean":"sunshine"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"呟", "tchn":"呟", "mean":"sound"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"荣", "tchn":"榮", "mean":"flower"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"瑛", "tchn":"瑛", "mean":"glow of the gem"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"影", "tchn":"影", "mean":"shadow"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"铃", "tchn":"鈴", "mean":"bell"}\n'
+'{"kor":"희", "eng":"Hee", "jap":"ヒ", "schn":"喜", "tchn":"喜", "mean":"gladness"}\n'
+'{"kor":"희", "eng":"Hee", "jap":"ヒ", "schn":"牺", "tchn":"犧", "mean":"sacrifice"}\n'
+'{"kor":"희", "eng":"Hee", "jap":"ヒ", "schn":"烯", "tchn":"烯", "mean":"glow"}\n'
+'{"kor":"혜", "eng":"Hae", "jap":"へ", "schn":"潓", "tchn":"潓", "mean":"wave"}\n'
+'{"kor":"혜", "eng":"Hae", "jap":"へ", "schn":"彗", "tchn":"彗", "mean":"comet"}\n'
+'{"kor":"아", "eng":"Ah", "jap":"ア", "schn":"兒", "tchn":"兒", "mean":"child"}\n' 
+'{"kor":"아", "eng":"Ah", "jap":"ア", "schn":"阿", "tchn":"阿", "mean":"hill"}\n' 
+'{"kor":"아", "eng":"Ah", "jap":"ア", "schn":"皒", "tchn":"皒", "mean":"white light"}\n' 
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"西", "tchn":"西", "mean":"west"}\n'
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"谞", "tchn":"諝", "mean":"wisdom"}\n'
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"暑", "tchn":"暑", "mean":"midsummer"}\n'
+'{"kor":"민", "eng":"Min", "jap":"ミン", "schn":"珉", "tchn":"珉", "mean":"gem"}\n'
+'{"kor":"민", "eng":"Min", "jap":"ミン", "schn":"旻", "tchn":"旻", "mean":"autumn sky"}\n'
+'{"kor":"빈", "eng":"Bin", "jap":"ビン", "schn":"彬", "tchn":"彬", "mean":"brightness"}\n'
+'{"kor":"빈", "eng":"Bin", "jap":"ビン", "schn":"穦", "tchn":"穦", "mean":"fragrance"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"昼", "tchn":"晝", "mean":"day"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"柱", "tchn":"柱", "mean":"pillar"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"缘", "tchn":"緣", "mean":"tie"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"渊", "tchn":"淵", "mean":"pond"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"涓", "tchn":"涓", "mean":"stream"}\n'
+'{"kor":"원", "eng":"Won", "jap":"ウォン", "schn":"元", "tchn":"元", "mean":"best"}\n'
+'{"kor":"원", "eng":"Won", "jap":"ウォン", "schn":"愿", "tchn":"願", "mean":"desire"}\n'
+'{"kor":"원", "eng":"Won", "jap":"ウォン", "schn":"源", "tchn":"源", "mean":"root"}\n'
+'{"kor":"윤", "eng":"Yun", "jap":"ユン", "schn":"昀", "tchn":"昀", "mean":"sunshine"}\n'
+'{"kor":"윤", "eng":"Yun", "jap":"ユン", "schn":"鋆", "tchn":"鋆", "mean":"gold"}\n'
+'{"kor":"윤", "eng":"Yun", "jap":"ユン", "schn":"沇", "tchn":"沇", "mean":"flow"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"莲", "tchn":"蓮", "mean":"lotus"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"智", "tchn":"智", "mean":"wisdom"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"地", "tchn":"地", "mean":"ground"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"志", "tchn":"志", "mean":"will"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"善", "tchn":"善", "mean":"good"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"琁", "tchn":"琁", "mean":"jade"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"烍", "tchn":"烍", "mean":"bush fire"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"情", "tchn":"情", "mean":"love"}';
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"静", "tchn":"靜", "mean":"silence"}'
+'{"kor":"은", "eng":"Eun", "jap":"ウン", "schn":"恩", "tchn":"恩", "mean":"grace"}\n'
+'{"kor":"은", "eng":"Eun", "jap":"ウン", "schn":"溵", "tchn":"溵", "mean":"sound of water"}\n'
+'{"kor":"채", "eng":"Chae", "jap":"チェ", "schn":"彩", "tchn":"彩", "mean":"color"}\n'
+'{"kor":"은", "eng":"Eun", "jap":"ウン", "schn":"银", "tchn":"銀", "mean":"silver"}\n'
+'{"kor":"애", "eng":"Ae", "jap":"エ", "schn":"爱", "tchn":"愛", "mean":"love"}\n'
+'{"kor":"애", "eng":"Ae", "jap":"エ", "schn":"霭", "tchn":"靄", "mean":"haze"}\n'
+'{"kor":"화", "eng":"Hwa", "jap":"ファ", "schn":"火", "tchn":"火", "mean":"fire"}\n'
+'{"kor":"화", "eng":"Hwa", "jap":"ファ", "schn":"花", "tchn":"花", "mean":"flower"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"汀", "tchn":"汀", "mean":"riverside"}';

const m_first = '{"kor":"석", "eng":"Seok", "jap":"ソク", "schn":"石", "tchn":"石", "mean":"Stone"}\n'
+'{"kor":"", "eng":"", "jap":"", "schn":"", "tchn":"", "mean":""}\n'
+'{"kor":"", "eng":"", "jap":"", "schn":"", "tchn":"", "mean":""}\n'
+'{"kor":"", "eng":"", "jap":"", "schn":"", "tchn":"", "mean":""}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"进", "tchn":"進", "mean":"Advancing"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"真", "tchn":"眞", "mean":"Honest"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"昣", "tchn":"昣", "mean":"Bright"}\n'
+'{"kor":"강", "eng":"Gang", "jap":"カン", "schn":"江", "tchn":"江", "mean":"Riverine"}\n'
+'{"kor":"건", "eng":"Gun", "jap":"ガン", "schn":"健", "tchn":"健", "mean":"Firm"}\n'
+'{"kor":"강", "eng":"Gang", "jap":"カン", "schn":"强", "tchn":"強", "mean":"Strong"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"炫", "tchn":"炫", "mean":"Bright"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"昡", "tchn":"昡", "mean":"Sunshine"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"玄", "tchn":"玄", "mean":"Black"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"宁", "tchn":"寧", "mean":"Peaceful"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"煐", "tchn":"煐", "mean":"Bright"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"伶", "tchn":"伶", "mean":"Smart"}\n'
+'{"kor":"유", "eng":"Yoo", "jap":"ユ", "schn":"唯", "tchn":"唯", "mean":"Only"}\n'
+'{"kor":"유", "eng":"Yoo", "jap":"ユ", "schn":"留", "tchn":"留", "mean":"Staying"}\n'
+'{"kor":"윤", "eng":"Yun", "jap":"ユン", "schn":"阭", "tchn":"阭", "mean":"High"}\n'
+'{"kor":"윤", "eng":"Yun", "jap":"ユン", "schn":"赟", "tchn":"贇", "mean":"Pretty"}\n'
+'{"kor":"수", "eng":"Soo", "jap":"ス", "schn":"守", "tchn":"守", "mean":"Protecting"}\n'
+'{"kor":"수", "eng":"Soo", "jap":"ス", "schn":"秀", "tchn":"秀", "mean":"Outstanding"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"正", "tchn":"正", "mean":"Right"}\n'
+'{"kor":"민", "eng":"Min", "jap":"ミン", "schn":"暋", "tchn":"暋", "mean":"Strong"}\n'
+'{"kor":"민", "eng":"Min", "jap":"ミン", "schn":"慜", "tchn":"慜", "mean":"Intelligent"}\n'
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"㷂", "tchn":"㷂", "mean":"Bright"}\n'
+'{"kor":"서", "eng":"Seo", "jap":"ソ", "schn":"誓", "tchn":"誓", "mean":"Pledging"}\n'
+'{"kor":"세", "eng":"Sae", "jap":"セ", "schn":"洒", "tchn":"洒", "mean":"Washing"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"做", "tchn":"做", "mean":"Building"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"走", "tchn":"走", "mean":"Running"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"朱", "tchn":"朱", "mean":"Red"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"智", "tchn":"智", "mean":"Wisdom"}\n'
+'{"kor":"성", "eng":"Seong", "jap":"ソン", "schn":"成", "tchn":"成", "mean":"Achieving"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"善", "tchn":"善", "mean":"Kind"}\n'
+'{"kor":"성", "eng":"Seong", "jap":"ソン", "schn":"晟", "tchn":"晟", "mean":"Bright"}\n'
+'{"kor":"성", "eng":"Seong", "jap":"ソン", "schn":"惺", "tchn":"惺", "mean":"Realizing"}\n'
+'{"kor":"태", "eng":"Tae", "jap":"テ", "schn":"脫", "tchn":"脫", "mean":"Delighted"}\n'
+'{"kor":"태", "eng":"Tae", "jap":"テ", "schn":"太", "tchn":"太", "mean":"Big"}\n'
+'{"kor":"국", "eng":"Guk", "jap":"グク", "schn":"国", "tchn":"國", "mean":"Country"}\n'
+'{"kor":"규", "eng":"Gyu", "jap":"ギュ", "schn":"揆", "tchn":"揆", "mean":"Counting"}\n'
+'{"kor":"기", "eng":"Gi", "jap":"ギ", "schn":"起", "tchn":"起", "mean":"Happening"}\n'
+'{"kor":"대", "eng":"Dae", "jap":"デ", "schn":"大", "tchn":"大", "mean":"Big"}\n'
+'{"kor":"대", "eng":"Dae", "jap":"デ", "schn":"待", "tchn":"待", "mean":"Waiting"}\n'
+'{"kor":"동", "eng":"Dong", "jap":"ドン", "schn":"東", "tchn":"東", "mean":"Eastern"}\n'
+'{"kor":"동", "eng":"Dong", "jap":"ドン", "schn":"动", "tchn":"動", "mean":"Moving"}\n'
+'{"kor":"도", "eng":"Do", "jap":"ド", "schn":"到", "tchn":"到", "mean":"Reaching"}\n'
+'{"kor":"도", "eng":"Do", "jap":"ド", "schn":"導", "tchn":"導", "mean":"Guiding"}\n'
+'{"kor":"명", "eng":"Myeong", "jap":"ミョン", "schn":"明", "tchn":"明", "mean":"Bright"}\n'
+'{"kor":"명", "eng":"Myeong", "jap":"ミョン", "schn":"冥", "tchn":"冥", "mean":"Dark"}\n'
+'{"kor":"무", "eng":"Mu", "jap":"ム", "schn":"茂", "tchn":"茂", "mean":"Full of"}\n'
+'{"kor":"무", "eng":"Mu", "jap":"ム", "schn":"舞", "tchn":"舞", "mean":"Dancing"}\n'
+'{"kor":"백", "eng":"Baek", "jap":"ベク", "schn":"白", "tchn":"白", "mean":"White"}\n'
+'{"kor":"백", "eng":"Baek", "jap":"ベク", "schn":"百", "tchn":"百", "mean":"Hundred"}\n'
+'{"kor":"병", "eng":"Byung", "jap":"ビョン", "schn":"倂", "tchn":"倂", "mean":"Covering"}\n'
+'{"kor":"범", "eng":"Beom", "jap":"ボム", "schn":"范", "tchn":"範", "mean":"Law"}\n'
+'{"kor":"상", "eng":"Sang", "jap":"サン", "schn":"上", "tchn":"上", "mean":"Upper"}\n'
+'{"kor":"송", "eng":"Song", "jap":"ソン", "schn":"诵", "tchn":"誦", "mean":"Memorizing"}\n'
+'{"kor":"승", "eng":"Seung", "jap":"スン", "schn":"承", "tchn":"承", "mean":"Undertaking"}\n'
+'{"kor":"승", "eng":"Seung", "jap":"スン", "schn":"胜", "tchn":"勝", "mean":"Winning"}\n'
+'{"kor":"신", "eng":"Sin", "jap":"シン", "schn":"新", "tchn":"新", "mean":"New"}\n'
+'{"kor":"신", "eng":"Sin", "jap":"シン", "schn":"信", "tchn":"信", "mean":"Trsuting"}\n'
+'{"kor":"염", "eng":"Yeom", "jap":"ヨム", "schn":"炎", "tchn":"炎", "mean":"Flame"}\n'
+'{"kor":"위", "eng":"Wi", "jap":"ウィ", "schn":"卫", "tchn":"衛", "mean":"Protecting"}\n'
+'{"kor":"은", "eng":"Eun", "jap":"ウン", "schn":"訚", "tchn":"誾", "mean":"Mild"}\n'
+'{"kor":"인", "eng":"In", "jap":"イン", "schn":"仁", "tchn":"仁", "mean":"Benevolent"}\n'
+'{"kor":"원", "eng":"Won", "jap":"ウォン", "schn":"元", "tchn":"元", "mean":"Best"}\n'
+'{"kor":"원", "eng":"Won", "jap":"ウォン", "schn":"愿", "tchn":"願", "mean":"Desiring"}\n'
+'{"kor":"의", "eng":"Ui", "jap":"ウィ", "schn":"义", "tchn":"義", "mean":"Righteous"}\n'
+'{"kor":"의", "eng":"Ui", "jap":"ウィ", "schn":"依", "tchn":"依", "mean":"Complying with"}\n'
+'{"kor":"익", "eng":"Ik", "jap":"イク", "schn":"益", "tchn":"益", "mean":"Adding"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"在", "tchn":"在", "mean":"Being"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"栽", "tchn":"栽", "mean":"Planting"}\n'
+'{"kor":"제", "eng":"Jae", "jap":"ジェ", "schn":"济", "tchn":"濟", "mean":"Crossing"}\n'
+'{"kor":"종", "eng":"Jong", "jap":"ジョン", "schn":"从", "tchn":"從", "mean":"Following"}\n'
+'{"kor":"종", "eng":"Jong", "jap":"ジョン", "schn":"综", "tchn":"綜", "mean":"Undertaking"}\n'
+'{"kor":"준", "eng":"Jun", "jap":"ジュン", "schn":"峻", "tchn":"峻", "mean":"High"}\n'
+'{"kor":"준", "eng":"Jun", "jap":"ジュン", "schn":"准", "tchn":"准", "mean":"Parallel"}\n'
+'{"kor":"보", "eng":"Bo", "jap":"ボ", "schn":"保", "tchn":"保", "mean":"Protecting"}\n'
+'{"kor":"준", "eng":"Jun", "jap":"ジュン", "schn":"晙", "tchn":"晙", "mean":"Bright"}\n'
+'{"kor":"창", "eng":"Chang", "jap":"チャン", "schn":"创", "tchn":"創", "mean":"Creating"}\n'
+'{"kor":"창", "eng":"Chang", "jap":"チャン", "schn":"苍", "tchn":"蒼", "mean":"Blue"}\n'
+'{"kor":"채", "eng":"Chae", "jap":"チェ", "schn":"彩", "tchn":"彩", "mean":"Color"}\n'
+'{"kor":"천", "eng":"Cheon", "jap":"チョン", "schn":"天", "tchn":"天", "mean":"Sky"}\n'
+'{"kor":"광", "eng":"Gwang", "jap":"グァン", "schn":"广", "tchn":"廣", "mean":"Broad"}\n'
+'{"kor":"혁", "eng":"Hyuk", "jap":"ヒョク", "schn":"赫", "tchn":"赫", "mean":"Bright"}\n'
+'{"kor":"호", "eng":"Ho", "jap":"ホ", "schn":"护", "tchn":"護", "mean":"Protecting"}\n'
+'{"kor":"호", "eng":"Ho", "jap":"ホ", "schn":"颢", "tchn":"顥", "mean":"Big"}\n'
+'{"kor":"홍", "eng":"Hong", "jap":"ホン", "schn":"洪", "tchn":"洪", "mean":"Wide"}\n'
+'{"kor":"홍", "eng":"Hong", "jap":"ホン", "schn":"红", "tchn":"紅", "mean":"Red"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"渽", "tchn":"渽", "mean":"Clear"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"栽", "tchn":"栽", "mean":"Planting"}\n'
+'{"kor":"장", "eng":"Jang", "jap":"ジャン", "schn":"长", "tchn":"長", "mean":"Long"}\n'
+'{"kor":"장", "eng":"Jang", "jap":"ジャン", "schn":"张", "tchn":"張", "mean":"Giving"}\n'
+'{"kor":"구", "eng":"Goo", "jap":"グ", "schn":"救", "tchn":"救", "mean":"Saving"}\n'
+'{"kor":"청", "eng":"Chung", "jap":"チョン", "schn":"淸", "tchn":"淸", "mean":"Clear"}\n'
+'{"kor":"청", "eng":"Chung", "jap":"チョン", "schn":"靑", "tchn":"靑", "mean":"Blue"}\n'
+'{"kor":"학", "eng":"Hak", "jap":"ハク", "schn":"学", "tchn":"學", "mean":"Learning"}\n'
+'{"kor":"함", "eng":"Ham", "jap":"ハム", "schn":"缄", "tchn":"緘", "mean":"Sealing"}\n'
+'{"kor":"형", "eng":"Hyeong", "jap":"ヒョン", "schn":"馨", "tchn":"馨", "mean":"Blooming"}\n'
+'{"kor":"형", "eng":"Hyeong", "jap":"ヒョン", "schn":"迥", "tchn":"迥", "mean":"Far"}\n'
+'{"kor":"형", "eng":"Hyeong", "jap":"ヒョン", "schn":"滢", "tchn":"瀅", "mean":"Clean"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"淨", "tchn":"净", "mean":"Clean"}';

const m_second = '{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"柱", "tchn":"柱", "mean":"pillar"}\n'
+'{"kor":"겸", "eng":"Gyum", "jap":"ギョム", "schn":"蒹", "tchn":"蒹", "mean":"reed"}\n'
+'{"kor":"경", "eng":"Gyung", "jap":"ギョン", "schn":"景", "tchn":"景", "mean":"sunlight"}\n'
+'{"kor":"경", "eng":"Gyung", "jap":"ギョン", "schn":"庚", "tchn":"庚", "mean":"star"}\n'
+'{"kor":"경", "eng":"Gyung", "jap":"ギョン", "schn":"茎", "tchn":"莖", "mean":"stem"}\n'
+'{"kor":"경", "eng":"Gyung", "jap":"ギョン", "schn":"耿", "tchn":"耿", "mean":"gleam"}\n'
+'{"kor":"곤", "eng":"Gon", "jap":"ゴン", "schn":"坤", "tchn":"坤", "mean":"land"}\n'
+'{"kor":"광", "eng":"Gwang", "jap":"グァン", "schn":"光", "tchn":"光", "mean":"light"}\n'
+'{"kor":"구", "eng":"Goo", "jap":"グ", "schn":"丘", "tchn":"丘", "mean":"hill"}\n'
+'{"kor":"규", "eng":"Gyu", "jap":"ギュ", "schn":"葵", "tchn":"葵", "mean":"sunflower"}\n'
+'{"kor":"규", "eng":"Gyu", "jap":"ギュ", "schn":"煃", "tchn":"煃", "mean":"flame"}\n'
+'{"kor":"규", "eng":"Gyu", "jap":"ギュ", "schn":"规", "tchn":"規", "mean":"rule"}\n'
+'{"kor":"균", "eng":"Gyun", "jap":"ギュン", "schn":"筠", "tchn":"筠", "mean":"bamboo"}\n'
+'{"kor":"균", "eng":"Gyun", "jap":"ギュン", "schn":"麏", "tchn":"麏", "mean":"roe deer"}\n'
+'{"kor":"근", "eng":"Geun", "jap":"グン", "schn":"根", "tchn":"根", "mean":"root"}\n'
+'{"kor":"기", "eng":"Gi", "jap":"ギ", "schn":"气", "tchn":"氣", "mean":"energy"}\n'
+'{"kor":"기", "eng":"Gi", "jap":"ギ", "schn":"己", "tchn":"己", "mean":"body"}\n'
+'{"kor":"남", "eng":"Nam", "jap":"ナム", "schn":"男", "tchn":"男", "mean":"man"}\n'
+'{"kor":"남", "eng":"Nam", "jap":"ナム", "schn":"榄", "tchn":"欖", "mean":"olive tree"}\n'
+'{"kor":"록", "eng":"Rok", "jap":"ロク", "schn":"鹿", "tchn":"鹿", "mean":"deer"}\n'
+'{"kor":"륜", "eng":"Ryun", "jap":"リュン", "schn":"錀", "tchn":"錀", "mean":"iron"}\n'
+'{"kor":"룡", "eng":"Ryong", "jap":"リョン", "schn":"龙", "tchn":"龍", "mean":"dragon"}\n'
+'{"kor":"만", "eng":"Man", "jap":"マン", "schn":"万", "tchn":"萬", "mean":"ten thousand"}\n'
+'{"kor":"명", "eng":"Myeong", "jap":"ミョン", "schn":"命", "tchn":"命", "mean":"life"}\n'
+'{"kor":"명", "eng":"Myeong", "jap":"ミョン", "schn":"冥", "tchn":"冥", "mean":"darkness"}\n'
+'{"kor":"모", "eng":"Mo", "jap":"モ", "schn":"矛", "tchn":"矛", "mean":"spear"}\n'
+'{"kor":"모", "eng":"Mo", "jap":"モ", "schn":"皃", "tchn":"皃", "mean":"shape"}\n'
+'{"kor":"민", "eng":"Min", "jap":"ミン", "schn":"珉", "tchn":"珉", "mean":"gem"}\n'
+'{"kor":"민", "eng":"Min", "jap":"ミン", "schn":"旻", "tchn":"旻", "mean":"autumn sky"}\n'
+'{"kor":"배", "eng":"Bae", "jap":"ベ", "schn":"坏", "tchn":"坏", "mean":"hill"}\n'
+'{"kor":"배", "eng":"Bae", "jap":"ベ", "schn":"蓓", "tchn":"蓓", "mean":"bud"}\n'
+'{"kor":"백", "eng":"Baek", "jap":"ベク", "schn":"白", "tchn":"白", "mean":"white"}\n'
+'{"kor":"백", "eng":"Baek", "jap":"ベク", "schn":"百", "tchn":"百", "mean":"hundred"}\n'
+'{"kor":"병", "eng":"Byung", "jap":"ビョン", "schn":"倂", "tchn":"倂", "mean":"covering"}\n'
+'{"kor":"범", "eng":"Beom", "jap":"ボム", "schn":"范", "tchn":"範", "mean":"law"}\n'
+'{"kor":"범", "eng":"Beom", "jap":"ボム", "schn":"帆", "tchn":"帆", "mean":"sail"}\n'
+'{"kor":"빈", "eng":"Bin", "jap":"ビン", "schn":"彬", "tchn":"彬", "mean":"brightness"}\n'
+'{"kor":"빈", "eng":"Bin", "jap":"ビン", "schn":"穦", "tchn":"穦", "mean":"fragrance"}\n'
+'{"kor":"상", "eng":"Sang", "jap":"サン", "schn":"象", "tchn":"象", "mean":"elephant"}\n'
+'{"kor":"상", "eng":"Sang", "jap":"サン", "schn":"霜", "tchn":"霜", "mean":"frost"}\n'
+'{"kor":"석", "eng":"Seok", "jap":"ソク", "schn":"石", "tchn":"石", "mean":"stone"}\n'
+'{"kor":"석", "eng":"Seok", "jap":"ソク", "schn":"夕", "tchn":"夕", "mean":"twilight"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"璇", "tchn":"璇", "mean":"jade"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"善", "tchn":"善", "mean":"kindness"}\n'
+'{"kor":"성", "eng":"Seong", "jap":"ソン", "schn":"星", "tchn":"星", "mean":"star"}\n'
+'{"kor":"성", "eng":"Seong", "jap":"ソン", "schn":"圣", "tchn":"聖", "mean":"saint"}\n'
+'{"kor":"섭", "eng":"Seop", "jap":"ソプ", "schn":"燮", "tchn":"燮", "mean":"flare"}\n'
+'{"kor":"수", "eng":"Soo", "jap":"ス", "schn":"水", "tchn":"水", "mean":"water"}\n'
+'{"kor":"수", "eng":"Soo", "jap":"ス", "schn":"树", "tchn":"樹", "mean":"tree"}\n'
+'{"kor":"수", "eng":"Soo", "jap":"ス", "schn":"手", "tchn":"手", "mean":"hand"}\n'
+'{"kor":"승", "eng":"Seung", "jap":"スン", "schn":"胜", "tchn":"勝", "mean":"win"}\n'
+'{"kor":"신", "eng":"Sin", "jap":"シン", "schn":"晨", "tchn":"晨", "mean":"daybreak"}\n'
+'{"kor":"안", "eng":"Ahn", "jap":"アン", "schn":"𤎝", "tchn":"𤎝", "mean":"glow"}\n'
+'{"kor":"양", "eng":"Yang", "jap":"ヤン", "schn":阳", "tchn":"陽", "mean":"sunshine"}\n'
+'{"kor":"언", "eng":"Eon", "jap":"オン", "schn":"言", "tchn":"言", "mean":"saying"}\n'
+'{"kor":"언", "eng":"Eon", "jap":"オン", "schn":"嫣", "tchn":"嫣", "mean":"beauty"}\n'
+'{"kor":"운", "eng":"Woon", "jap":"ウン", "schn":"雲", "tchn":"雲", "mean":"cloud"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"缘", "tchn":"緣", "mean":"tie"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"渊", "tchn":"淵", "mean":"pond"}\n'
+'{"kor":"열", "eng":"Yeol", "jap":"ヨル", "schn":"热", "tchn":"熱", "mean":"fever"}\n'
+'{"kor":"열", "eng":"Yeol", "jap":"ヨル", "schn":"颲", "tchn":"颲", "mean":"fierce wind"}\n'
+'{"kor":"염", "eng":"Yeom", "jap":"ヨム", "schn":"炎", "tchn":"炎", "mean":"flame"}\n'
+'{"kor":"염", "eng":"Yeom", "jap":"ヨム", "schn":"念", "tchn":"念", "mean":"thought"}\n'
+'{"kor":"엽", "eng":"Yeop", "jap":"ヨプ", "schn":"叶", "tchn":"葉", "mean":"leaf"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"荣", "tchn":"榮", "mean":"flower"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"瑛", "tchn":"瑛", "mean":"glow of the gem"}\n'
+'{"kor":"영", "eng":"Young", "jap":"ヨン", "schn":"影", "tchn":"影", "mean":"shadow"}\n'
+'{"kor":"오", "eng":"Oh", "jap":"オ", "schn":"午", "tchn":"午", "mean":"daytime"}\n'
+'{"kor":"오", "eng":"Oh", "jap":"オ", "schn":"乌", "tchn":"烏", "mean":"crow"}\n'
+'{"kor":"온", "eng":"On", "jap":"オン", "schn":"溫", "tchn":"溫", "mean":"warmth"}\n'
+'{"kor":"완", "eng":"Wan", "jap":"ワン", "schn":"完", "tchn":"完", "mean":"perfectness"}\n'
+'{"kor":"용", "eng":"Yong", "jap":"ヨン", "schn":"龙", "tchn":"龍", "mean":"dragon"}\n'
+'{"kor":"용", "eng":"Yong", "jap":"ヨン", "schn":"墉", "tchn":"墉", "mean":"wall"}\n'
+'{"kor":"용", "eng":"Yong", "jap":"ヨン", "schn":"蓉", "tchn":"蓉", "mean":"lotus"}\n'
+'{"kor":"우", "eng":"Woo", "jap":"ウ", "schn":"友", "tchn":"友", "mean":"friend"}\n'
+'{"kor":"우", "eng":"Woo", "jap":"ウ", "schn":"雨", "tchn":"雨", "mean":"rain"}\n'
+'{"kor":"우", "eng":"Woo", "jap":"ウ", "schn":"禑", "tchn":"禑", "mean":"luck"}\n'
+'{"kor":"우", "eng":"Woo", "jap":"ウ", "schn":"宇", "tchn":"宇", "mean":"universe"}\n'
+'{"kor":"욱", "eng":"Wook", "jap":"ウク", "schn":"旭", "tchn":"旭", "mean":"morning sun"}\n'
+'{"kor":"욱", "eng":"Wook", "jap":"ウク", "schn":"煜", "tchn":"煜", "mean":"bright"}\n'
+'{"kor":"욱", "eng":"Wook", "jap":"ウク", "schn":"昱", "tchn":"昱", "mean":"bright sun"}\n'
+'{"kor":"울", "eng":"Wool", "jap":"ウル", "schn":"郁", "tchn":"鬱", "mean":"dense"}\n'
+'{"kor":"웅", "eng":"Woong", "jap":"ウン", "schn":"熊", "tchn":"熊", "mean":"bear"}\n'
+'{"kor":"웅", "eng":"Woong", "jap":"ウン", "schn":"雄", "tchn":"雄", "mean":"male"}\n'
+'{"kor":"원", "eng":"Won", "jap":"ウォン", "schn":"元", "tchn":"元", "mean":"best"}\n'
+'{"kor":"원", "eng":"Won", "jap":"ウォン", "schn":"愿", "tchn":"願", "mean":"desire"}\n'
+'{"kor":"원", "eng":"Won", "jap":"ウォン", "schn":"源", "tchn":"源", "mean":"root"}\n'
+'{"kor":"위", "eng":"Wi", "jap":"ウィ", "schn":"威", "tchn":"威", "mean":"dignity"}\n'
+'{"kor":"윤", "eng":"Yun", "jap":"ユン", "schn":"昀", "tchn":"昀", "mean":"sunshine"}\n'
+'{"kor":"윤", "eng":"Yun", "jap":"ユン", "schn":"鋆", "tchn":"鋆", "mean":"gold"}\n'
+'{"kor":"윤", "eng":"Yun", "jap":"ユン", "schn":"沇", "tchn":"沇", "mean":"flow"}\n'
+'{"kor":"익", "eng":"Ik", "jap":"イク", "schn":"翼", "tchn":"翼", "mean":"wing"}\n'
+'{"kor":"인", "eng":"In", "jap":"イン", "schn":"人", "tchn":"人", "mean":"person"}\n'
+'{"kor":"인", "eng":"In", "jap":"イン", "schn":"鳞", "tchn":"鱗", "mean":"scales"}\n'
+'{"kor":"임", "eng":"Im", "jap":"イム", "schn":"林", "tchn":"林", "mean":"forest"}\n'
+'{"kor":"임", "eng":"Im", "jap":"イム", "schn":"琳", "tchn":"琳", "mean":"jade"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"财", "tchn":"財", "mean":"wealth"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"灾", "tchn":"災", "mean":"disaster"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"才", "tchn":"才", "mean":"talent"}\n'
+'{"kor":"정", "eng":"Jeong", "jap":"ジョン", "schn":"情", "tchn":"情", "mean":"mind"}\n'
+'{"kor":"정", "eng":"Jeong", "jap":"ジョン", "schn":"睛", "tchn":"睛", "mean":"eyes"}\n'
+'{"kor":"정", "eng":"Jeong", "jap":"ジョン", "schn":"晸", "tchn":"晸", "mean":"rising sun"}\n'
+'{"kor":"제", "eng":"Jae", "jap":"ジェ", "schn":"梯", "tchn":"梯", "mean":"ladder"}\n'
+'{"kor":"종", "eng":"Jong", "jap":"ジョン", "schn":"踪", "tchn":"蹤", "mean":"trace"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"昼", "tchn":"晝", "mean":"daytime"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"宙", "tchn":"宙", "mean":"time"}\n'
+'{"kor":"준", "eng":"Jun", "jap":"ジュン", "schn":"埻", "tchn":"埻", "mean":"target"}\n'
+'{"kor":"준", "eng":"Jun", "jap":"ジュン", "schn":"峻", "tchn":"峻", "mean":"high"}\n'
+'{"kor":"중", "eng":"Jung", "jap":"ジュン", "schn":"中", "tchn":"中", "mean":"center"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"津", "tchn":"津", "mean":"port"}\n'
+'{"kor":"창", "eng":"Chang", "jap":"チャン", "schn":"枪", "tchn":"槍", "mean":"spear"}\n'
+'{"kor":"창", "eng":"Chang", "jap":"チャン", "schn":"窗", "tchn":"窓", "mean":"window"}\n'
+'{"kor":"천", "eng":"Chun", "jap":"チョン", "schn":"天", "tchn":"天", "mean":"sky"}\n'
+'{"kor":"천", "eng":"Chun", "jap":"チョン", "schn":"川", "tchn":"川", "mean":"river"}\n'
+'{"kor":"천", "eng":"Chun", "jap":"チョン", "schn":"川", "tchn":"川", "mean":"river"}\n'
+'{"kor":"철", "eng":"Chul", "jap":"チョル", "schn":"铁", "tchn":"鐵", "mean":"iron"}\n'
+'{"kor":"태", "eng":"Tae", "jap":"テ", "schn":"台", "tchn":"台", "mean":"typhoon"}\n'
+'{"kor":"태", "eng":"Tae", "jap":"テ", "schn":"态", "tchn":"態", "mean":"figure"}\n'
+'{"kor":"택", "eng":"Taek", "jap":"テク", "schn":"泽", "tchn":"澤", "mean":"pond"}\n'
+'{"kor":"표", "eng":"Pyo", "jap":"ピョ", "schn":"表", "tchn":"表", "mean":"surface"}\n'
+'{"kor":"하", "eng":"Ha", "jap":"ハ", "schn":"河", "tchn":"河", "mean":"river"}\n'
+'{"kor":"학", "eng":"Hak", "jap":"ハク", "schn":"鸴", "tchn":"鷽", "mean":"pigeon"}\n'
+'{"kor":"한", "eng":"Han", "jap":"ハン", "schn":"韩", "tchn":"韓", "mean":"Korea"}\n'
+'{"kor":"한", "eng":"Han", "jap":"ハン", "schn":"翰", "tchn":"翰", "mean":"letter"}\n'
+'{"kor":"해", "eng":"Hae", "jap":"へ", "schn":"海", "tchn":"海", "mean":"ocean"}\n'
+'{"kor":"해", "eng":"Hae", "jap":"へ", "schn":"亥", "tchn":"亥", "mean":"pig"}\n'
+'{"kor":"혁", "eng":"Hyuk", "jap":"ヒョク", "schn":"爀", "tchn":"爀", "mean":"glare"}\n'
+'{"kor":"혁", "eng":"Hyuk", "jap":"ヒョク", "schn":"焱", "tchn":"焱", "mean":"flame"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"晛", "tchn":"晛", "mean":"sunshine"}\n'
+'{"kor":"협", "eng":"Hyup", "jap":"ヒョプ", "schn":"协", "tchn":"協", "mean":"harmony"}\n'
+'{"kor":"형", "eng":"Hyeong", "jap":"ヒョン", "schn":"形", "tchn":"形", "mean":"shape"}\n'
+'{"kor":"형", "eng":"Hyeong", "jap":"ヒョン", "schn":"荆", "tchn":"荊", "mean":"thorn"}\n'
+'{"kor":"형", "eng":"Hyeong", "jap":"ヒョン", "schn":"荧", "tchn":"熒", "mean":"lamp"}\n'
+'{"kor":"호", "eng":"Ho", "jap":"ホ", "schn":"昊", "tchn":"昊", "mean":"sky"}\n'
+'{"kor":"호", "eng":"Ho", "jap":"ホ", "schn":"虎", "tchn":"虎", "mean":"tiger"}\n'
+'{"kor":"호", "eng":"Ho", "jap":"ホ", "schn":"湖", "tchn":"湖", "mean":"lake"}\n'
+'{"kor":"홍", "eng":"Hong", "jap":"ホン", "schn":"虹", "tchn":"虹", "mean":"rainbow"}\n'
+'{"kor":"환", "eng":"Hwan", "jap":"ファン", "schn":"煥", "tchn":"煥", "mean":"flame"}\n'
+'{"kor":"환", "eng":"Hwan", "jap":"ファン", "schn":"环", "tchn":"環", "mean":"loop"}\n'
+'{"kor":"후", "eng":"Hu", "jap":"フ", "schn":"侯", "tchn":"矦", "mean":"king"}\n'
+'{"kor":"훈", "eng":"Hoon", "jap":"フン", "schn":"勋", "tchn":"勳", "mean":"contribution"}\n'
+'{"kor":"훈", "eng":"Hoon", "jap":"フン", "schn":"辉", "tchn":"煇", "mean":"burning"}\n'
+'{"kor":"훤", "eng":"Huon", "jap":"フォン", "schn":"昍", "tchn":"昍", "mean":"bright"}\n'
+'{"kor":"휘", "eng":"Hui", "jap":"フィ", "schn":"晖", "tchn":"暉", "mean":"light"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"真", "tchn":"眞", "mean":"honest"}';


//Load guide images for selected language
document.getElementById("transEng").onclick = function() {
    document.getElementById("guideImage").src = "./image/guide_eng.jpg";
}
document.getElementById("transKor").onclick = function() {
    document.getElementById("guideImage").src = "./image/guide_kor.jpg";
}
document.getElementById("transJap").onclick = function() {
    document.getElementById("guideImage").src = "./image/guide_jap.jpg";
}
document.getElementById("transChn").onclick = function() {
    document.getElementById("guideImage").src = "./image/guide_chn.jpg";
}

//Scroll button
document.getElementById("startBut").onclick = function() {
    window.scrollTo({top:2000, behavior:'smooth'});
}

var korName = "";
var engName = "";
var schnName = "";
var tchnName = "";
var meaning = "";

let surLines = surname.split("\n");
let ffLines = f_first.split("\n");
let fsLines = f_second.split("\n");
let mfLines = m_first.split("\n");
let msLines = m_second.split("\n");

const surLength = surLines.length;
const ffLength = ffLines.length;
const fsLength = fsLines.length;
const mfLength = mfLines.length;
const msLength = msLines.length;


let firstLetter="";
let secondLetter="";
let surnameMade="";

let genderval;

const form = document.getElementById("radioform");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    genderval = document.querySelector('input[name="gender"]:checked').value;

  
    //Generates random numbers and pick up data at the location of chosen number.
    var randSurNum = Math.floor(Math.random()*(surLength-0)+0);
    var randFfNum = Math.floor(Math.random()*(ffLength-0)+0);
    var randFsNum = Math.floor(Math.random()*(fsLength-0)+0);
    var randMfNum = Math.floor(Math.random()*(mfLength-0)+0);
    var randMsNum = Math.floor(Math.random()*(msLength-0)+0);
    surnameMade = JSON.parse(surLines[randSurNum]);

    if(genderval === "female") {
        console.log("Female");
        firstLetter = JSON.parse(ffLines[randFfNum]);
        secondLetter = JSON.parse(fsLines[randFsNum]);
    } else {
        console.log("Male");
        firstLetter = JSON.parse(mfLines[randMfNum]);
        secondLetter = JSON.parse(msLines[randMsNum]);
    }

    if(surnameMade.eng != firstLetter.eng && firstLetter.eng != secondLetter.eng) {
        looping = false;
    }
    
        
    //Combines letters
    //Makes space between each letter for English
    engName = surnameMade.eng + " " + firstLetter.eng + " " + secondLetter.eng;
    //No space between each letter for Korean 
    korName = surnameMade.kor + firstLetter.kor + secondLetter.kor;
    //No space, but a dot between the surname and given name
    japName = surnameMade.jap + "・" + firstLetter.jap + secondLetter.jap;
    //No space between each letter for Chinese
    schnName = surnameMade.schn + firstLetter.schn + secondLetter.schn;
    tchnName = surnameMade.tchn + firstLetter.tchn + secondLetter.tchn;
    //Meaning of the name in English. Ignores grammar.
    meaning = firstLetter.mean + " " + secondLetter.mean;


    //Shows the name generated in Korean and English (default)
    document.getElementById("firstLine").innerHTML = korName;
    document.getElementById("secondLine").innerHTML = engName;
    

    //Shows the name in the selected language. The name in English disappears.
    document.getElementById("showEng").onclick = function() {
        document.getElementById("secondLine").innerHTML = engName;
    }
    document.getElementById("showJap").onclick = function() {
        document.getElementById("secondLine").innerHTML = japName;
    }
    document.getElementById("showSchn").onclick = function() {
        document.getElementById("secondLine").innerHTML = schnName;
    }
    document.getElementById("showTchn").onclick = function() {
        document.getElementById("secondLine").innerHTML = tchnName;
    }
    document.getElementById("showMean").onclick = function() {
        document.getElementById("secondLine").innerHTML = meaning;
    }

    //console testing
    console.log(engName);
    console.log(korName);
    console.log(japName);
    console.log(schnName);
    console.log(tchnName);
    console.log(meaning);
    console.log("surLength: " + surLength);
    console.log("ffLength: " + ffLength);
    console.log("fsLength: " + fsLength);
    console.log("mfLength: " + mfLength);
    console.log("msLength: " + msLength); 
});

