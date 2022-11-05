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





