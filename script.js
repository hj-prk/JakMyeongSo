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
+'{"kor":"설", "eng":"Seol", "jap":"ソル", "schn":"雪", "tchn":"雪", "mean":"Snow"}\n'
+'{"kor":"설", "eng":"Seol", "jap":"ソル", "schn":"契", "tchn":"偰", "mean":"Pure"}\n'
+'{"kor":"나", "eng":"Na", "jap":"ナ", "schn":"娜", "tchn":"娜", "mean":"Beautiful"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"善", "tchn":"善", "mean":"Kind"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"宣", "tchn":"宣", "mean":"Generous"}\n'
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
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"贤", "tchn":"賢", "mean":"Clever"}';

const f_second = '{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"真", "tchn":"眞", "mean":"honest"}\n'
+'{"kor":"란", "eng":"Ran", "jap":"ラン", "schn":"蘭", "tchn":"蘭", "mean":"orchid"}\n'
+'{"kor":"련", "eng":"Ryeon", "jap":"リョン", "schn":"莲", "tchn":"蓮", "mean":"lotus"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"辰", "tchn":"辰", "mean":"star"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"珍", "tchn":"珍", "mean":"treasure"}\n'
+'{"kor":"희", "eng":"Hee", "jap":"ヒ", "schn":"烯", "tchn":"烯", "mean":"glow"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"炫", "tchn":"炫", "mean":"bright"}\n'
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
+'{"kor":"민", "eng":"Min", "jap":"ミン", "schn":"珉", "tchn":"珉", "mean":"gem"}\n'
+'{"kor":"민", "eng":"Min", "jap":"ミン", "schn":"旻", "tchn":"旻", "mean":"autumn sky"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"昼", "tchn":"晝", "mean":"day"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"柱", "tchn":"柱", "mean":"pillar"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"缘", "tchn":"緣", "mean":"tie"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"渊", "tchn":"淵", "mean":"pond"}\n'
+'{"kor":"연", "eng":"Yeon", "jap":"ヨン", "schn":"莲", "tchn":"蓮", "mean":"lotus"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"智", "tchn":"智", "mean":"wisdom"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"地", "tchn":"地", "mean":"ground"}\n'
+'{"kor":"지", "eng":"Ji", "jap":"ジ", "schn":"志", "tchn":"志", "mean":"will"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"善", "tchn":"善", "mean":"good"}\n'
+'{"kor":"선", "eng":"Seon", "jap":"ソン", "schn":"琁", "tchn":"琁", "mean":"jade"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"情", "tchn":"情", "mean":"love"}';
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"静", "tchn":"靜", "mean":"silence"}'
+'{"kor":"은", "eng":"Eun", "jap":"ウン", "schn":"恩", "tchn":"恩", "mean":"grace"}\n'
+'{"kor":"채", "eng":"Chae", "jap":"チェ", "schn":"彩", "tchn":"彩", "mean":"color"}\n'
+'{"kor":"은", "eng":"Eun", "jap":"ウン", "schn":"银", "tchn":"銀", "mean":"silver"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"汀", "tchn":"汀", "mean":"riverside"}';

const m_first = '{"kor":"석", "eng":"Seok", "jap":"ソク", "schn":"石", "tchn":"石", "mean":"Stone"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"进", "tchn":"進", "mean":"Advancing"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"真", "tchn":"眞", "mean":"Honest"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"昣", "tchn":"昣", "mean":"Bright"}\n'
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
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"昼", "tchn":"晝", "mean":"Day"}\n'
+'{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"柱", "tchn":"柱", "mean":"Pillar"}\n'
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
+'{"kor":"백", "eng":"Baek", "jap":"ベク", "schn":"白", "tchn":"白", "mean":"White"}\n'
+'{"kor":"백", "eng":"Baek", "jap":"ベク", "schn":"百", "tchn":"百", "mean":"Hundred"}\n'
+'{"kor":"병", "eng":"Byung", "jap":"ビョン", "schn":"倂", "tchn":"倂", "mean":"Covering"}\n'
+'{"kor":"범", "eng":"Beom", "jap":"ボム", "schn":"范", "tchn":"範", "mean":"Law"}\n'
+'{"kor":"상", "eng":"Sang", "jap":"サン", "schn":"上", "tchn":"上", "mean":"Upper"}\n'
+'{"kor":"승", "eng":"Seung", "jap":"スン", "schn":"承", "tchn":"承", "mean":"Connecting"}\n'
+'{"kor":"승", "eng":"Seung", "jap":"スン", "schn":"胜", "tchn":"勝", "mean":"Winning"}\n'
+'{"kor":"염", "eng":"Yeom", "jap":"ヨム", "schn":"炎", "tchn":"炎", "mean":"Flame"}\n'
+'{"kor":"위", "eng":"Wi", "jap":"ウィ", "schn":"卫", "tchn":"衛", "mean":"Protecting"}\n'
+'{"kor":"은", "eng":"Eun", "jap":"ウン", "schn":"訚", "tchn":"誾", "mean":"Mild"}\n'
+'{"kor":"인", "eng":"In", "jap":"イン", "schn":"仁", "tchn":"仁", "mean":"Benevolent"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"在", "tchn":"在", "mean":"Being"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"栽", "tchn":"栽", "mean":"Planting"}\n'
+'{"kor":"제", "eng":"Jae", "jap":"ジェ", "schn":"济", "tchn":"濟", "mean":"Crossing"}\n'
+'{"kor":"종", "eng":"Jong", "jap":"ジョン", "schn":"从", "tchn":"從", "mean":"Following"}\n'
+'{"kor":"종", "eng":"Jong", "jap":"ジョン", "schn":"综", "tchn":"綜", "mean":"Connecting"}\n'
+'{"kor":"준", "eng":"Jun", "jap":"ジュン", "schn":"峻", "tchn":"峻", "mean":"High"}\n'
+'{"kor":"준", "eng":"Jun", "jap":"ジュン", "schn":"准", "tchn":"准", "mean":"Parallel"}\n'
+'{"kor":"준", "eng":"Jun", "jap":"ジュン", "schn":"晙", "tchn":"晙", "mean":"Bright"}\n'
+'{"kor":"창", "eng":"Chang", "jap":"チャン", "schn":"创", "tchn":"創", "mean":"Creating"}\n'
+'{"kor":"창", "eng":"Chang", "jap":"チャン", "schn":"苍", "tchn":"蒼", "mean":"Blue"}\n'
+'{"kor":"채", "eng":"Chae", "jap":"チェ", "schn":"彩", "tchn":"彩", "mean":"Color"}\n'
+'{"kor":"천", "eng":"Cheon", "jap":"チョン", "schn":"天", "tchn":"天", "mean":"Sky"}\n'
+'{"kor":"혁", "eng":"Hyuk", "jap":"ヒョク", "schn":"赫", "tchn":"赫", "mean":"Bright"}\n'
+'{"kor":"호", "eng":"Ho", "jap":"ホ", "schn":"护", "tchn":"護", "mean":"Protecting"}\n'
+'{"kor":"홍", "eng":"Hong", "jap":"ホン", "schn":"洪", "tchn":"洪", "mean":"Wide"}\n'
+'{"kor":"재", "eng":"Jae", "jap":"ジェ", "schn":"渽", "tchn":"渽", "mean":"Clear"}\n'

+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"淨", "tchn":"净", "mean":"Clean"}';

const m_second = '{"kor":"주", "eng":"Joo", "jap":"ジュ", "schn":"柱", "tchn":"柱", "mean":"pillar"}\n'
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

