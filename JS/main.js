
let botonGuardar = document.querySelector('#guardar');
let inputTitulo = document.querySelector('#titulo');
let selectPrioridad = document.querySelector('#prioridad');
let ulTareas = document.querySelector('#tareas');


botonGuardar.addEventListener('click', agregarTareas);



function pintarTarea(pTareaJson,) {
    let article = document.createElement('article');
    let p = document.createElement('p');
    let hr = document.createElement('hr');
    let button = document.createElement('button');


    let contentbutton = document.createTextNode("Eliminar")
    let contentP = document.createTextNode(`${pTareaJson.titulo}`);
    p.appendChild(contentP);
    button.appendChild(contentbutton)

    switch (pTareaJson.prioridad) {
        case 'Urgente':
            article.classList.add('Urgente')
            break;
        case 'Diaria':
            article.classList.add('Diaria')
            break;
        case 'Mensual':
            article.classList.add('Mensual')
            break;
    }


    article.appendChild(button)
    article.appendChild(p);
    article.appendChild(hr);

    ulTareas.appendChild(article);

    button.addEventListener('click', () => {
        borrarTarea();

        article.parentNode.removeChild(article);

    })
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

    let titulo = inputTitulo.value;
    let prioridad = selectPrioridad.value;

    if (titulo !== "" && prioridad !== "") {

        const newTarea = {
            titulo: titulo,
            prioridad: prioridad,


        }
        Tareas.push(newTarea);
        pintarTarea(newTarea)

    } else {
        alert(' Todos los campos son obligatorios');
    }
}


function borrarTarea() {
    borrar = false;
}






function filtrarPorPrioridad(pPrioridad, pListaTareas) {
    const listaFiltrada = pListaTareas.filter(tarea => tarea.prioridad.toLowerCase() === pPrioridad.toLowerCase())

    return listaFiltrada
}



selectPrioridad.addEventListener('change', buscarPrioridad);

function buscarPrioridad(event) {
    let prioridad = event.target.value;

    if (prioridad !== "") {
        const listaPrioridad = filtrarPorPrioridad(prioridad, Tareas);

        pintarTareas(listaPrioridad);
    } else {
        pintarTareas(Tareas);
    }

}

