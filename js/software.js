window.onload = function () {
    cargarCursosSoftware();
    mostrarUsuarioLogueado();

}

//Variable global donde almacenamos la lista de Cursos de Software obtenidas del JSON
var listaCursos = [];

//Funcion para cargar los cursos de Ciberseguridad
function cargarCursosSoftware() {
    $.get("/js/cursos.json", {}, (resultado) => {
        listaCursos = resultado;
        pintarCursos(resultado.software,"contenidoSoftware");
    });
}

// function pintarCursosSoftware(lista) {
//     lista.forEach(resultado => {
//         var texto =
//             `<div class="card" style="width: 18rem;">
//             <img class="card-img-top" src="${resultado.fotoCurso}" alt="Card image cap" style="margin-top:2em;">
//             <div class="card-body">
//               <h5 class="card-title">${resultado.titulo}</h5>
//               <hr>
//               <p class="card-text" style="text-align:center";>${resultado.autor}</p>
//               <p class="card-text" style='visibility:hidden; display:none;'>${resultado.id}</p>
//               <p class="card-text">${resultado.lecciones}</p>
//               <p class="card-text">${resultado.horas}</p>
//              <button class="btnInscribirse" type="button" onclick="inscribirse(event)">Inscribirse</button>
//             </div>
//         </div>`;

//         document.getElementById("contenidoSoftware").innerHTML += texto;
//     });
// }

function ordenarLista() {
    document.getElementById("contenidoSoftware").innerHTML = "";
    var valueSelectOrdenar = document.getElementById("ordenarCursos").value;
    var listaCursosSoftware = [];
    listaCursosSoftware.push(listaCursos["software"]);

    if (valueSelectOrdenar == "nombre") {
        var ordenadaNombre = listaCursosSoftware[0].sort(function ordenar(a, b) {
            listaOriginal = listaCursosSoftware[0].concat();
            if (b.titulo < a.titulo) {
                return 1;
            } else if (b.titulo > a.titulo) {
                return -1;
            } else {
                0;
            }
        });
        pintarCursos(ordenadaNombre,"contenidoSoftware");
    }

    if (valueSelectOrdenar == "horas") {
        var ordenadaHoras = listaCursosSoftware[0].sort(function ordenar(a, b) {
            listaOriginal = listaCursosSoftware[0].concat();
            if (b.horas > a.horas) {
                return 1;
            } else if (b.horas < a.horas) {
                return -1;
            } else {
                0;
            }
        });
        pintarCursos(ordenadaHoras,"contenidoSoftware");
    }

    if (valueSelectOrdenar == "lecciones") {
        var ordenadaLecciones = listaCursosSoftware[0].sort(function ordenar(a, b) {
            listaOriginal = listaCursosSoftware[0].concat();
            if (b.lecciones > a.lecciones) {
                return 1;
            } else if (b.lecciones < a.lecciones) {
                return -1;
            } else {
                0;
            }
        });
        pintarCursos(ordenadaLecciones,"contenidoSoftware");
    }

    if (valueSelectOrdenar == "listaOriginal") {
        listaOriginal = listaCursosSoftware[0].concat();
        listaCursosSoftware = listaOriginal.concat();
        cargarCursosSoftware();
    }
}