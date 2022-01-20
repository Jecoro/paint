/*Autor: Jesus Cortazar Romera*/

window.onload = function () {
    crear_tabla();

    var colorActivo = "color1";
    var pincel ="false";
    let casillaPincel=document.getElementById("pincel");
    let tablero=document.getElementById("tablero");
    tablero.addEventListener("click",activarPincel);
    
    let paleta = document.getElementById("paleta").getElementsByTagName("tr")[0];
    let colores=[...paleta.getElementsByTagName("td")];
    colores.forEach(color => {
        color.addEventListener("click",()=>{seleccionarColor(color)});
    });


    let pixeles=[...tablero.getElementsByTagName("td")];
    pixeles.forEach(pixel => {
        pixel.addEventListener("mouseover",colorear);
    });


    function crear_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    tabla.id="cuadro";
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < 31; i++) {
      // Crea las flias de la tabla
      var fila = document.createElement("tr");
  
      for (var j = 0; j < 31    ; j++) {
        // Crea un  <td> 
        var celda = document.createElement("td");
        celda.setAttribute("width", "10px");
        celda.setAttribute("height", "10px");
        fila.appendChild(celda);
      }
  
      // agrega la fila al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(fila);
      tblBody.id="tablero";
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
    }

    function seleccionarColor(color){
        colorActivo=color.className;
        let colorAnterior=document.querySelectorAll('.seleccionado');
        colorAnterior[0].classList.remove('seleccionado');
        color.classList.add("seleccionado"); 
    }

    function activarPincel(){
        console.log(pincel);
        pincel=!pincel
        if(pincel){
            
            casillaPincel.innerHTML = "Pincel Activado";
        }else{
            
            casillaPincel.innerHTML = "Pincel Desactivado";
        }
        
    }

    function colorear(){
        
        if(pincel){
            this.className=colorActivo;
        }
    }

};