function numOrNot(val) {
	return val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9" || val == "0";
}
var nowUnit;
var nowChapter;
$('.content').hide();
$('.chapterIndex').hide();
$('.subject').hide();
$('body').show();
function createSpan(unit) {
	return "<p style='text-decoration:none;color: black;font-size: 28px;'>" + unit + "</p>";
}
function createUnit(unit) {
	return "<a href='javascript:unit(\"" + unit + "\");' class='" + unit + " unitIndex' style='text-decoration:none;color: black;font-size: 24px;'>&nbsp;" + unit + "</a>";
}
function createChapter(chapter,unit) {
	return "<a href='javascript:chapter(\"" + chapter + "\",\"" + unit +"\");' class='biology chapterIndex u" + unit + " c" + chapter + "' style='text-decoration:none;color: black;font-size: 20px;'> &nbsp;&nbsp;&nbsp;" + chapter + "</a>";
}
function subject(subject) {
	$('.chapterIndex').hide();
	$('.content').hide();
	$('.subject').hide();
	$(subject).show();
}
function unit(unit) {
	$('.chapterIndex').hide();
	$('.u' + unit).show();
	nowUnit = unit;
}
function chapter(chapter, unit) {
	$('#' + nowChapter).hide();
	$('.c' + nowChapter).css("font-weight","normal");
	$('.u' + unit).show();
	$('.c' + chapter).css("font-weight","bold");
	$('#' + chapter).show();
	nowChapter = chapter;
	$('.ans').text("");
}
//---地理目錄---
$("#geography" ).append(createUnit("台灣地理"));
$("#geography" ).append(createChapter("地理位置與範圍","台灣地理"));
$("#geography" ).append(createChapter("地形","台灣地理"));
$("#geography" ).append(createChapter("海岸與島嶼","台灣地理"));
$("#geography" ).append(createChapter("天氣與氣候","台灣地理"));
$("#geography" ).append(createChapter("水文","台灣地理"));
$("#geography" ).append(createChapter("台灣的環境問題與環境保護","台灣地理"));
$("#geography" ).append(createChapter("人口","台灣地理"));
$("#geography" ).append(createChapter("產業","台灣地理"));
$("#geography" ).append(createChapter("聚落與交通","台灣地理"));
$("#geography" ).append(createChapter("台灣的區域特色及發展","台灣地理"));
$("#geography" ).append(createUnit("中國地理"));
$("#geography" ).append(createChapter("疆域與區域劃分","中國地理"));
$("#geography" ).append(createChapter("地形","中國地理"));
$("#geography" ).append(createChapter("氣候與水文","中國地理"));
$("#geography" ).append(createChapter("人口分布與人口問題","中國地理"));
$("#geography" ).append(createChapter("產業與經濟","中國地理"));
$("#geography" ).append(createChapter("資源問題與環境保育","中國地理"));
$("#geography" ).append(createChapter("南部地區","中國地理"));
$("#geography" ).append(createChapter("北部地區","中國地理"));
$("#geography" ).append(createChapter("西部地區","中國地理"));
$("#geography" ).append(createUnit("世界地理"));
$("#geography" ).append(createChapter("世界概說","世界地理"));
$("#geography" ).append(createChapter("東北亞","世界地理"));
$("#geography" ).append(createChapter("東南亞與南亞","世界地理"));
//---歷史目錄---
$("#history"   ).append(createUnit("台灣歷史"));
$("#history"   ).append(createChapter("史前台灣與原住民文化","台灣歷史"));
$("#history"   ).append(createChapter("國際競爭下的台灣","台灣歷史"));
$("#history"   ).append(createChapter("鄭氏時期的經營","台灣歷史"));
$("#history"   ).append(createChapter("清領前期的政治與經濟","台灣歷史"));
$("#history"   ).append(createChapter("清領前期的社會與文化","台灣歷史"));
$("#history"   ).append(createChapter("清領後期的開港與建省","台灣歷史"));
$("#history"   ).append(createChapter("日治時期的殖民統治","台灣歷史"));
$("#history"   ).append(createChapter("日治時期的經濟發展","台灣歷史"));
$("#history"   ).append(createChapter("日治時期的社會與文化","台灣歷史"));
$("#history"   ).append(createChapter("戰後台灣的政治變遷","台灣歷史"));
$("#history"   ).append(createChapter("戰後台灣的外交與兩岸關係","台灣歷史"));
$("#history"   ).append(createChapter("戰後台灣的經濟與社會","台灣歷史"));
$("#history"   ).append(createUnit("中國歷史"));
$("#history"   ).append(createChapter("從史前到春秋戰國","中國歷史"));
$("#history"   ).append(createChapter("秦漢大一統帝國的建立","中國歷史"));
$("#history"   ).append(createChapter("魏晉南北朝的分與合","中國歷史"));
$("#history"   ).append(createChapter("胡漢融合的隋唐帝國","中國歷史"));
$("#history"   ).append(createChapter("多民族並立的宋元時期","中國歷史"));
$("#history"   ).append(createChapter("明代與盛清的發展","中國歷史"));
$("#history"   ).append(createChapter("晚清的變局","中國歷史"));
$("#history"   ).append(createChapter("清末的改革","中國歷史"));
$("#history"   ).append(createChapter("清朝的覆亡","中國歷史"));
$("#history"   ).append(createChapter("民初的政局與社會變遷","中國歷史"));
$("#history"   ).append(createChapter("國民政府的統治","中國歷史"));
$("#history"   ).append(createChapter("中華人民共和國的建立與發展","中國歷史"));
//---公民目錄---
$("#citizen"   ).append(createUnit("個人與社會生活"));
$("#citizen"   ).append(createChapter("自我的成長","個人與社會生活"));
$("#citizen"   ).append(createChapter("和諧的性別關係","個人與社會生活"));
$("#citizen"   ).append(createChapter("家庭生活","個人與社會生活"));
$("#citizen"   ).append(createChapter("家庭協奏曲","個人與社會生活"));
$("#citizen"   ).append(createChapter("友善校園與終身學習","個人與社會生活"));
$("#citizen"   ).append(createChapter("社區生活","個人與社會生活"));
$("#citizen"   ).append(createChapter("社會互動","個人與社會生活"));
$("#citizen"   ).append(createChapter("社會中的團體","個人與社會生活"));
$("#citizen"   ).append(createChapter("社會規範","個人與社會生活"));
$("#citizen"   ).append(createChapter("社會中的文化","個人與社會生活"));
$("#citizen"   ).append(createChapter("變遷中的社會","個人與社會生活"));
$("#citizen"   ).append(createChapter("社會福利","個人與社會生活"));
$("#citizen"   ).append(createUnit("民主的政治"));
$("#citizen"   ).append(createChapter("現代國家與民主政治","民主的政治"));
$("#citizen"   ).append(createChapter("中央政府","民主的政治"));
$("#citizen"   ).append(createChapter("地方政府","民主的政治"));
$("#citizen"   ).append(createChapter("政府的經濟功能","民主的政治"));
$("#citizen"   ).append(createChapter("政黨與利益團體","民主的政治"));
$("#citizen"   ).append(createChapter("政治參與和選舉","民主的政治"));
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
//---理化目錄---
$("#science"   ).append(createUnit("化學反應"));
$("#science"   ).append(createChapter("質量守恆","化學反應"));
$("#science"   ).append(createChapter("細數原子與分子","化學反應"));
$("#science"   ).append(createChapter("化學計量","化學反應"));
$("#science"   ).append(createUnit("氧化還原"));
$("#science"   ).append(createChapter("氧化反應","氧化還原"));
$("#science"   ).append(createChapter("氧化與還原反應","氧化還原"));
$("#science"   ).append(createChapter("氧化還原的應用","氧化還原"));
$("#science"   ).append(createUnit("酸、鹼、鹽"));
$("#science"   ).append(createChapter("認識電解質","酸、鹼、鹽"));
//計算
var input = 0;
var output = 0;
//---理化---
var fdb = new ForerunnerDB();
var db = fdb.db("element");
var elementCollection = db.collection('element');
//---元素週期表---
{
	elementCollection.insert({
		abbreviation: 'H',
		AtomicOrder: 1,
		atomicWeight: 1,
	})
	elementCollection.insert({
		abbreviation: 'He',
		AtomicOrder: 2,
		atomicWeight: 4,
	})
	elementCollection.insert({
		abbreviation: 'C',
		AtomicOrder: 6,
		atomicWeight: 12,
	})
	elementCollection.insert({
		abbreviation: 'N',
		AtomicOrder: 7,
		atomicWeight: 14,
	})
	elementCollection.insert({
		abbreviation: 'O',
		AtomicOrder: 8,
		atomicWeight: 16,
	})
	elementCollection.insert({
		abbreviation: 'Na',
		AtomicOrder: 11,
		atomicWeight: 23,
	})
	elementCollection.insert({
		abbreviation: 'Al',
		AtomicOrder: 13,
		atomicWeight: 27,
	})
	elementCollection.insert({
		abbreviation: 'S',
		AtomicOrder: 16,
		atomicWeight: 32,
	})
	elementCollection.insert({
		abbreviation: 'Cl',
		AtomicOrder: 17,
		atomicWeight: 35.5,
	})
	elementCollection.insert({
		abbreviation: 'K',
		AtomicOrder: 19,
		atomicWeight: 39,
	})
	elementCollection.insert({
		abbreviation: 'Ca',
		AtomicOrder: 20,
		atomicWeight: 40,
	})
	elementCollection.insert({
		abbreviation: 'Cu',
		AtomicOrder: 29,
		atomicWeight: 63.5,
	})
}
function MolecularWeight(input) {
	var total = 0;
	var atomicWeight = 0;
	for (var i = 0; i < input.length; i++) {
		if (input.charAt(i).toUpperCase() == input.charAt(i) && numOrNot(input.charAt(i)) == false && input.charAt(i) != "(" && input.charAt(i) != ")") {
			if (input.charAt(i+1).toLowerCase() == input.charAt(i+1) && numOrNot(input.charAt(i+1)) == false) {
				if (numOrNot(input.charAt(i+2)) == true){
					if (numOrNot(input.charAt(i+3)) == true) {
						atomicWeight = elementCollection.find({
							abbreviation: input.charAt(i) + input.charAt(i+1)
						})[0].atomicWeight * ((input.charAt(i+2) - 1 + 1) * 10 + ((input.charAt(i+3) - 1 + 1)));
						i = i + 3;
					} else {
						atomicWeight = elementCollection.find({
							abbreviation: input.charAt(i) + input.charAt(i+1)
						})[0].atomicWeight * (input.charAt(i+2) - 1 + 1);
						i = i + 2;
					}
				} else {
					atomicWeight = elementCollection.find({
						abbreviation: input.charAt(i) + input.charAt(i+1)
					})[0].atomicWeight;
					i = i + 1;
				}
			} else if (numOrNot(input.charAt(i+1)) == true){
				if (numOrNot(input.charAt(i+2)) == true){
					atomicWeight = elementCollection.find({
							abbreviation: input.charAt(i)
					})[0].atomicWeight * ((input.charAt(i+1) - 1 + 1) * 10 + ((input.charAt(i+2) - 1 + 1)));
					i = i + 2;
				} else {
					atomicWeight = elementCollection.find({
							abbreviation: input.charAt(i)
					})[0].atomicWeight * (input.charAt(i+1) - 1 + 1);
					i = i + 1;
				}
			} else {
				atomicWeight = elementCollection.find({
					abbreviation: input.charAt(i)
				})[0].atomicWeight;
			}
			total = total + atomicWeight;
		} else if (input.charAt(i) == "(") {
			var j = i;
			atomicWeight = 0;
			while(input.charAt(j) != ")") {
				j++;
				if (input.charAt(j).toUpperCase() == input.charAt(j) && numOrNot(input.charAt(j)) == false && input.charAt(j) != "(" && input.charAt(j) != ")") {
					if (input.charAt(j+1).toLowerCase() == input.charAt(j+1) && numOrNot(input.charAt(j+1)) == false && input.charAt(j+1) != "(" && input.charAt(j+1) != ")") {
						if (numOrNot(input.charAt(j+2)) == true){
							if (numOrNot(input.charAt(j+3)) == true) {
								atomicWeight = elementCollection.find({
									abbreviation: input.charAt(j) + input.charAt(j+1)
								})[0].atomicWeight * ((input.charAt(j+2) - 1 + 1) * 10 + ((input.charAt(ji+3) - 1 + 1))) + atomicWeight;
								j = j + 3;
							} else {
								atomicWeight = elementCollection.find({
									abbreviation: input.charAt(j) + input.charAt(j+1)
								})[0].atomicWeight * (input.charAt(j+2) - 1 + 1) + atomicWeight;
								j = j + 2;
							}
						} else {
							atomicWeight = elementCollection.find({
								abbreviation: input.charAt(j) + input.charAt(j+1)
							})[0].atomicWeight + atomicWeight;
							j = j + 1;
						}
					} else if (numOrNot(input.charAt(j+1)) == true){
						if (numOrNot(input.charAt(j+2)) == true){
							atomicWeight = elementCollection.find({
									abbreviation: input.charAt(j)
							})[0].atomicWeight * ((input.charAt(j+1) - 1 + 1) * 10 + ((input.charAt(j+2) - 1 + 1))) + atomicWeight;
							j = j + 2;
						} else {
							atomicWeight = elementCollection.find({
									abbreviation: input.charAt(j)
							})[0].atomicWeight * (input.charAt(j+1) - 1 + 1) + atomicWeight;
							j = j + 1;
						}
					} else {
						atomicWeight = elementCollection.find({
							abbreviation: input.charAt(j)
						})[0].atomicWeight + atomicWeight;
					}
				}
			}
			j++;
			if (numOrNot(input.charAt(j+1)) == true){
				atomicWeight = atomicWeight * ((input.charAt(j) - 1 + 1) * 10 + ((input.charAt(j+1) - 1 + 1)));
				j = j + 2;
			} else if (numOrNot(input.charAt(j)) == true){
				atomicWeight = atomicWeight * (input.charAt(j) - 1 + 1);
				j = j + 1;
			}
			total = total + atomicWeight;
			i = j;
		}
	}
	return total;
}
function scienceU7C1(a){
	if (a == 1 && $('#scienceU7C1-1').val() != "") {
		$('#scienceU7C1-1Ans').text("")
		input = $('#scienceU7C1-1').val();
		$('#scienceU7C1-1').val("");
		output = input;
		for (var i = 0; i < output.length; i++) {
			if(numOrNot(output.charAt(i)) == true) {
				$('#scienceU7C1-1Ans').html($('#scienceU7C1-1Ans').html() + output.charAt(i).sub());
			} else {
				$('#scienceU7C1-1Ans').html($('#scienceU7C1-1Ans').html() + output.charAt(i));
			}
		}
		$('#scienceU7C1-1Ans').html($('#scienceU7C1-1Ans').html() + " 分子量: " + MolecularWeight(input));
	} else if (a == 2  && $('#scienceU7C1-2-1').val() != "" && ($('#scienceU7C1-2-2').val() != "" || $('#scienceU7C1-2-3').val() != "")) {
		input = $('#scienceU7C1-2-1').val();
		if ($('#scienceU7C1-2-2').val() != "") {
			$('#scienceU7C1-2-3').val(($('#scienceU7C1-2-2').val() - 1 + 1) / MolecularWeight(input));
		} else {
			$('#scienceU7C1-2-2').val(($('#scienceU7C1-2-3').val() - 1 + 1) * MolecularWeight(input));
		}
	}
}