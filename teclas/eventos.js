
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("mousedown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, x+1, papel, 0);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo, lol)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{00
  var colorcito = "blue";
  var movimiento = 3;
  console.log(evento)
  if(evento.keyCode == teclas.DOWN)
  {
    console.log("Vamo' pá abajo");
  }
  /*switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
    break;
  }*/
}

/*if(evento.keyCode == teclas.DOWN)
{
  console.log("Vamo' pá abajo");
}
if(evento.keyCode == teclas.LEFT)
{
  console.log("Vamo' pá la izquierda");
}
if(evento.keyCode == teclas.RIGHT)
{
  console.log("Vamo' pá la derecha");
}*/
