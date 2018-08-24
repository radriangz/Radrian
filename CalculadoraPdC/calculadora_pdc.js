
var clickIniciarCalculo = document.getElementById("iniciarCalculo")
clickIniciarCalculo.addEventListener("click", calculaHiperfocal);

var distHiperfocal = document.getElementById("distHiperfocal");
var circuloConfusion = document.getElementById("circuloConfusion");
var distanciaFocal = document.getElementById("distanciasFocales");
var aperturaDiafragma = document.getElementById("aperturaDiaf");

function calculaHiperfocal () {
  var hiperfocal = ((distanciaFocal.value*distanciaFocal.value)/
  (aperturaDiafragma.value*circuloConfusion.value)
  + distanciaFocal.value);

  if (isFinite(hiperfocal) && (hiperfocal > 0)) {
    distHiperfocal.innerHTML = parseFloat(hiperfocal/1000).toFixed(2) + " m";

    limiteHiperfocalCercano.innerHTML =
    parseFloat((hiperfocal/1000)/2).toFixed(1) + " m";

    distHiperfocalImg.innerHTML =
    "</strong>Distancia Hiperfocal: </strong>" + distHiperfocal.innerHTML;

    hiperfocalCercano.innerHTML =
    "Hiperfocal Cercano: " + limiteHiperfocalCercano.innerHTML;
  }
  else {
    alert("Hace falta elegir alguna función");
    distHiperfocal.innerHTML = " ";
    limiteHiperfocalCercano.innerHTML = " ";
  }
}
