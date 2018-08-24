
var clickIniciarCalculo = document.getElementById("iniciarCalculo")
clickIniciarCalculo.addEventListener("click", calculaHiperfocal);

var distHiperfocal = document.getElementById("distHiperfocal");
var hiperfocal;
var cC;
var distFocal;
var fstop;
var circuloConfusion = document.getElementById("circuloConfusion");
var distanciasFocales = document.getElementById("distanciasFocales");
var aperturaDiaf = document.getElementById("aperturaDiaf");


//Las funciones del addEventListener se pueden optimizar?
circuloConfusion.addEventListener("change", function () {
      cC = parseFloat(circuloConfusion.value);
      console.log(cC);
    });
distanciasFocales.addEventListener("change", function () {
      distFocal = parseInt(distanciasFocales.value);
      console.log(distFocal);
    });
aperturaDiaf.addEventListener("change", function () {
      if (aperturaDiaf.value != 0) {
      fstop = parseFloat(aperturaDiaf.value);
      console.log(aperturaDiaf.value);
      }
      else {
        alert("No deben quedar espacios sin seleccionar");
      }
    });


function calculaHiperfocal () {
  var hiperfocal = ((distFocal*distFocal)/(fstop*cC) + distFocal);
  console.log(hiperfocal);

  if (hiperfocal != NaN) {
    distHiperfocal.innerHTML = parseFloat(hiperfocal/1000).toFixed(2) + " m";
    limiteHiperfocalCercano.innerHTML = parseFloat((hiperfocal/1000)/2).toFixed(1) + " m";
  }
  else {
  }
}
