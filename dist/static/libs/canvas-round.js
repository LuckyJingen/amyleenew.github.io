var CanvasRounds = (function(){
	function getELementById(id){
		return document.getElementById(id);
	}
	function drawScreen(caConfig){
		var canvasObj = document.createElement("canvasone");
		caConfig = caConfig || {};
		var canvas = {
			points : [],
			// 默认配置
			cxt: canvasObj,
			d:  caConfig.d || 4,
			w: caConfig.w|| 2,
			h: caConfig.h|| 2,
			R: caConfig.R || 100,
			rot: caConfig.rot || 100,
			color: caConfig.color || "121, 162, 185",
		};
		drawMoon(canvas.ctx,2,canvas.w / 2,canvas.h / 2,100,15); 

	}
	function drawMoon(cxt, d, x, y, R, rot){ 
		cxt.save(); 
		cxt.translate(x, y); 
		cxt.scale(R, R); 
		cxt.rotate(Math.PI / 180 * rot); 
		pathMoon(cxt, d); cxt.fillStyle = 'hsl' + randomColor(); 
		cxt.fill(); cxt.restore(); 
		} //画路径 
	function pathMoon(cxt, d){ //D表示控制点的横坐标； 
		cxt.beginPath(); 
		cxt.arc(0, 0, 1, Math.PI * 0.5, Math.PI * 1.5, true); 
		cxt.moveTo(0, -1); 
		cxt.arcTo(d, 0, 0, 1, dis(0, -1, d, 0) * 1 / d); 
		cxt.closePath();
		 }
	function dis(x1, y1, x2, y2){ 
		return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)); 
	} 
	return drawScreen
})();
export default CanvasRounds