window.onload = () => {
    cargarPreguntasFrecuentes();
    mostrarUsuarioLogueado();
    //mostrarUsuarioLogueadoHtml();
}

var listaPreguntas = [];

function cargarPreguntasFrecuentes(){
    $.get("../js/faqs.json",{},(resultado) =>{
        listaPreguntas = resultado;
        pintarPreguntasFrecuentes(resultado.preguntas_frecuentes);
    });
}

function pintarPreguntasFrecuentes(lista){
    lista.forEach(preguntas =>{
        var texto = 
        `<h5 style='color:#F82668; margin-left:4em; margin-right:4em;'>${preguntas.pregunta}</h5> 
         <p style='color:white; margin-left:4em; margin-right:4em;'>${preguntas.respuesta}</p><br>`;

        document.getElementById("contenidoPreguntas").innerHTML += texto;
    });
}