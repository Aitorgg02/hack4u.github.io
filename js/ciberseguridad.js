window.onload = function () {
    cargarCursosCiberseguridad();
    mostrarUsuarioLogueado();

}

//Variable global donde almacenamos la lista de Cursos de Ciberseguridad obtenidas del JSON
var listaCursos = [];

//Funcion para cargar los cursos de Ciberseguridad
function cargarCursosCiberseguridad() {
    $.get("/js/cursos.json", {}, (resultado) => {
        listaCursos = resultado;
        pintarCursos(resultado.ciberseguridad,"contenidoCiberseguridad");
    });
}

// function pintarCursosCiberseguridad(lista) {
//     lista.forEach(resultado => {
//         var texto =
//     `<div class="card" style="width: 18rem;">
//         <img class="card-img-top" src="${resultado.fotoCurso}" alt="Card image cap" style="margin-top:2em;">
//         <div class="card-body">
//           <h5 class="card-title">${resultado.titulo}</h5>
//           <hr>
//           <p class="card-text" style="text-align:center";>${resultado.autor}</p>
//           <p class="card-text" style='visibility:hidden; display:none;'>${resultado.id}</p>
//           <p class="card-text">${resultado.lecciones}</p>
//           <p class="card-text">${resultado.horas}</p>`;
//           if(localStorage.getItem("usuario") != null){
//             texto += `<button class="btnInscribirse" type="button" onclick="inscribirse(event)">Inscribirse</button>`;
//           }
         
//         texto += `</div>
//         </div>`;

//         document.getElementById("contenidoCiberseguridad").innerHTML += texto;
//     });
// }

function ordenarLista() {
    document.getElementById("contenidoCiberseguridad").innerHTML = "";
    var valueSelectOrdenar = document.getElementById("ordenarCursos").value;
    var listaCursosCiberseguridad = [];
    listaCursosCiberseguridad.push(listaCursos["ciberseguridad"]);

    if (valueSelectOrdenar == "nombre") {
        var ordenadaNombre = listaCursosCiberseguridad[0].sort(function ordenar(a, b) {
            listaOriginal = listaCursosCiberseguridad[0].concat();
            if (b.titulo < a.titulo) {
                return 1;
            } else if (b.titulo > a.titulo) {
                return -1;
            } else {
                0;
            }
        });
        pintarCursos(ordenadaNombre,"contenidoTodasCategorias");
    }

    if (valueSelectOrdenar == "horas") {
        var ordenadaHoras = listaCursosCiberseguridad[0].sort(function ordenar(a, b) {
            listaOriginal = listaCursosCiberseguridad[0].concat();
            if (b.horas > a.horas) {
                return 1;
            } else if (b.horas < a.horas) {
                return -1;
            } else {
                0;
            }
        });
        pintarCursos(ordenadaHoras,"contenidoTodasCategorias");
    }

    if (valueSelectOrdenar == "lecciones") {
        var ordenadaLecciones = listaCursosCiberseguridad[0].sort(function ordenar(a, b) {
            listaOriginal = listaCursosCiberseguridad[0].concat();
            if (b.lecciones > a.lecciones) {
                return 1;
            } else if (b.lecciones < a.lecciones) {
                return -1;
            } else {
                0;
            }
        });
        pintarCursos(ordenadaLecciones,"contenidoTodasCategorias");
    }

    if (valueSelectOrdenar == "listaOriginal") {
        listaOriginal = listaCursosCiberseguridad[0].concat();
        listaCursosCiberseguridad = listaOriginal.concat();
        cargarCursosCiberseguridad();
    }
}