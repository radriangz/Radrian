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
    console.log("x = " + xx);
  }
}


function moverLobo(evento)
{
  alert("x = " + x);
  var movimiento = 5
  if(evento.keyCode == teclas.UP)
  {
    moverConTeclas(x, y, x, y - movimiento, papel);
    y = y - movimiento;
  }
  if(evento.keyCode == teclas.DOWN)
  {
    moverConTeclas(x, y, x, y + movimiento, papel);
    y = y + movimiento;
  }
  if(evento.keyCode == teclas.LEFT)
  {
    moverConTeclas(x, y, x - movimiento, y, papel);
    x = x - movimiento;
  }
  if(evento.keyCode == teclas.RIGHT)
  {
    moverConTeclas(x, y, x + movimiento, y, papel);
    x = x + movimiento;
  }
}

function moverConTeclas(xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
  return resultado;
}
