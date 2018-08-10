var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var x = 0;
var y = 0;

var aDT = document.getElementById("areaDeTrabajo");
var papel = aDT.getContext("2d");
document.addEventListener("keyup", moverLobo);

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var lobo = {
  url: "lobo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarLobo()
{
  lobo.cargaOK = true;
  dibujar();
}

function dibujar(event)
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(lobo.cargaOK)
  {
    var xx = aleatorio(0, 420);
    var yy = aleatorio(0, 420);
    papel.drawImage(lobo.imagen, xx, yy);
    x = xx;
    y = yy;
  }
}


function moverLobo(evento)
{
  var movimiento = 25
  if(evento.keyCode == teclas.UP)
  {
    xx = y - movimiento;
    yy = y;
    dibujar(xx, yy);
  }
  if(evento.keyCode == teclas.DOWN)
  {
    xx = x;
    yy = y + movimiento;
    dibujar(xx, yy);
  }
  if(evento.keyCode == teclas.LEFT)
  {
    xx = x - movimiento;
    yy = y;
    dibujar(xx, yy);
  }
  if(evento.keyCode == teclas.RIGHT)
  {
    xx = x + movimiento;
    yy = y;
    dibujar(xx, yy);
  }
}

/*function moverConTeclas(xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}*/



function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
  return resultado;
}
