<
head >
< script >
var initHTML = "<h4>○狐嫁女<h4><p>历城殷天官，少贫，有胆略。邑有故家之第，广数十亩，楼宇连亘。常见怪异，以故废无居人。久之，蓬蒿渐满，白昼亦无敢入者。会公与诸生饮，或戏云：“有能寄此一宿者，共醵为筵。”公跃起曰：“是亦何难！”携一席往。众送诸门，戏曰：“吾等暂候之，如有所见，当急号。”公笑云：“有鬼狐，当捉证耳。”<p>遂入，见长莎蔽径，蒿艾如麻。时值上弦，幸月色昏黄，门户可辨。摩娑数进，始抵后楼。登月台，光洁可爱，遂止焉。西望月明，惟衔山一线耳。坐良久，更无少异，窃笑传言之讹。席地枕石，卧看牛女。一更向尽，恍惚欲寐。楼下有履声，籍籍而上。假寐睨之，见一青衣人，挑莲灯，猝见公，惊而却退。语后人曰：“有生人在。”下问：“谁何？”答云：“不识。”俄一老翁上，就公谛视，曰：“此殷尚书，其睡已酣。但办吾事，相公倜傥，或不叱怪。”乃相率入楼，楼门尽辟。移时，往来者益众。楼上灯辉如昼。公稍稍转侧，作嚏咳。翁闻公醒，乃出，跪而言曰：“小人有箕帚女，今夜于归。不意有触贵人，望勿深罪。”公起，曳之曰：“不知今夕嘉礼，惭无以贺。”翁曰：“贵人光临，压除凶煞，幸矣。即烦陪坐，倍益光宠。”公喜，应之。入视楼中，陈设绮丽。遂有妇人出拜，年可四十余。翁曰：“此拙荆。”公揖之。俄闻笙乐聒耳，有奔而上者，曰：“至矣！”翁趋迎，公亦立俟。少间，笼纱一簇，导新郎入。年可十七八，丰采韶秀。翁命先与贵客为礼。少年目公。公若为傧，执半主礼。次翁婿交拜，已，乃即席。少间，粉黛云从，酒胾雾霈，玉碗金瓯，光映几案。酒数行，翁唤女奴请小姐来。女奴诺而入，良久不出。翁自起，搴帏促之。俄婢媪辈拥新人出，环佩<王翏>然，麝兰散馥。翁命向上拜。起，即坐母侧。微目之，翠凤明珰，容华绝世。既而酌以金爵，大容数斗。公思此物可以持验同人，阴内袖中。伪醉隐几，颓然而寝。皆曰：“相公醉矣。”居无何，新郎告行，笙乐暴作，纷纷下楼而去。已而主人敛酒具，小一爵，冥搜不得。或窃议卧客。翁急戒勿语，惟恐公闻。<p>移时，内外俱寂。公始起。暗无灯火，惟脂香酒气，充溢四堵。视东方既白，乃从容出。探袖中，金爵犹在。及门，则诸生先候，疑其夜出而早入者。公出爵示之。众骇问，公以状告。共思此物非寒士所有，乃信之。<p>　后公举进士，任肥丘。有世家朱姓宴公，命取巨觥，久之不至。有细奴掩口与主人语，主人有怒色。俄奉金爵劝客饮。谛视之，款式雕文，与狐物更无殊别。大疑，问所从制。答云：“爵凡八只，大人为京卿时，觅良工监制。此世传物，什袭已久。缘明府辱临，适取诸箱簏，仅存其七，疑家人所窃取；而十年尘封如故，殊不可解。”公笑曰：“金杯羽化矣。然世守之珍不可失。仆有一具，颇近似之，当以奉赠。”终筵归署，拣爵持送之。主人审视，骇绝。亲诣谢公，诘所自来，公为历陈颠末。始知千里之物，狐能摄致，而不敢终留也。"
function start() {
	Editor.document.designMode = "ON";
	Editor.document.open();
	Editor.document.write(initHTML);
	Editor.document.close();
	fnInit()
}

function setFocus() {
	Editor.focus();
}

function selectRange() {
	edit = Editor.document.selection.createRange();
	RangeType = Editor.document.selection.type;
}

function execCommand(command, para) {

	setFocus();
	selectRange();
	if (para == "")
		edit.execCommand(command)
	else
		edit.execCommand(command, false, arguments[1]);
	Editor.focus();
	if (RangeType != "Control") edit.select();

}
function doSelectClick(str, el) {

	var Index = el.selectedIndex;
	if (Index != 0) {
		el.selectedIndex = 0;
		execCommand(str, el.options[Index].value);

	}

}
function doSelectC(str, el) {

	var Index = el.selectedIndex;
	if (Index != 0) {
		el.selectedIndex = 0;

		execCommand(str, el.options[Index].text);
	}
}
function doSelectCl(str, el) {

	var Index = el.selectedIndex;
	if (Index != 0) {
		el.selectedIndex = 0;

		execCommand(str, "<" + el.options[Index].value + ">");

	}
}

function fnInit() {
	for (i = 0; i < document.all.length; i++)
		document.all(i).unselectable = "off";
	getSystemFonts();
}

function getSystemFonts() {
	var a = dlgHelper.fonts.count;
	var fArray = new Array();
	var oOption = document.createElement("OPTION");
	oOption.text = "字体";
	oOption.value = "0";
	selectFontName.add(oOption);
	for (i = 1; i < dlgHelper.fonts.count; i++) {
		fArray[i] = dlgHelper.fonts(i);
		var oOption = document.createElement("OPTION");

		oOption.text = fArray[i];
		oOption.Value = i;
		selectFontName.add(oOption);
	}
}

/////////////////////////下面这个函数才是我要讨论的重点，其他代码都是为了运行。///////////////

function fontsize(el) {
	var Index = el.selectedIndex

	editorc = Editor.document.selection.createRange().htmlText
	if (editorc != "") {
		editorc = editorc.replace(/([\n\r])/ig, "");
		editorc = editorc.replace(/<\/?big>/ig, "");
		editorc = editorc.replace(/<\/?small>/ig, "");
		editorc = editorc.replace(/(<font size[1-7]>)/ig, "<font>");
		fd = "<FONT([^>]*?) size=[1-7]>"
		jk = new RegExp(fd, ["i"])
		while (jk.test(editorc) == true) {
			jk.exec(editorc)
			ko3 = "<font" + RegExp.$1 + ">"
			editorc = editorc.replace(jk, ko3)
		}
		fd = '<FONT style="FONT-SIZE: [0-9]*px"([^>]*?)>'
		jk = new RegExp(fd, ["i"])
		while (jk.test(editorc) == true) {
			jk.exec(editorc)
			ko3 = "<font" + RegExp.$1 + ">"
			editorc = editorc.replace(jk, ko3)
		}
		fd = "<FONT>(.*?)<\/font>"
		jk = new RegExp(fd, ["i"])
		while (jk.test(editorc) == true) {
			jk.exec(editorc)
			editorc = editorc.replace(jk, RegExp.$1)
		}
		fd = '<FONT style="FONT-SIZE: [0-9]*pt">(.*?)<\/font>'
		jk = new RegExp(fd, ["i"])
		while (jk.test(editorc) == true) {
			jk.exec(editorc)
			editorc = editorc.replace(jk, RegExp.$1)
		}
		jk = /(<h[1-7]>)/ig
		jk.exec(editorc)
		editorc = editorc.replace(jk, RegExp.$1 + "<font style='font-size:" + el.options[Index].value + "pt'>");
		jk = /(<\/h[1-7]>)/ig
		jk.exec(editorc)
		editorc = editorc.replace(jk, RegExp.$1 + "</font>")
		if (Index > 7)
			Editor.document.selection.createRange().pasteHTML("<font style='font-size:" + el.options[Index].value + "pt'>" + editorc + "</font>")
		else {
			if (Index > 0)
				Editor.document.selection.createRange().pasteHTML("<font size=" + el.options[Index].value + ">" + editorc + "</font>")
		}
	}
	else {
		if (Index > 7)
			Editor.document.selection.createRange().pasteHTML("<font style='font-size:" + el.options[Index].value + "pt'></font>")
		else {
			if (Index > 0)
				Editor.document.selection.createRange().pasteHTML("<font size=" + el.options[Index].value + "></font>")
		}
	}
	el.selectedIndex = 0
}

</
script >
< / head >
< body
SCROLL = "no"
bgcolor = d0d0c8
onload = "start()"
leftmargin = 5
topmargin = 5 >

	< OBJECT
id = dlgHelper
CLASSID = "clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b"
width = "0px"
height = "0px" > < / OBJECT >
	< select
id = "select1"
style = "height: 18"
onchange = "doSelectCl('FormatBlock',this);this.returnValue=false;"
name = "select1"
size = "1" >
	< option
selected
value = "" > 段落样式 < / option >
	< option
value = "P" > 普通
	< option
value = "H1" > 标题一
	< option
value = "H2" > 标题二
	< option
value = "H3" > 标题三
	< option
value = "H4" > 标题四
	< option
value = "H5" > 标题五
	< option
value = "H6" > 标题六
	< option
value = "p" > 段落
	< option
value = "dd" > 定义
	< option
value = "dt" > 术语定义
	< option
value = "dir" > 目录列表
	< option
value = "menu" > 菜单列表
	< option
value = "PRE" > 已编排格式
	< / select >
	< select
style = "height: 18"
onchange = "doSelectC('FontName',this,'font face=&quot'+this.value+'&quot')"
name = "selectFontName" > < / select > < / td >
	< select
style = "width: 60; height: 18"
onchange = "fontsize(this)"
name = "selectFontSize"
size = "1" >
	< option
selected > 字号 < / option >
< option
value = "7" > 一号
	< option
value = "6" > 二号
	< option
value = "5" > 三号
	< option
value = "4" > 四号
	< option
value = "3" > 五号
	< option
value = "2" > 六号
	< option
value = "1" > 七号
	< option
value = 1 > 1
	< option
value = 2 > 2
	< option
value = 3 > 3
	< option
value = 4 > 4
	< option
value = 5 > 5
	< option
value = 6 > 6
	< option
value = 7 > 7
	< OPTION
value = 8 > 8
	< OPTION
value = 9 > 9 < OPTION
value = 10 > 10 < OPTION
value = 11 > 11 < OPTION
value = 12 > 12 < OPTION
value = 13 > 13 < OPTION
value = 14 > 14 < OPTION
value = 15 > 15 < OPTION
value = 16 > 16 < OPTION
value = 17 > 17 < OPTION
value = 18 > 18 < OPTION
value = 19 > 19 < OPTION
value = 20 > 20 < OPTION
value = 21 > 21 < OPTION
value = 22 > 22 < OPTION
value = 23 > 23 < OPTION
value = 25 > 25 < OPTION
value = 28 > 28 < OPTION
value = 30 > 30 < OPTION
value = 35 > 35 < OPTION
value = 40 > 40 < OPTION
value = 45 > 45 < OPTION
value = 50 > 50 < OPTION
value = 60 > 60 < OPTION
value = 70 > 70 < OPTION
value = 85 > 85 < OPTION
value = 100 > 100 < OPTION
value = 120 > 120 < OPTION
value = 150 > 150
	< option
value = 200 > 200
	< option
value = 250 > 250
	< option
value = 300 > 300
	< option
value = 500 > 500
	< option
value = 900 > 900
	< option
value = 2000 > 2000 < / option >
	< / select >
	< select
id = "OtherFormat"
style = "width: 75; height: 18"
onchange = "doSelectClick('FormatBlock',this);this.returnValue=false;"
size = "1"
name = "selectFoontFormat" >
	< option
selected > 格式 < / option >
< option
value = "SUP" > 上标
	< option
value = "SUB" > 下标
	< option
value = "BIG" > 增大字体
	< option
value = "SMALL" > 减小字体 < / option >
	< / select > < P >
	< IFRAME
id = "Editor"
Name = "Editor"
style = "WIDTH: 550; HEIGHT: 480" > < / IFRAME > < / body >