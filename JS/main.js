
let botonGuardar = document.querySelector('#guardar');
let inputTitulo = document.querySelector('#titulo');
let selectPrioridad = document.querySelector('#prioridad');
let ulTareas = document.querySelector('#tareas');

botonGuardar.addEventListener('click', guardarDatos);

function guardarDatos(event) {
    event.preventDefault();

    const tarea = new Tarea(inputTitulo.value, selectPrioridad.value)
    listaTareas.push(tarea);

    pintarTareas(listaTareas);
}

function pintarTareas(pLista) {
    ulTareas.innerHTML = "";
    pLista.forEach(tarea => tarea.pintarTarea(ulTareas))
}

borrar() {
    this.titulo = "";
    this.fecha = 0;
    this.prioridad = "";
    this.completado = true;
    li.parentNode.removeChild(li);
}


pintarTarea(pSeccion) {
    let li = document.createElement('li');
    let textoLi = document.createTextNode(this.titulo);;
    let button = document.createElement('button');
    button.innerText = 'Borrar';

    li.appendChild(button);
    li.appendChild(textoLi);

    li.appendChild(textoLi);
    pSeccion.appendChild(li);



}