
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keyup", moverLobo);

var x = 0;
var y = 0;

var fondo = {
  url: "tile.png",
  cargaOK: false,
  dibujarFondo: false
}

var lobo = {
  url: "lobo.png",
  cargaOK: false,
  loboX: aleatorio(0, 420),
  loboY: aleatorio(0, 420)
}

var vacas = {
  url:"vaca.png",
  cargaOK: false,
  vaca1:0,
  vaca2:0,
  vaca3:0,
  vaca4:0,
  vaca5:0
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

vacas.imagen = new Image();
vacas.imagen.src = vacas.url;
vacas.imagen.addEventListener("load", cargarVacas);

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
  vacas.cargaOK = true;
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
    fondo.dibujarFondo = true;
  }
  if(vacas.cargaOK & fondo.dibujarFondo) {
    console.log( "x = " + vacas.vaca1.posicionX + ", y = " + vacas.vaca1.posicionY);
    console.log("dibujando vacas");
    for(var v=0; v < 5; v++) {
      var vaca = {
        url: "vaca.png",
        cargaOK: false,
        posicionX: aleatorio(0,420),
        posicionY: aleatorio(0,420),
      }

      if(v == 0) {
        if (vacas.vaca1 == 0) {
          vacas.vaca1 = vaca;
          console.log("guardando vaca1: " + vacas.vaca1.posicionX + ", " + vacas.vaca1.posicionY);
        }
      }
      else if(v == 1) {
        vacas.vaca2 = vaca;
        console.log("guardando vaca2: " + vacas.vaca2.posicionX + ", " + vacas.vaca2.posicionY);
      }
      else if(v == 2) {
        vacas.vaca3 = vaca;
        console.log("guardando vaca3: " + vacas.vaca3.posicionX + ", " + vacas.vaca3.posicionY);
      }
      else if(v == 3) {
        vacas.vaca4 = vaca;
        console.log("guardando vaca4: " + vacas.vaca4.posicionX + ", " + vacas.vaca4.posicionY);
      }
      else if (v == 4) {
        vacas.vaca5 = vaca;
        console.log("guardando vaca5: " + vacas.vaca5.posicionX + ", " + vacas.vaca5.posicionY);
      }
      papel.drawImage(vacas.imagen, vaca.posicionX, vaca.posicionY);
    }
  }
  if(pollo.cargaOK) {
    for(var v=0; v < 5; v++) {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if(cerdo.cargaOK) {
      for(var v=0; v < 5; v++) {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        papel.drawImage(cerdo.imagen, x, y);
      }
    }
  if(lobo.cargaOK) {
    papel.drawImage(lobo.imagen, lobo.loboX, lobo.loboY);
  }
}

function moverLobo(evento) {
  console.log("vaca1: " + vacas.vaca1.posicionX + ", " + vacas.vaca1.posicionY);
  console.log("vaca2: " + vacas.vaca2.posicionX + ", " + vacas.vaca2.posicionY);
  console.log("vaca3: " + vacas.vaca3.posicionX + ", " + vacas.vaca3.posicionY);
  console.log("vaca4: " + vacas.vaca4.posicionX + ", " + vacas.vaca4.posicionY);
  console.log("vaca5: " + vacas.vaca5.posicionX + ", " + vacas.vaca5.posicionY);

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
    dibujarLoboSeMueve(lobo.imagen, lobo.loboX, lobo.loboY);
  }
  if(evento.keyCode == teclas.DOWN) {
    lobo.loboX = lobo.loboX;
    lobo.loboY = lobo.loboY + movimiento;
    dibujarLoboSeMueve(lobo.imagen, lobo.loboX, lobo.loboY);
  }
  if(evento.keyCode == teclas.LEFT) {
    lobo.loboX = lobo.loboX - movimiento;
    lobo.loboY = lobo.loboY;
    dibujarLoboSeMueve(lobo.imagen, lobo.loboX, lobo.loboY);
  }
  if(evento.keyCode == teclas.RIGHT) {
    lobo.loboX = lobo.loboX + movimiento;
    lobo.loboY = lobo.loboY;
    dibujarLoboSeMueve(lobo.imagen, lobo.loboX, lobo.loboY);
  }
}

function dibujarLoboSeMueve () {
  if(fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vacas.cargaOK) {
      papel.drawImage(vacas.imagen, vacas.vaca1.posicionX, vacas.vaca1.posicionY);
      papel.drawImage(vacas.imagen, vacas.vaca2.posicionX, vacas.vaca2.posicionY);
      papel.drawImage(vacas.imagen, vacas.vaca3.posicionX, vacas.vaca3.posicionY);
      papel.drawImage(vacas.imagen, vacas.vaca4.posicionX, vacas.vaca4.posicionY);
      papel.drawImage(vacas.imagen, vacas.vaca5.posicionX, vacas.vaca5.posicionY);
  }
  if(lobo.cargaOK) {
    papel.drawImage(lobo.imagen, lobo.loboX, lobo.loboY);
  }
}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
  return resultado;
}
