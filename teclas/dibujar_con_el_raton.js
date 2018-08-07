
var lienzo = document.getElementById("area_de_dibujo");
var papel = lienzo.getContext("2d");

//document.addEventListener("mousedown", dibujarMouseDown);
document.addEventListener("mousemove", dibujarMouseMove);

var xi = 0;
var yi = 0;
var clickRaton = false;

function dibujarMouseMove(event)
{
  if (clickRaton)
  {
  var xf = event.layerX + event.movementX;
  var yf = event.layerY + event.movementY;

  //console.log("xi: " + xi + ", yi: " + yi + ", xf: " + xf + ", yf: " + yf);

  dibujarLinea("black", xi, yi, xf, yf, papel, 3);

  xi = xf;
  yi = yf;
  }
}

dibujarMarcoDelLienzo();
function dibujarMarcoDelLienzo ()
{
  dibujarLinea("gray", 1, 1, 1, 499, papel, 1);
  dibujarLinea("gray", 1, 1, 499, 1, papel, 1);
  dibujarLinea("gray", 1, 499, 499, 499, papel, 1);
  dibujarLinea("gray", 499, 1, 499, 499, papel, 1);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo, grosor)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosor;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
