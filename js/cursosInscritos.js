window.onload = function () {
    mostrarCursosInscritos();
    mostrarUsuarioLogueado();
}

function mostrarCursosInscritos() {
    var cursosInscritos = JSON.parse(localStorage.getItem("inscripciones"));
    var usuario = localStorage.getItem("usuario").split(",")[0];


    if (cursosInscritos != null) {
        cursosInscritos.forEach(curso => {
            if (curso.usuario == usuario) {
                var texto =
                    `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${curso.foto}" alt="Card image cap" style="margin-top:2em;">
                    <div class="card-body">
                      <h5 class="card-title">${curso.titulo}</h5>
                      <hr>
                      <p class="card-text" style="text-align:center";>${curso.autor}</p>
                      <p class="card-text" style='visibility:hidden; display:none;'>${curso.id}</p>
                      <p class="card-text">${curso.lecciones}</p>
                      <p class="card-text">${curso.horas}</p>
                      <button type="button" id="btnEliminarOferta" class="btnEliminarOferta" onclick="eliminarCursosInscritos(event)">Eliminar</button>
                    </div>
                </div>`;

                if (texto != undefined) {
                    document.getElementById("tablaCursosInscritos").innerHTML += texto;
                }
            }
        });
    } else {
        document.getElementById("tablaCursosInscritos").innerHTML += "<span class='text-center'>NO ESTÁS INSCRITO A NINGUN CURSO.</span>";
    }
}





//Funcion para eliminar los cursos inscritos
function eliminarCursosInscritos(event) {
    var cursosInscritos = JSON.parse(localStorage.getItem("inscripciones"));
    var id = event.target.parentNode.parentNode.getElementsByTagName("p")[1].innerHTML;
    console.log(id);
    for (i = 0; i < cursosInscritos.length; i++) {
        if (cursosInscritos[i].id == id && cursosInscritos[i].usuario.split(",")[0] == localStorage.getItem("usuario").split(",")[0]) {
            cursosInscritos.splice(i, 1);
        }
    }
    alert("CURSO ELIMINADO");
    localStorage.setItem("inscripciones", JSON.stringify(cursosInscritos));
    location.href = "/html/cursosInscritos.html";
}

//Si no hay cursos inscritos y el array del session queda vacio, borraremos el localStorage
if (JSON.parse(localStorage.getItem("inscripciones")) == "") {
    localStorage.removeItem("inscripciones");
}