var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keyup", moverLobo);

var x = 0;
var y = 0;

var fondo = {
  url: "tile.png",
  cargaOK: false
}

var lobo = {
  url: "lobo.png",
  cargaOK: false,
  loboX: aleatorio(0, 420),
  loboY: aleatorio(0, 420)
}

var vaca = {
  url: "vaca.png",
  cargaOK: false,
  //vacaX: aleatorio(0, 420),
  //vacaY: aleatorio(0, 420)
}

var pollo = {
  url: "pollo.png",
  cargaOK: false
}

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarLobo() {
  lobo.cargaOK = true;
  dibujar();
}

function dibujar(event) {
  if(fondo.cargaOK) {
    console.log("dibujando fondo");
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK) {
    for(var v=0; v < 5; v++) {
      console.log("dibujando vacas");
      //var x = vaca.vacaX;
      //var y = vaca.vacaY;
      //papel.drawImage(vaca.imagen, vaca.vacaX, vaca.vacaY);
      papel.drawImage(vaca.imagen, aleatorio(0,420), aleatorio(0,420));
      /*var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(vaca.imagen, x, y);
      console.log("x = " + x);*/
    }
  }
  if(pollo.cargaOK) {
    for(var v=0; v < 5; v++) {
      console.log("dibujando pollos");
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      console.log(x + ", " + y)
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if(cerdo.cargaOK) {
      for(var v=0; v < 5; v++) {
        console.log("dibujando cerdos");
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        papel.drawImage(cerdo.imagen, x, y);
      }
    }
  if(lobo.cargaOK) {
    console.log("dibujando lobo");
    papel.drawImage(lobo.imagen, lobo.loboX, lobo.loboY);
  }
}

function moverLobo(evento) {
  var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };

  var movimiento = 25;

  if(evento.keyCode == teclas.UP) {
    lobo.loboX = lobo.loboX;
    lobo.loboY = lobo.loboY - movimiento;
    dibujar(lobo.imagen, lobo.loboX, lobo.loboY);
  }
  if(evento.keyCode == teclas.DOWN) {
    lobo.loboX = lobo.loboX;
    lobo.loboY = lobo.loboY + movimiento;
    dibujar(lobo.imagen, lobo.loboX, lobo.loboY);
  }
  if(evento.keyCode == teclas.LEFT) {
    lobo.loboX = lobo.loboX - movimiento;
    lobo.loboY = lobo.loboY;
    dibujar(lobo.imagen, lobo.loboX, lobo.loboY);
  }
  if(evento.keyCode == teclas.RIGHT) {
    lobo.loboX = lobo.loboX + movimiento;
    lobo.loboY = lobo.loboY;
    dibujar(lobo.imagen, lobo.loboX, lobo.loboY);
  }
}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
  return resultado;
}
