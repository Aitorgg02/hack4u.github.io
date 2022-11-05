window.onload = function () {
    mostrarUsuarioLogueado(); //Lo obtenemos de funciones.js

    //Boton borrar usuario como Admin
    //document.getElementById("borrarUsuario").addEventListener("click", borrarUserAdmin);

    //Boton actualizar usuario como Admin
    //document.getElementById("actualizarUsuario").addEventListener("click", actualizarUserAdmin);
    mostrarUsuariosRegistrados();
    comprobarUsuarioAdmin();
}



function editarUsuario(email) {
    var divCentral = document.getElementById("central");
    var listaUsuarios = JSON.parse(localStorage.getItem("localListaUsuarios"));
    var usuarioEditar = listaUsuarios.find(usuario => usuario.email == email);
    
    if (listaUsuarios != null) {
        var nuevoDiv = document.createElement("div");
        divCentral.appendChild(nuevoDiv);
        nuevoDiv.className = "cajaEdicion";
        nuevoDiv.innerHTML = `
        <form id="formEdicion">
                <table>
                    <tr>
                        <td class="nombreUser">Nombre de usuario</td>
                        <td><input type="text" id="nombreUsuarioForm" value="${usuarioEditar.nombreUsuario}"></td>
                    </tr>
                    <tr>
                        <td class="emailUser">Email</td>
                        <td><input type="text" disabled id="emailForm" value="${usuarioEditar.email}"></td>
                    </tr>
                    <tr>
                        <td class="claveUser">Clave</td>
                        <td><input type="password" id="claveForm" value="${usuarioEditar.clave}"></td>
                    </tr>
                </table>
                <button type="button" id="btn-editEmp">Editar</button>
                <button type="button" id="btn-cerrarEdit">Cerrar</button>
            </form>
        `;

        document.getElementById("btn-editEmp").addEventListener("click", function(){
            usuarioEditar.nombreUsuario = document.getElementById("nombreUsuarioForm").value;
            usuarioEditar.email = document.getElementById("emailForm").value;
            usuarioEditar.clave = document.getElementById("claveForm").value;
            console.log(usuarioEditar);
        
            // usuarioEliminar.nombreUsuario = usuarioEditar.nombreUsuario;
            // listaUsuarios.splice(usuarioEliminar, 1);
            console.log(listaUsuarios)
            localStorage.removeItem("localListaUsuarios");
            localStorage.setItem("localListaUsuarios", JSON.stringify(listaUsuarios));

            document.getElementById("contenidoUsuarios").innerHTML = "";
            mostrarUsuariosRegistrados();
        });

    } else {
        alert("La lista de usuarios esta vacia");
    }
    document.getElementById("btn-cerrarEdit").addEventListener("click", function () {
        nuevoDiv.remove();
    });
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
