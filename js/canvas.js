mathU1C1();
function mathU1C1() {
	var canvas = document.getElementById("mathU1C1-1");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		//數線
		ctx.beginPath();
		ctx.moveTo(0, 30);
		ctx.lineTo(495, 30);
		ctx.stroke();
		ctx.closePath();
		//箭頭
		ctx.beginPath();
		ctx.moveTo(487, 27);
		ctx.lineTo(500, 30);
		ctx.lineTo(487, 33);
		ctx.fill();
		ctx.closePath();
		//原點
		ctx.beginPath();
		ctx.moveTo(250, 30);
		ctx.arc(250, 30, 2, 0, 2 * Math.PI, true);
		ctx.fill();
		ctx.closePath();
		//刻度
		ctx.beginPath();
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
		ctx.closePath();
		//單位長
		ctx.moveTo(250, 30);
		ctx.beginPath();
		ctx.strokeStyle = "rgb(0, 0, 0)";
		ctx.arc(290, 60, 50, 1.224 * Math.PI, 1.25 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.arc(290, 60, 50, 1.25 * Math.PI, 1.275 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgb(0, 0, 0)";
		ctx.arc(290, 60, 50, 1.275 * Math.PI, 1.3 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.arc(290, 60, 50, 1.3 * Math.PI, 1.325 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgb(0, 0, 0)";
		ctx.arc(290, 60, 50, 1.325 * Math.PI, 1.35 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.arc(290, 60, 50, 1.35 * Math.PI, 1.625 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.arc(290, 60, 50, 1.625 * Math.PI, 1.65 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgb(0, 0, 0)";
		ctx.arc(290, 60, 50, 1.65 * Math.PI, 1.675 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.arc(290, 60, 50, 1.675 * Math.PI, 1.7 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgb(0, 0, 0)";
		ctx.arc(290, 60, 50, 1.7 * Math.PI, 1.725 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.arc(290, 60, 50, 1.725 * Math.PI, 1.75 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgb(0, 0, 0)";
		ctx.arc(290, 60, 50, 1.75 * Math.PI, 1.775 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.arc(290, 60, 50, 1.775 * Math.PI, 1.8 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
	}
}
	