mathU1C1();
function mathU1C1() {
	var canvas = document.getElementById("mathU1C1-1");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		//數線
		ctx.moveTo(0, 30);
		ctx.lineTo(495, 30);
		ctx.stroke();
		//箭頭
		ctx.moveTo(487, 27);
		ctx.lineTo(500, 30);
		ctx.lineTo(487, 33);
		ctx.fill();
		//原點
		ctx.moveTo(250, 30);
		ctx.arc(250, 30, 2, 0, 2 * Math.PI, true);
		ctx.fill();
		//刻度
		ctx.moveTo(90, 20);
		ctx.lineTo(90, 40);
		ctx.moveTo(170, 20);
		ctx.lineTo(170, 40);
		ctx.moveTo(250, 19);
		ctx.lineTo(250, 41);
		ctx.moveTo(330, 20);
		ctx.lineTo(330, 40);
		ctx.moveTo(410, 20);
		ctx.lineTo(410, 40);
		ctx.stroke();
		//單位長
		ctx.moveTo(340, 60);
		ctx.stroke();
	}
}
	