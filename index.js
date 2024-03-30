var c = document.getElementById("c");
var ctx = c.getContext("2d");

var cw = c.width = 500,
  cx = cw / 2;
var ch = c.height = 500,
  cy = ch / 2;
var frames = 0;
var rad = (Math.PI / 180);
var r, x, y;

ctx.strokeStyle = "black";
ctx.lineWidth = 4;

function Draw() {
  frames -= 20;
  ctx.clearRect(0, 0, cw, ch)
  ctx.beginPath();
  for (var i = 0; i < 36000; i++) {
    var t = i * rad;
    
    var r = t;
    
    x = cx + r * Math.cos(t + frames * rad);
    y = cy + r * Math.sin(t + frames * rad);
    ctx.lineTo(x, y)
  }
  ctx.stroke();
  ctx.globalCompositeOperation = "difference";

  requestId = window.requestAnimationFrame(Draw);
}
requestId = window.requestAnimationFrame(Draw);