// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para hacer el sorteo.");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar el resultado previo

    let asignaciones = {};
    let disponibles = [...amigos];

    amigos.forEach((amigo) => {
        let posibles = disponibles.filter((p) => p !== amigo);

        if (posibles.length === 0) {
            sortearAmigo(); // Reiniciar si hay un error en la asignación
            return;
        }

        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[amigo] = elegido;
        disponibles = disponibles.filter((p) => p !== elegido);
    });

    for (let [amigo, asignado] of Object.entries(asignaciones)) {
        let li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultado.appendChild(li);
    }
}
