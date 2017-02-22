var nowUnit;
var nowChapter;
$('.chapterIndex').hide();
$('.subjectIndex').hide();
$('.subject').hide();
$('.content').hide();
$('#myDropdown').hide();
function createSpan(unit) {
	return "<span style='text-decoration:none;color: black;font-size: 28px;'>" + unit + "</span>";
}
function createUnit(unit) {
	return "<a href='javascript:unit(\"" + unit + "\");' class='" + unit + " unitIndex' style='text-decoration:none;color: black;font-size: 24px;'>&nbsp;" + unit + "</a>";
}
function createChapter(chapter,unit) {
	return "<a href='javascript:chapter(\"" + chapter + "\",\"" + unit +"\");' class='biology chapterIndex u" + unit + " c" + chapter + "' style='text-decoration:none;color: black;font-size: 20px;'> &nbsp;&nbsp;&nbsp;" + chapter + "</a>";
}
function subject(subject) {
	$('.subject').hide();
	$('.chapterIndex').hide();
	$(subject).show();
	$('.content').hide();
}
function unit(unit) {
	$('.chapterIndex').hide();
	$('.u' + unit).show();
	nowUnit = unit;
}
function chapter(chapter, unit) {
	$('#' + nowChapter).hide();
	$('.c' + nowChapter).text("　 " + nowChapter);
	$('.u' + unit).show();
	$('.c' + chapter).text(">　" + chapter);
	$('#' + chapter).show();
	nowChapter = chapter;
}
function myFunction() {
	$('.subjectIndex').show();
}
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		$('.subjectIndex').hide();
	}
}
//---數學目錄---
$("#math"      ).append(createUnit("整數的四則運算"));
$("#math"      ).append(createChapter("正負數、數線與絕對值","整數的四則運算"));
$("#math"      ).append(createChapter("整數的加減法","整數的四則運算"));
$("#math"      ).append(createChapter("整數的乘除與四則運算","整數的四則運算"));
$("#math"      ).append(createChapter("乘方與指數律","整數的四則運算"));
$("#math"      ).append(createChapter("科學記號","整數的四則運算"));
$("#math"      ).append(createUnit("分數的四則運算"));
$("#math"      ).append(createChapter("因數、倍數與質因數分解","分數的四則運算"));
$("#math"      ).append(createChapter("最大公因數與最小公倍數","分數的四則運算"));
$("#math"      ).append(createChapter("分數的加減","分數的四則運算"));
$("#math"      ).append(createChapter("分數的乘除與四則運算","分數的四則運算"));
$("#math"      ).append(createUnit("一元一次方程式"));
$("#math"      ).append(createChapter("以符號代表數","一元一次方程式"));
$("#math"      ).append(createChapter("一次式的運算","一元一次方程式"));
$("#math"      ).append(createChapter("解一元一次方程式","一元一次方程式"));
$("#math"      ).append(createChapter("應用問題","一元一次方程式"));
$("#math"      ).append(createUnit("二元一次聯立方程式"));
$("#math"      ).append(createChapter("二元一次方程式","二元一次聯立方程式"));
$("#math"      ).append(createChapter("二元一次聯立方程式","二元一次聯立方程式"));
$("#math"      ).append(createChapter("應用問題","二元一次聯立方程式"));
$("#math"      ).append(createUnit("二元一次方程式的圖形"));
$("#math"      ).append(createChapter("直角坐標平面","二元一次方程式的圖形"));
$("#math"      ).append(createChapter("二元一次方程式的圖形","二元一次方程式的圖形"));
$("#math"      ).append(createChapter("求直線方程式及二元一次","二元一次方程式的圖形"));
$("#math"      ).append(createChapter("聯立方程式的圖形","二元一次方程式的圖形"));
$("#math"      ).append(createUnit("比例與線型函數"));
$("#math"      ).append(createChapter("比例式","比例與線型函數"));
$("#math"      ).append(createChapter("連比例","比例與線型函數"));
$("#math"      ).append(createChapter("正比與反比","比例與線型函數"));
$("#math"      ).append(createChapter("函數","比例與線型函數"));
$("#math"      ).append(createChapter("線型函數及其圖形","比例與線型函數"));
$("#math"      ).append(createUnit("一次不等式"));
$("#math"      ).append(createChapter("一次不等式","一次不等式"));
$("#math"      ).append(createChapter("解一元一次不等式","一次不等式"));
$("#math"      ).append(createChapter("應用問題","一次不等式"));
$("#math"      ).append(createUnit("乘法公式與多項式"));
$("#math"      ).append(createChapter("乘法公式","乘法公式與多項式"));
$("#math"      ).append(createChapter("乘法公式的應用","乘法公式與多項式"));
$("#math"      ).append(createChapter("多項式的加減","乘法公式與多項式"));
$("#math"      ).append(createChapter("多項式的乘除","乘法公式與多項式"));
$("#math"      ).append(createUnit("平方根與畢氏定理"));
$("#math"      ).append(createChapter("平方根與近似值","平方根與畢氏定理"));
$("#math"      ).append(createChapter("根式的化簡與四則運算","平方根與畢氏定理"));
$("#math"      ).append(createChapter("畢氏定理","平方根與畢氏定理"));
$("#math"      ).append(createUnit("因式分解"));
$("#math"      ).append(createChapter("因式分解","因式分解"));
$("#math"      ).append(createChapter("十字交乘法","因式分解"));
$("#math"      ).append(createUnit("一元二次方程式"));
$("#math"      ).append(createChapter("一元二次方程式","一元二次方程式"));
$("#math"      ).append(createChapter("配方法與公式解","一元二次方程式"));
$("#math"      ).append(createChapter("應用問題","一元二次方程式"));
$("#math"      ).append(createUnit("等差數列與等差級數"));
$("#math"      ).append(createChapter("等差數列","等差數列與等差級數"));
$("#math"      ).append(createChapter("等差級數","等差數列與等差級數"));
$("#math"      ).append(createUnit("幾何圖形與尺規作圖"));
$("#math"      ).append(createUnit("三角形的基本性質"));
$("#math"      ).append(createUnit("平行與四邊形"));
$("#math"      ).append(createUnit("相似形"));
$("#math"      ).append(createUnit("圓形"));
$("#math"      ).append(createUnit("幾何證明與三角形的心"));
$("#math"      ).append(createUnit("二次函數"));
$("#math"      ).append(createUnit("立體圖形"));
$("#math"      ).append(createUnit("資料整理與統計"));
//---公民目錄---
$("#citizen"   ).append(createUnit("法律生活"));
$("#citizen"   ).append(createChapter("法律的基本概念","法律生活"));
$("#citizen"   ).append(createChapter("人民的權利與義務","法律生活"));
$("#citizen"   ).append(createChapter("民法與生活","法律生活"));
$("#citizen"   ).append(createChapter("刑法與行政法規","法律生活"));
$("#citizen"   ).append(createChapter("權利救濟","法律生活"));
$("#citizen"   ).append(createChapter("少年的法律常識","法律生活"));
//---生物目錄---
$("#biology"   ).append(createUnit("生命世界"));
$("#biology"   ).append(createChapter("生物與環境","生命世界"));
$("#biology"   ).append(createChapter("生物體的構造","生命世界"));
$("#biology"   ).append(createChapter("實驗&nbsp;顯微鏡的使用與科學方法","生命世界"));
$("#biology"   ).append(createChapter("物質進出細胞","生命世界"));
$("#biology"   ).append(createChapter("構成個體的層次","生命世界"));
$("#biology"   ).append(createUnit("養分的獲得"));
$("#biology"   ).append(createChapter("能量和酵素","養分的獲得"));
$("#biology"   ).append(createChapter("實驗&nbsp;養分的測定與酵素的分解作用","養分的獲得"));
$("#biology"   ).append(createChapter("植物怎樣製造養分","養分的獲得"));
$("#biology"   ).append(createChapter("實驗&nbsp;光合作用產物的檢測","養分的獲得"));
$("#biology"   ).append(createChapter("動物怎樣製造養分","養分的獲得"));
$("#biology"   ).append(createUnit("生物體內物質的運輸"));
$("#biology"   ).append(createChapter("植物體內物質的運輸","生物體內物質的運輸"));
$("#biology"   ).append(createChapter("實驗&nbsp;植物體內水分的運輸","生物體內物質的運輸"));
$("#biology"   ).append(createChapter("動物體內物質的運輸","生物體內物質的運輸"));
$("#biology"   ).append(createChapter("實驗&nbsp;探測心音與脈搏","生物體內物質的運輸"));
$("#biology"   ).append(createChapter("實驗&nbsp;血液流動的觀察","生物體內物質的運輸"));
$("#biology"   ).append(createUnit("協調作用"));
$("#biology"   ).append(createChapter("神經系統","協調作用"));
$("#biology"   ).append(createChapter("實驗&nbsp;與協調作用相關的實驗","協調作用"));
$("#biology"   ).append(createChapter("內分泌系統","協調作用"));
$("#biology"   ).append(createChapter("動物行為","協調作用"));
$("#biology"   ).append(createChapter("植物的感應","協調作用"));
$("#biology"   ).append(createUnit("恆定性"));
$("#biology"   ).append(createChapter("呼吸及氣體的恆定","恆定性"));
$("#biology"   ).append(createChapter("實驗&nbsp;生物的呼吸作用","恆定性"));
$("#biology"   ).append(createChapter("體溫的恆定","恆定性"));
$("#biology"   ).append(createChapter("血糖的恆定","恆定性"));
$("#biology"   ).append(createChapter("排泄作用與水分的恆定","恆定性"));
$("#biology"   ).append(createUnit("生殖"));
$("#biology"   ).append(createChapter("染色體、細胞分裂與減數分裂","生殖"));
$("#biology"   ).append(createChapter("無性生殖","生殖"));
$("#biology"   ).append(createChapter("有性生殖","生殖"));
$("#biology"   ).append(createChapter("實驗&nbsp;蛋的觀察","生殖"));
$("#biology"   ).append(createChapter("生殖行為","生殖"));
$("#biology"   ).append(createUnit("遺傳"));
$("#biology"   ).append(createChapter("遺傳法則","遺傳"));
$("#biology"   ).append(createChapter("基因與遺傳","遺傳"));
$("#biology"   ).append(createChapter("人類的遺傳","遺傳"));
$("#biology"   ).append(createChapter("突變與生物技術","遺傳"));
$("#biology"   ).append(createUnit("演化"));
$("#biology"   ).append(createChapter("演化的發生","演化"));
$("#biology"   ).append(createChapter("演化的證據","演化"));
$("#biology"   ).append(createChapter("生物的演化","演化"));
$("#biology"   ).append(createUnit("生物圈的生物"));
$("#biology"   ).append(createChapter("生物的命名與分類","生物圈的生物"));
$("#biology"   ).append(createChapter("原核生物界、原生生物界與菌物界","生物圈的生物"));
$("#biology"   ).append(createChapter("植物界","生物圈的生物"));
$("#biology"   ).append(createChapter("動物界","生物圈的生物"));
$("#biology"   ).append(createUnit("生物與環境"));
$("#biology"   ).append(createChapter("生態學的研究範疇","生物與環境"));
$("#biology"   ).append(createChapter("能量流動與物質循環","生物與環境"));
$("#biology"   ).append(createChapter("生態系的種類","生物與環境"));
$("#biology"   ).append(createChapter("人類與環境","生物與環境"));