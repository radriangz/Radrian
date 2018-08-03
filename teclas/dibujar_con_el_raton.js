
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

var xi = 0;
var yi = 0;

function dibujarMouseMove(event)
{
  //alert("d");
  xi = event.layerX;
  yi = event.layerY;

  var xf = event.layerX + event.movementX;
  var yf = event.layerY + event.movementY;

  console.log("xi: " + xi + ", yi: " + yi + ", xf: " + xf + ", yf: " + yf);

  dibujarLinea("black", xi, yi, xf, yf, papel, 3);

  /*xi = xf;
  yi = yf;

  console.log("xi: " + xi + ", yi: " + yi);*/

  /*console.log("layerX = " + event.layerX + " layerY = " + event.layerY +
  ", movementX = " + event.movementX + ", movementY = " + event.movementY +
  ", offsetX = " + event.offsetX + ", offsetY = " + event.offsetY +
  ", pageX = " + event.pageX + ", pageY = " + event.pageY)*/

  //console.log(event);
  //
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
