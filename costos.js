var cabezal = parseInt("30500") ;
var sillar = parseInt("35300") ;
var jamba =parseInt("29000") ;
var traslape =parseInt("20000") ;
var enganche =parseInt("26000") ;
var socalos =parseInt("29900") ;
var rodamientos = parseInt("800") ;
var guias = parseInt("200");
var empaque =parseInt("0") ;
var inpbase = Number(document.getElementById('inpbase').value);
var inpaltura = Number(document.getElementById('inpaltura').value);


function calculuar() {
  document.getElementById('spanCabezal').innerHTML = cabezal.toFixed(0);
  document.getElementById('spanSillar').innerHTML = sillar.toFixed(0);
  document.getElementById('spanJamba').innerHTML = jamba.toFixed(0);
  document.getElementById('spanEnganche').innerHTML = enganche.toFixed(0);
  document.getElementById('spanTraslape').innerHTML = traslape.toFixed(0);
  document.getElementById('spanSocalos').innerHTML = socalos.toFixed(0);
  document.getElementById('spanRodamientos').innerHTML = rodamientos.toFixed(0);
  document.getElementById('spanGuias').innerHTML = guias.toFixed(0);
  document.getElementById('spanEmpaque').innerHTML = empaque.toFixed(0);
}

function costos() {
  //#region 
  //precios por medidas
  var precio_cabezal = cabezal / 6 * inpbase;
  var precio_sillar = sillar / 6 * inpbase;
  var precio_jamba = jamba / 6 * inpaltura * 2;
  var precio_enganche = enganche / 6 * inpaltura * 2;
  var precio_traslape = traslape / 6 * inpaltura * 2;
  var precio_socalos = socalos / 6 * inpbase * 4;
  var precio_rodamientos = rodamientos * 2;
  var precio_guias = guias * 4;
  var precio_empaque = empaque * inpbase * inpaltura / 2;

  var costo_por_medidas = precio_cabezal + precio_sillar + precio_jamba + precio_enganche + precio_traslape + precio_socalos+precio_rodamientos+precio_guias+precio_empaque;

  var porcentaje_de_ganacia = precio_cabezal + precio_sillar + precio_jamba + precio_enganche + precio_traslape + precio_socalos+precio_rodamientos+precio_guias+precio_empaque * 60 / 100;

  var total_venta =costo_por_medidas+porcentaje_de_ganacia;

  var x = document.getElementById("mytabla1").rows[1].cells;
  x[2].innerHTML = Math.trunc(precio_cabezal).toFixed(0);

  var x = document.getElementById("mytabla1").rows[2].cells;
  x[2].innerHTML = precio_sillar.toFixed(0);

  var x = document.getElementById("mytabla1").rows[3].cells;
  x[2].innerHTML = precio_jamba.toFixed(0);

  var x = document.getElementById("mytabla1").rows[4].cells;
  x[2].innerHTML = precio_enganche.toFixed(0);

  var x = document.getElementById("mytabla1").rows[5].cells;
  x[2].innerHTML = precio_traslape.toFixed(0);

  var x = document.getElementById("mytabla1").rows[6].cells;
  x[2].innerHTML = precio_socalos.toFixed(0);

  var x = document.getElementById("mytabla1").rows[7].cells;
  x[2].innerHTML = precio_rodamientos.toFixed(0);

  var x = document.getElementById("mytabla1").rows[8].cells;
  x[2].innerHTML = precio_guias.toFixed(0);

  var x = document.getElementById("mytabla1").rows[9].cells;
  x[2].innerHTML = precio_empaque.toFixed(0);

  var x = document.getElementById("mytabla1").rows[11].cells;
  x[1].innerHTML = "$ " + costo_por_medidas.toFixed(0);

  var x = document.getElementById("mytabla1").rows[12].cells;
  x[1].innerHTML = "$ " + porcentaje_de_ganacia.toFixed(0);

  var x = document.getElementById("mytabla1").rows[13].cells;
  x[1].innerHTML = "$ " + total_venta.toFixed(0);

  //#region despiese

  var pcabezal = inpbase;
  var psillar = inpbase;
  var pjamba = inpaltura * 2;
  var penganche = inpaltura * 2;
  var ptraslape = inpaltura * 2;
  var psocalos = inpbase * 4;
  var prodamientos = 2;
  var pguias = 4;
  var pempaque = inpbase * inpaltura / 2;

  var x = document.getElementById("mytabla1").rows[1].cells;
  x[1].innerHTML = pcabezal.toFixed(1);
  var x = document.getElementById("mytabla1").rows[2].cells;
  x[1].innerHTML = psillar.toFixed(1);
  var x = document.getElementById("mytabla1").rows[3].cells;
  x[1].innerHTML = pjamba.toFixed(1);
  var x = document.getElementById("mytabla1").rows[4].cells;
  x[1].innerHTML = penganche.toFixed(1);
  var x = document.getElementById("mytabla1").rows[5].cells;
  x[1].innerHTML = ptraslape.toFixed(1);
  var x = document.getElementById("mytabla1").rows[6].cells;
  x[1].innerHTML = psocalos.toFixed(1);
  var x = document.getElementById("mytabla1").rows[7].cells;
  x[1].innerHTML = prodamientos.toFixed(0);
  var x = document.getElementById("mytabla1").rows[8].cells;
  x[1].innerHTML = pguias.toFixed(0);
  var x = document.getElementById("mytabla1").rows[9].cells;
  x[1].innerHTML = pempaque.toFixed(1);


}





