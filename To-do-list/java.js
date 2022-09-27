let input = document.querySelector('.input');
let botonAgregar = document.querySelector('.boton-agregar');
let container = document.querySelector('.container')

class Item{
constructor(nuevaTarea){
    this.crearDiv(nuevaTarea)
}

crearDiv(nuevaTarea){
let inputItem = document.createElement('input');
inputItem.setAttribute('type', 'text');
inputItem.setAttribute('disabled', 'true');
//inputItem.disabled = 'true';
//inputItem.type = 'text';
inputItem.classList.add('item-input');
inputItem.value = nuevaTarea;

let divItem = document.createElement('div');
divItem.classList.add('item');

let botonEditar = document.createElement('button');
botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
botonEditar.classList.add('boton-editar');

let botonRemover = document.createElement('button');
botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
botonRemover.classList.add('boton-remover');

divItem.appendChild(inputItem);
divItem.appendChild(botonEditar);
divItem.appendChild(botonRemover);

container.appendChild(divItem);


botonEditar.addEventListener('click', function(){
    inputItem.disabled = !inputItem.disabled

    if(inputItem.disabled){
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
    }  else {
        botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
    }
})

botonRemover.addEventListener('click', function(){
    inputItem.remove();
    botonEditar.remove();
    botonRemover.remove();
})
//Fin del mètodo CrearDiv
}
//Fin de la clase Item
}

function validarInput(){
    if(input.value !== ""){
    new Item(input.value);
    input.value = '';
} else (alert("Escribe una tarea antes de agregar"))}

botonAgregar.addEventListener('click', function(){
    validarInput()
})

