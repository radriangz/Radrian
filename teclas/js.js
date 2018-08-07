var canvasHtml = document.getElementById("canvas");
var pizarra = canvasHtml.getContext("2d");

document.addEventListener("click", click_function);
document.addEventListener("mousemove", mousemove_function);
document.addEventListener("mouseup", mouseup_function);

var xi = 0;
var yi = 0;
var dibujar = false;

function click_function(event) {
  xi = event.layerX;
  yi = event.laverY;
  dibujar = true;
}

function mousemove_function(event) {
  var xf = event.layerX;
  var yf = event.layerY;

  dibujar(xi, xf, yi, yf, "black", 3);
}

function mouseup_function(event) {
  dibujar = false;
}
