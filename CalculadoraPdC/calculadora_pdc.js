
var clickIniciarCalculo = document.getElementById("iniciarCalculo")
clickIniciarCalculo.addEventListener("click", calculaHiperfocal);

var prueba = document.getElementById("distHiperfocal");
prueba.innerHTML = "";

var CIRCULOCONFUSION = 0.018; //constante exclusiva para canon apsc
var hiperfocal;
var distanciasFocales = document.getElementById("distanciasFocales");
distanciasFocales.addEventListener("change",  function(){
    var distfocal = this.options[distanciasFocales.selectedIndex];
    console.log("distanciasFocales = " + distanciasFocales.value);
  });
//alert("df = " + df.value);

var aperturaDiaf;

function calculaHiperfocal () {



}
