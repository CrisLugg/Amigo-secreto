let amigos = [];
let numAmigo = 0;

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
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

function sortearAmigo() {
        let numAmigo = Math.floor(Math.random() * amigos.length)+1;
        let sorteado = amigos[numAmigo];
        let listaResultado = document.querySelector("#resultado")
        let elementoLista2 = document.createElement("li2");
        elementoLista2.textContent = sorteado
        listaResultado.appendChild(elementoLista2)
    }