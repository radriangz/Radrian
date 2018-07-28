var d = document.getElementById("dibujitoalreves");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xi, yf;
var colorcito = "#FAA"

while(l < lineas)
{
  xi = 10 * l;
  yf = 10 * (l + 1);
  dibujarLinea("#AAF", xi, 0, 300, yf);
  console.log("linea" + l)
  l = l + 1;
}

dibujarLinea(colorcito, 299, 299, 299, 1)
dibujarLinea(colorcito, 299, 1, 1, 1)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}



/*
dibujarLinea("pink", 10, 300, 220, 10);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal);
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
*/
