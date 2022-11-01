window.onload = function () {
    mostrarUsuarioLogueado(); //Lo obtenemos de funciones.js

    //Boton borrar usuario como Admin
    //document.getElementById("borrarUsuario").addEventListener("click", borrarUserAdmin);

    //Boton actualizar usuario como Admin
    //document.getElementById("actualizarUsuario").addEventListener("click", actualizarUserAdmin);

    mostrarUsuariosRegistrados();

    comprobarUsuarioAdmin();
}

//Funcion actualizar a un usuario como Admin
// function actualizarUserAdmin() {
//     var usuario = document.getElementById("nombreUsuarioForm").value;
//     var mail = document.getElementById("emailForm").value;
//     var password = document.getElementById("claveForm").value;

//     var listaAlmacenada = [];
//     var listaUsuarios = [];
//     listaAlmacenada = localStorage.getItem('localListaUsuarios');
//     listaUsuarios = JSON.parse(listaAlmacenada);
//     var nombreUsuarioLogueado = localStorage.getItem("usuario").split(",");

//     if (usuario != "" && mail != "" && password != "") {
//         if (listaUsuarios.findIndex(element =>
//             element.nombreUsuario == usuario
//             && element.email == mail && element.clave == password) == -1) {
//             for (i = 0; i < listaUsuarios.length; i++) {
//                 if (listaUsuarios[i].nombreUsuario == usuario || listaUsuarios[i].email == mail) {
//                     listaUsuarios.splice(i, 1);
//                 }
//             }

//             listaUsuarios.push({ nombreUsuario: usuario, email: mail, clave: password });
//             listaAlmacenada = JSON.stringify(listaUsuarios);
//             localStorage.setItem('localListaUsuarios', listaAlmacenada);
//             alert("¡USUARIO ACTUALIZADO!");
//             document.getElementById("formUsuario").reset();
//         } else {
//             alert("Ese NOMBRE USUARIO/EMAIL ya existen, no puede actualizar el usuario");
//         }
//     } else {
//         alert("Debe completar TODOS los campos para actualizar el usuario");
//     }

//     location.href = 'editarUsuarioAdmin.html';

// }


//FALTA ACTUALIZAR EL LOCALSTORAGE Y LIMPIAR CON EL NUEVO USUARIO
function editarUsuario(email){
    var listaUsuarios = JSON.parse(localStorage.getItem("localListaUsuarios"));
    var form = document.getElementById("formUsuario");

    if (listaUsuarios != null) {
        var usuarioEditar = listaUsuarios.find(usuario => usuario.email == email);
        form.style.visibility = "visible";
        document.getElementById("nombreUsuarioForm").value = usuarioEditar.nombreUsuario;
        document.getElementById("emailForm").value = usuarioEditar.email;
        document.getElementById("claveForm").value = usuarioEditar.clave;
        console.log(usuarioEditar);
        console.log(listaUsuarios);


    } else {
        alert("La lista de usuarios esta vacia");
    }
}


function eliminarUsuario(email) {
    var listaUsuarios = JSON.parse(localStorage.getItem("localListaUsuarios"));
    if (listaUsuarios != null) {
        var usuarioEliminar = listaUsuarios.findIndex(usuario => { usuario.email == email });
        listaUsuarios.splice(usuarioEliminar, 1);
        localStorage.removeItem("localListaUsuarios");
        localStorage.setItem("localListaUsuarios", JSON.stringify(listaUsuarios));

    } else {
        alert("La lista de usuarios esta vacia");
    }
    document.getElementById("contenidoUsuarios").innerHTML = "";
    mostrarUsuariosRegistrados();
}

function mostrarUsuariosRegistrados() {
    var usuarios = localStorage.getItem("localListaUsuarios");
    var listaUsuarios = JSON.parse(usuarios); //Convertido a un array
    console.log(listaUsuarios);

    var divContenidoUsuarios = document.getElementById("contenidoUsuarios");
    if (listaUsuarios != null) {
        listaUsuarios.forEach(usuarios => {
            if (usuarios.email == "admin@gmail.com") {
                var texto = `<tr>
            <td>${usuarios.nombreUsuario}</td>
            <td>${usuarios.email}</td>
            <td>${usuarios.clave}</td>
            <td>NO SE PUEDE ELIMINAR</td>
            <td><button type='button' onclick='editarUsuario("${usuarios.email}")'><img id="editarUsuario" class="opcionesEmp" src="/images/editar.png" width='50px' height='50px'></img></button></td>
            </tr>`;
            } else {
                var texto = `<tr>
            <td>${usuarios.nombreUsuario}</td>
            <td>${usuarios.email}</td>
            <td>${usuarios.clave}</td>
            <td><button type='button' onclick='eliminarUsuario("${usuarios.email}")'><img id="eliminarUsuario" class="opcionesEmp" src="/images/eliminar.png" width='50px' height='50px'></img></button></td>
            <td><button type='button' onclick='editarUsuario("${usuarios.email}")'><img id="editarUsuario" class="opcionesEmp" src="/images/editar.png" width='50px' height='50px'></img></button></td>
            </tr>`;
            }

            divContenidoUsuarios.innerHTML += texto;
        });
    }

}


//Si no eres admin te manda al index
function comprobarUsuarioAdmin() {
    var usuarioLogueado = localStorage.getItem("usuario");
    //console.log(usuarioLogueado);
    if (usuarioLogueado != null) {
        var nombreUsuarioLogueado = localStorage.getItem("usuario").split(",");
        //document.getElementById("nombreUsuarioIndex").innerHTML = nombreUsuarioLogueado[0];

        if (nombreUsuarioLogueado[1] != "admin@gmail.com") {
            location.href = '/index.html';
        }
    } else {
        location.href = "/index.html";
    }
    console.log(usuarioLogueado);
}
