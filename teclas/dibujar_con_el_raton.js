
var lienzo = document.getElementById("area_de_dibujo");
var papel = lienzo.getContext("2d");

document.addEventListener("mousedown", dibujar);
//document.addEventListener("mousemove") dibujar2);

function dibujar(param)
{
  console.log(param);
  xi = param.layerX;
  yi = param.layerY;
  //alert(xi + ", " + yi);
    dibujarLinea("black", xi, yi, 1, 499, papel, 3);
}

function dibujar2()
{
  alert("funciona");
}

marco();

function marco(dibujarLinea)
{
  a = 1;
  b = 499;
  marcoCol = "gray";
  dibujarLinea("marcoCol", a, a, a, b, papel, 1);
  dibujarLinea("marcoCol", a, a, b, a, papel, 1);
  dibujarLinea("marcoCol", a, b, b, b, papel, 1);
  dibujarLinea("marcoCol", b, a, b, b, papel, 1);
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
