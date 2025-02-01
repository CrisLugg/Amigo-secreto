let amigos = [];
let numAmigo = 0;


function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value.trim();
    if (nuevoAmigo !== '')  
        {
        if (amigos.includes(nuevoAmigo)){
        alert("Ya ingresaste ese nombre.");
        } else {
            amigos.push(nuevoAmigo);
            limpiarCaja();
            actualizarLista();
            actualizarContador();} 
        }
        else 
        alert("Por favor, inserte un nombre.")
    }
function limpiarCaja() {
    document.getElementById("amigo").value = ''; }

 
function actualizarLista() {
    let lista = getElementById("listaAmigos");
    lista.innerHTML = "";
    for (i in amigos) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amigos[i]
        // Boton eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = () => eliminarAmigo(index);
        elementoLista.appendChild(botonEliminar);
        lista.appendChild(elementoLista);
    }
 }

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
    actualizarContador();
}
function actualizarContador() {
    document.getElementById("contador").textContent = `Participantes: ${amigos.length}`;
}

function sortearAmigo() {
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Ingresa nombres para sortear.");
        } else {
            let numAmigo = Math.floor(Math.random() * amigos.length);
            let sorteado = amigos[numAmigo];
            let listaResultado = document.getElementById("resultado");
            
            // Mostrar todos los sorteos
            let elementoLista = document.createElement("li");
            elementoLista.textContent = sorteado;
            listaResultado.appendChild(elementoLista);
            
            // Eliminar el nombre sorteado de la lista
            amigos.splice(numAmigo, 1);
            actualizarLista();
            actualizarContador();
        }
    }
}
function reiniciarJuego() {
    amigos = [];
    actualizarLista();
    actualizarContador();
    document.getElementById("resultado").innerHTML = "";
    }

    