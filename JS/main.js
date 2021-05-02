
let botonGuardar = document.querySelector('#guardar');
let inputTitulo = document.querySelector('#titulo');
let selectPrioridad = document.querySelector('#prioridad');
let ulTareas = document.querySelector('#tareas');
botonGuardar.addEventListener('click', agregarTareas);

function pintarTarea(pTareaJson) {
    let article = document.createElement('article');
    let p = document.createElement('p');
    let hr = document.createElement('hr');



    let contentP = document.createTextNode(`${pTareaJson.titulo}`);

    p.appendChild(contentP);

    article.appendChild(p);
    article.appendChild(hr);

    ulTareas.appendChild(article);
}


function pintarTareas(pListaTareas) {
    ulTareas.innerHTML = "";
    pListaTareas.forEach(tarea => {
        pintarTarea(tarea);
    });
}

pintarTareas(Tareas);




function agregarTareas(event) {

    event.preventDefault();

    Tareas.push(inputTitulo.value, selectPrioridad.value);


    agregarTareas(Tareas);
}



