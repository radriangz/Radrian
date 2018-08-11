
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
  cargaOK: false,
  lobox: aleatorio(0, 420),
  loboy: aleatorio(0, 420),
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
    papel.drawImage(lobo.imagen, lobo.lobox, lobo.loboy);
  }
}

function moverLobo(evento)
{
  var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  var movimiento = 25
  if(evento.keyCode == teclas.UP)
  {
    lobo.lobox = lobo.lobox;
    lobo.loboy = lobo.loboy - movimiento;
    dibujar(lobo.imagen, lobo.lobox, lobo.loboy);
  }
  if(evento.keyCode == teclas.DOWN)
  {
    lobo.lobox = lobo.lobox;
    lobo.loboy = lobo.loboy + movimiento;
    dibujar(lobo.imagen, lobo.lobox, lobo.loboy);
  }
  if(evento.keyCode == teclas.LEFT)
  {
    lobo.lobox = lobo.lobox - movimiento;
    lobo.loboy = lobo.loboy;
    dibujar(lobo.imagen, lobo.lobox, lobo.loboy);
  }
  if(evento.keyCode == teclas.RIGHT)
  {
    lobo.lobox = lobo.lobox + movimiento;
    lobo.loboy = lobo.loboy;
    dibujar(lobo.imagen, lobo.lobox, lobo.loboy);
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
  return resultado;
}
