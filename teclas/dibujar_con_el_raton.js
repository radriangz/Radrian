
var lienzo = document.getElementById("area_de_dibujo");
var papel = lienzo.getContext("2d");

//document.addEventListener("mousedown", dibujarMouseDown);
document.addEventListener("mousemove", dibujarMouseMove);

/*function dibujarMouseDown(event)
{
  xi = event.layerX;
  yi = event.layerY;
  //alert(xi + ", " + yi);
    dibujarLinea("black", xi, yi, 1, 499, papel, 3);
    console.log(event);
}*/

function dibujarMouseMove(event)
{
  xi = event.screenX;
  yi = event.screenY;
  xf = event.clientX;
  yf = event.clientY;
  console.log(event);
  dibujarLinea("black", xi, yi, xf, yf, papel, 3);
  }

dibujarLinea("gray", 1, 1, 1, 499, papel, 1);
dibujarLinea("gray", 1, 1, 499, 1, papel, 1);
dibujarLinea("gray", 1, 499, 499, 499, papel, 1);
dibujarLinea("gray", 499, 1, 499, 499, papel, 1);

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
