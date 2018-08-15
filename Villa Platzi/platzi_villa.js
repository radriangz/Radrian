var SON_CINCO_ANIMALES = 5;

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
  vaca1: 0,
  vaca2: 0,
  vaca3: 0,
  vaca4: 0,
  vaca5: 0
}

var pollos = {
  url: "pollo.png",
  cargaOK: false,
  pollo1: 0,
  pollo2: 0,
  pollo3: 0,
  pollo4: 0,
  pollo5: 0
}

var cerdos = {
  url: "cerdo.png",
  cargaOK: false,
  cerdo1:0,
  cerdo2:0,
  cerdo3:0,
  cerdo4:0,
  cerdo5:0
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

pollos.imagen = new Image();
pollos.imagen.src = pollos.url;
pollos.imagen.addEventListener("load", cargarPollos);

cerdos.imagen = new Image();
cerdos.imagen.src = cerdos.url;
cerdos.imagen.addEventListener("load", cargarCerdos);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vacas.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollos.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdos.cargaOK = true;
  dibujar();
}

function cargarLobo() {
  lobo.cargaOK = true;
  dibujar();
}

function dibujar(event) {
  if(fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
    fondo.dibujarFondo = true;
  }
  if(vacas.cargaOK & fondo.dibujarFondo) {
    for(var v=0; v < SON_CINCO_ANIMALES; v++) {
      var vaca = {
        posicionX: aleatorio(0,420),
        posicionY: aleatorio(0,420),
      }
      if(v == 0) {
        vacas.vaca1 = vaca;
      }
      if(v == 1) {
        vacas.vaca2 = vaca;
      }
      if(v == 2) {
        vacas.vaca3 = vaca;
      }
      if(v == 3) {
        vacas.vaca4 = vaca;
      }
      if (v == 4) {
        vacas.vaca5 = vaca;
      }
      papel.drawImage(vacas.imagen, vaca.posicionX, vaca.posicionY);
    }
  }
  if(pollos.cargaOK & fondo.dibujarFondo) {
      for(var v=0; v < SON_CINCO_ANIMALES; v++) {
        var pollo = {
          posicionX: aleatorio(0,420),
          posicionY: aleatorio(0,420),
        }

        if(v == 0) {
          pollos.pollo1 = pollo;
        }
        if(v == 1) {
          pollos.pollo2 = pollo;
        }
        if(v == 2) {
          pollos.pollo3 = pollo;
        }
        if(v == 3) {
          pollos.pollo4 = pollo;
        }
        if (v == 4) {
          pollos.pollo5 = pollo;
        }
        papel.drawImage(pollos.imagen, pollo.posicionX, pollo.posicionY);
      }
    }
  if(cerdos.cargaOK & fondo.dibujarFondo) {
      for(var v=0; v < SON_CINCO_ANIMALES; v++) {
          var cerdo = {
            posicionX: aleatorio(0,420),
            posicionY: aleatorio(0,420),
          }

        if(v == 0) {
          cerdos.cerdo1 = cerdo;
        }
        if(v == 1) {
            cerdos.cerdo2 = cerdo;
        }
        if(v == 2) {
          cerdos.cerdo3 = cerdo;
        }
        if(v == 3) {
          cerdos.cerdo4 = cerdo;
        }
        if (v == 4) {
          cerdos.cerdo5 = cerdo;
        }
        papel.drawImage(cerdos.imagen, cerdo.posicionX, cerdo.posicionY);
      }
    }
  if(lobo.cargaOK & fondo.dibujarFondo) {
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
      moverVacasEnDireccionAleatoria();
      papel.drawImage(vacas.imagen, vacas.vaca1.posicionX, vacas.vaca1.posicionY);
      papel.drawImage(vacas.imagen, vacas.vaca2.posicionX, vacas.vaca2.posicionY);
      papel.drawImage(vacas.imagen, vacas.vaca3.posicionX, vacas.vaca3.posicionY);
      papel.drawImage(vacas.imagen, vacas.vaca4.posicionX, vacas.vaca4.posicionY);
      papel.drawImage(vacas.imagen, vacas.vaca5.posicionX, vacas.vaca5.posicionY);
  }
  if(pollos.cargaOK) {
      papel.drawImage(pollos.imagen, pollos.pollo1.posicionX, pollos.pollo1.posicionY);
      papel.drawImage(pollos.imagen, pollos.pollo2.posicionX, pollos.pollo2.posicionY);
      papel.drawImage(pollos.imagen, pollos.pollo3.posicionX, pollos.pollo3.posicionY);
      papel.drawImage(pollos.imagen, pollos.pollo4.posicionX, pollos.pollo4.posicionY);
      papel.drawImage(pollos.imagen, pollos.pollo5.posicionX, pollos.pollo5.posicionY);
    }
  if(cerdos.cargaOK) {
    papel.drawImage(cerdos.imagen, cerdos.cerdo1.posicionX, cerdos.cerdo1.posicionY);
    papel.drawImage(cerdos.imagen, cerdos.cerdo2.posicionX, cerdos.cerdo2.posicionY);
    papel.drawImage(cerdos.imagen, cerdos.cerdo3.posicionX, cerdos.cerdo3.posicionY);
    papel.drawImage(cerdos.imagen, cerdos.cerdo4.posicionX, cerdos.cerdo4.posicionY);
    papel.drawImage(cerdos.imagen, cerdos.cerdo5.posicionX, cerdos.cerdo5.posicionY);
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

class Movimiento {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

function generarMovimientoAnimal () {
  var movimiento = new Movimiento();
  movimiento.x = aleatorio(-1,1) * 25;
  movimiento.y = aleatorio(-1,1) * 25;

  return movimiento;
}

function moverVacasEnDireccionAleatoria () {

  for (v = 0; v < SON_CINCO_ANIMALES; v++) {
    var movimiento = generarMovimientoAnimal();

    if (v == 0) {
      vacas.vaca1.posicionX = vacas.vaca1.posicionX + movimiento.x;
      vacas.vaca1.posicionY = vacas.vaca1.posicionY + movimiento.y;
    }
    if (v == 1) {
      vacas.vaca2.posicionX = vacas.vaca2.posicionX + movimiento.x;
      vacas.vaca2.posicionY = vacas.vaca2.posicionX + movimiento.x;
    }
    if (v == 2) {
      vacas.vaca3.posicionX = vacas.vaca3.posicionX + movimiento.x;
      vacas.vaca3.posicionY = vacas.vaca3.posicionX + movimiento.x;
    }
    if (v == 3) {
      vacas.vaca4.posicionX = vacas.vaca4.posicionX + movimiento.x;
      vacas.vaca4.posicionY = vacas.vaca4.posicionX + movimiento.x;
    }
    if (v == 4) {
      vacas.vaca5.posicionX = vacas.vaca5.posicionX + movimiento.x;
      vacas.vaca5.posicionY = vacas.vaca5.posicionX + movimiento.x;
    }
  }
}
