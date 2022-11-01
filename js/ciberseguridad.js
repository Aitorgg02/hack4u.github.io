window.onload = function () {
    cargarCursosCiberseguridad();
    mostrarUsuarioLogueado();

    // document.getElementById("filtrar").addEventListener("click",filtrar());
}

//Variable global donde almacenamos la lista de Cursos de Ciberseguridad obtenidas del JSON
var listaCursos = [];

//Funcion para cargar los cursos de Ciberseguridad
function cargarCursosCiberseguridad() {
    $.get("/js/cursos.json", {}, (resultado) => {
        listaCursos = resultado;
        pintarCursos(resultado.ciberseguridad, "contenidoCiberseguridad");
    });
}


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
        pintarCursos(ordenadaNombre, "contenidoCiberseguridad");
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
        pintarCursos(ordenadaHoras, "contenidoCiberseguridad");
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
        pintarCursos(ordenadaLecciones, "contenidoCiberseguridad");
    }

    if (valueSelectOrdenar == "listaOriginal") {
        listaOriginal = listaCursosCiberseguridad[0].concat();
        listaCursosCiberseguridad = listaOriginal.concat();
        cargarCursosCiberseguridad();
    }
}



