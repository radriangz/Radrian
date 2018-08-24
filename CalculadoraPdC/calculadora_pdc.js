
var clickIniciarCalculo = document.getElementById("iniciarCalculo")
clickIniciarCalculo.addEventListener("click", calculaHiperfocal);

var distHiperfocal = document.getElementById("distHiperfocal");
var circuloConfusion = document.getElementById("circuloConfusion");
var distanciaFocal = document.getElementById("distanciasFocales");
var aperturaDiafragma = document.getElementById("aperturaDiaf");

function calculaHiperfocal () {
  var hiperfocal = ((distanciaFocal.value*distanciaFocal.value)/(aperturaDiafragma.value*circuloConfusion.value) + distanciaFocal.value);
  console.log("hiperfocal: " + hiperfocal);
  //console.log("circuloConfusion: " + circuloConfusion.value);

  if (isFinite(hiperfocal) && (hiperfocal > 0)) {
    distHiperfocal.innerHTML = parseFloat(hiperfocal/1000).toFixed(2) + " m";
    limiteHiperfocalCercano.innerHTML =
    parseFloat((hiperfocal/1000)/2).toFixed(1) + " m";
  }
  else {
    alert("Hace falta elegir alguna función");
    distHiperfocal.innerHTML = " ";
    limiteHiperfocalCercano.innerHTML = " ";
  }
}
