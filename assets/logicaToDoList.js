let agregarTO = document.getElementById('agregarTO');
let toDoContenedor = document.getElementById('toDoContenedor');
let inicio = document.getElementById('inicio');

agregarTO.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inicio.value;
    toDoContenedor.appendChild(paragraph);
    inicio.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContenedor.removeChild(paragraph);
    })
})


