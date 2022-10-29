//ARCHIVO PARA ACUMULAR LAS FUNCIONES REPETITIVAS Y USARLAS POSTERIORMENTE EN LOS .js OPORTUNOS

//-----------------------------------

/*DATOS USUARIO LOGUEADO*/
//Mostramos el nombre de usuario y las opciones disponibles en el navbar según tipo de usuario
function mostrarUsuarioLogueado() {
    var usuarioLogueado = localStorage.getItem("usuario");
    //console.log(usuarioLogueado);
    if (usuarioLogueado != null) {
        var nombreUsuarioLogueado = localStorage.getItem("usuario").split(",");
        document.getElementById("nombreUsuarioIndex").innerHTML = nombreUsuarioLogueado[0];
        if (usuarioLogueado.split(",")[0] == 'admin') {
            var texto = `<li><a class="dropdown-item" href="/html/editarUsuario.html">EDITAR Mi Usuario</a></li>
            <li><a class="dropdown-item" href="/html/editarUsuarioAdmin.html">Editar/Borrar Usuario</a></li>
            <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Cerrar Sesión</a></li>`;
            document.getElementById("funcionesUsuario").innerHTML = texto;
        } else {
            var texto = `<li><a class="dropdown-item" href="/html/editarUsuario.html">EDITAR Mi Usuario</a></li>
            <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Cerrar Sesión</a></li>`;
            document.getElementById("funcionesUsuario").innerHTML = texto;
        }
    } else {
        document.getElementById("usuarioRegistrarse").innerHTML = "<a href='/html/registro.html' class='nav-link text-primary'>Regístrese</a>";
    }
}



//Cierra la sesion del usuario actual llevando al login y borrando localStorage del usuario Logueado
function cerrarSesion() {
    localStorage.removeItem("usuario");
    location.href = "/html/login.html";
}


/*FOOTER*/
//Función para mostrar página de Facebook (ventana nueva)
function mostrarFacebook() {
    window.open("https://www.facebook.com/", "_blank");
}
//Función para mostrar página de Google (ventana nueva)
function mostrarGoogle() {
    window.open("https://www.google.es/", "_blank");
}
//Función para mostrar página de Twitter (ventana nueva)
function mostrarTwitter() {
    window.open("https://twitter.com/", "_blank");
}
//Función para mostrar página de Instagram (ventana nueva)
function mostrarInstagram() {
    window.open("https://instagram.com/");
}
//Función para mostrar página del IES Cañaveral (ventana nueva)
function mostrarCanaveral() {
    window.open("https://www.educa2.madrid.org/web/iescanaveral", "_blank");
}





function pintarCursos(lista,idContenidoDiv) {
    lista.forEach(resultado => {
        var texto =
    `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${resultado.fotoCurso}" alt="Card image cap" style="margin-top:2em;">
        <div class="card-body">
          <h5 class="card-title">${resultado.titulo}</h5>
          <hr>
          <p class="card-text" style="text-align:center";>${resultado.autor}</p>
          <p class="card-text" style='visibility:hidden; display:none;'>${resultado.id}</p>
          <p class="card-text">${resultado.lecciones}</p>
          <p class="card-text">${resultado.horas}</p>`;
          if(localStorage.getItem("usuario") != null){
            texto += `<button class="btnInscribirse" type="button" onclick="inscribirse(event)">Inscribirse</button>`;
          }
         
        texto += `</div>
        </div>`;

        document.getElementById(idContenidoDiv).innerHTML += texto;
    });
}















/*INSCRIBIRSE A LOS CURSOS*/
//Funcion que nos permite inscribirnos a las ofertas y comprueba en el sessionStarage que no este escrito 
function inscribirse(event) {

    var usuarioLogueado = localStorage.getItem("usuario").split(",")[0];

    var fotoCurso = event.target.parentNode.parentNode.getElementsByTagName("img")[0].getAttribute("src");
    var tituloCurso = event.target.parentNode.parentNode.getElementsByTagName("h5")[0].innerHTML;
    var autor = event.target.parentNode.parentNode.getElementsByTagName("p")[0].innerHTML;
    var lecciones = event.target.parentNode.parentNode.getElementsByTagName("p")[2].innerHTML;
    var horas = event.target.parentNode.parentNode.getElementsByTagName("p")[3].innerHTML;
    var id = event.target.parentNode.parentNode.getElementsByTagName("p")[1].innerHTML;


    var listaInscripciones = [];
    if (localStorage.getItem("inscripciones")) {
        listaInscripciones = JSON.parse(localStorage.getItem("inscripciones"));
    }

    if (!listaInscripciones.find(curso => curso.id == id && curso.usuario == usuarioLogueado)) { // no existe la inscripcion y no es de ese usuario
        listaInscripciones.push({ usuario: usuarioLogueado, foto: fotoCurso, titulo: tituloCurso, autor: autor,lecciones: lecciones, horas: horas, id: id });
        localStorage.setItem("inscripciones", JSON.stringify(listaInscripciones));
        alert("¡TE HAS INSCRITO AL CURSO!");
        //  exit();
    } else {
        alert("¡YA EXISTE EN TU LISTA DE INSCRIPCIONES!");
    }
}