let amigos = [];


function agregarAmigo() {
    nuevoAmigo = document.getElementById("amigo").value;
    if (nuevoAmigo !== '')        
        
        {
        if (amigos.includes(nuevoAmigo)){
        return alert("Ya ingresaste ese nombre.");
        } else {
            amigos.push(nuevoAmigo);
            limpiarCaja();
            actualizarLista();
            return nuevoAmigo} 
        }
        else 
        alert("Por favor, inserte un nombre.")
    }
function limpiarCaja() {
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = ''
 } 

 
 function actualizarLista() {
    let lista = document.querySelector("#listaAmigos")
    lista.innerHTML = ""
    for (i in amigos) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amigos[i]
        lista.appendChild(elementoLista);
    }
}