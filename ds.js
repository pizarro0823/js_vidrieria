function operaciones()
{
  var inpBase=Number(document.getElementById('base').value);
  var inpAltura=Number(document.getElementById('altura').value);
  var base_x = inpBase;
  var altura_x = inpAltura;
  var jamba_x = inpAltura-1.6;
  var traslape_x = inpAltura-3;
  var socalos_x =inpBase/2-1.5;
  var vidrioAltura_x = inpAltura-9.3;
  var vidrioBase_x =inpBase/2-3.45;
  var empaque_x =(inpBase * 4) + (inpAltura * 4)/100


//base
  var x = document.getElementById("myTable").rows[1].cells;
  x[1].innerHTML = base_x.toFixed(2);
//  altura
  var x = document.getElementById("myTable").rows[1].cells;
  x[2].innerHTML = altura_x.toFixed(2);
  // //Cabezal
  var x = document.getElementById("myTable").rows[1].cells;
  x[3].innerHTML = base_x.toFixed(2);
  // //sillar
  var x = document.getElementById("myTable").rows[1].cells;
  x[4].innerHTML = base_x.toFixed(2);
  // //jamba
  var x = document.getElementById("myTable").rows[1].cells;
  x[5].innerHTML = jamba_x.toFixed(2);
  // //translape
  var x = document.getElementById("myTable").rows[1].cells;
  x[6].innerHTML = traslape_x.toFixed(2);
  // //Enganche
  var x = document.getElementById("myTable").rows[1].cells;
  x[7].innerHTML = traslape_x.toFixed(2);
  // Socalos
  var x = document.getElementById("myTable").rows[1].cells;
  x[8].innerHTML = socalos_x.toFixed(1);
  // vidrio
  var x = document.getElementById("myTable").rows[1].cells;
  x[9].innerHTML = vidrioBase_x.toFixed(2);
  // vidrio
  var x = document.getElementById("myTable").rows[1].cells;
  x[10].innerHTML = vidrioAltura_x.toFixed(2);
//empaque
  var x = document.getElementById("myTable").rows[1].cells;
  x[11].innerHTML = empaque_x.toFixed(2);
}

function agregarFila(){
  document.getElementById("myTable").insertRow(-1).innerHTML = '<td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
}

function eliminarFila(){
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  //console.log(rowCount);

  if(rowCount <= 1)
    alert('No se puede eliminar el encabezado');
  else
    table.deleteRow(rowCount -1);
}
