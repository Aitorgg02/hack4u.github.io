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

