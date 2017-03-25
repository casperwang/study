historyU2C1();
function historyU2C1() {
	var canvas = document.getElementById("historyU2C1");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		var image = new Image();
    	image.onload = function() {
    		ctx.drawImage(image, 240, 150, 360, 330, 0, 0, 360, 330);
    		ctx.beginPath();
			ctx.fillStyle = "rgb(255, 255, 255)";
			ctx.fillRect(0, 0, 180, 20);
			ctx.closePath();
			image2.src = 'img/0001.png';
		}
		var image2 = new Image();
		image2.onload = function() {
    		ctx.drawImage(image2, 0, 0, 360, 330);
		}
		image.src = 'images/China.png';
	}
}
	