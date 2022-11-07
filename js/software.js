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


