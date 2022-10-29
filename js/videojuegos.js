window.onload = function(){
    cargarCursosVideojuegos();
    mostrarUsuarioLogueado();
    
}

//Variable global donde almacenamos la lista de Cursos de Videojuegos obtenidas del JSON
var listaCursos = [];

//Funcion para cargar los cursos de Ciberseguridad
function cargarCursosVideojuegos(){
    $.get("/js/cursos.json",{},(resultado)=>{
        listaCursos = resultado;
        pintarCursos(resultado.videojuegos,"contenidoVideojuegos");
    });
}

// function pintarCursosVideojuegos(lista){
//     lista.forEach(resultado => {
//         var texto =  
//         `<div class="card" style="width: 18rem;">
//         <img class="card-img-top" src="${resultado.fotoCurso}" alt="Card image cap" style="margin-top:2em;">
//         <div class="card-body">
//           <h5 class="card-title">${resultado.titulo}</h5>
//           <hr>
//           <p class="card-text" style="text-align:center";>${resultado.autor}</p>
//           <p class="card-text" style='visibility:hidden; display:none;'>${resultado.id}</p>
//           <p class="card-text">${resultado.lecciones}</p>
//           <p class="card-text">${resultado.horas}</p>
//          <button class="btnInscribirse" type="button" onclick="inscribirse(event)">Inscribirse</button>
//         </div>
//     </div>`;

//        document.getElementById("contenidoVideojuegos").innerHTML+= texto; 
//     });
// }

function ordenarLista(){
    document.getElementById("contenidoVideojuegos").innerHTML = "";
    var valueSelectOrdenar = document.getElementById("ordenarCursos").value;
    var listaCursosVideojuegos = [];
    listaCursosVideojuegos.push(listaCursos["videojuegos"]);

    if(valueSelectOrdenar == "nombre"){
        var ordenadaNombre = listaCursosVideojuegos[0].sort(function ordenar(a, b) { 
            listaOriginal = listaCursosVideojuegos[0].concat();
            if (b.titulo < a.titulo) {
                return 1;
            } else if (b.titulo > a.titulo) {
                return -1;
            } else {
                0;
            }               
          });
          pintarCursos(ordenadaNombre,"contenidoVideojuegos");
    }

    if(valueSelectOrdenar == "horas"){
        var ordenadaHoras = listaCursosVideojuegos[0].sort(function ordenar(a, b) { 
            listaOriginal = listaCursosVideojuegos[0].concat();
            if (b.horas > a.horas) {
                return 1;
            } else if (b.horas < a.horas) {
                return -1;
            } else {
                0;
            }                
          });
          pintarCursos(ordenadaHoras,"contenidoVideojuegos");
    }

    if(valueSelectOrdenar == "lecciones"){
        var ordenadaLecciones = listaCursosVideojuegos[0].sort(function ordenar(a, b) { 
            listaOriginal = listaCursosVideojuegos[0].concat();
            if (b.lecciones > a.lecciones) {
                return 1;
            } else if (b.lecciones < a.lecciones) {
                return -1;
            } else {
                0;
            }              
          });
          pintarCursos(ordenadaLecciones,"contenidoVideojuegos");
    }

    if(valueSelectOrdenar == "listaOriginal"){
        listaOriginal = listaCursosVideojuegos[0].concat();
        listaCursosVideojuegos = listaOriginal.concat();
        cargarCursosVideojuegos();
    }
}