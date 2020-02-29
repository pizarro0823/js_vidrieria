  function operaciones()
  {
    var inpBase=Number(document.getElementById('base').value.replace(",","."));
    var inpAltura=Number(document.getElementById('altura').value.replace(",","."));
    var base_x = inpBase;
    var altura_x = inpAltura;
    var jamba_x = inpAltura-1.6;
    var traslape_x = inpAltura-3;
    var socalos_x =inpBase/2-1.5;
    var vidrioAltura_x = inpAltura-9.3;
    var vidrioBase_x =inpBase/2-3.45;
    var empaque_x =(inpBase * 4) + (inpAltura * 4)/100
   var nvtn =document.getElementById("n_v".value);


  //baseeeeeeeeeeeeee
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
    if (document.getElementById('btn_agregarFla').onclick){
      alert("desea agregar nueva ventana")
      var i =1;
      document.getElementById('base').value="";
      document.getElementById('altura').value="";
      document.getElementById("myTable").insertRow(1).innerHTML = '<td></td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>';
      operaciones();
    }
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

  var exportTableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,'
      , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
      , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
      , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
    return function(table, name) {
      if (!table.nodeType) table = document.getElementById(table)
      var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
      window.location.href = uri + base64(format(template, ctx))
    }
  })()

