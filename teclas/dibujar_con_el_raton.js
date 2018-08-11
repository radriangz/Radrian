
var lienzo = document.getElementById("area_de_dibujo");
var papel = lienzo.getContext("2d");

lienzo.addEventListener("mousedown", comienzaLinea);
lienzo.addEventListener("mousemove", dibujarLineaMouseDown);
lienzo.addEventListener("mouseup", terminarLinea);

var xi = 0;
var yi = 0;
var clickRaton = false;

function comienzaLinea(mousedown) //Por qué se le pone el event?
{
  clickRaton = true;
  xi = mousedown.layerX; //Según yo, porque el event es lo que lo activa, el event mousedown lo activa,
                    //y de ese evento se consiguen las propiedades layerX/Y
  yi = mousedown.layerY;
}

function dibujarLineaMouseDown(event)
{
  if (clickRaton) //Yo le puse originalmente =true pero no funciona con =true
  {
  var xf = event.layerX;
  var yf = event.layerY;

  dibujarLinea("black", xi, yi, xf, yf, papel, 3);
  xi = xf;
  yi = yf;
  }
}

function terminarLinea(event)
{
  clickRaton = false;
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

dibujarMarcoDelLienzo();
function dibujarMarcoDelLienzo ()
{
  dibujarLinea("gray", 1, 1, 1, 499, papel, 1);
  dibujarLinea("gray", 1, 1, 499, 1, papel, 1);
  dibujarLinea("gray", 1, 499, 499, 499, papel, 1);
  dibujarLinea("gray", 499, 1, 499, 499, papel, 1);
}
