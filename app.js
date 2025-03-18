let participantes = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    participantes.push(nome);
    atualizarLista();
    inputNome.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    participantes.forEach((nome) => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (participantes.length === 0) {
        alert("Por favor, insira um nome válido.");
        return;
    }
    let sorteado = participantes[Math.floor(Math.random() * participantes.length)];
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    let item = document.createElement("li");
    item.textContent = `Seu amigo secreto é: ${sorteado}`;
    resultadoLista.appendChild(item);
    participantes = [];
    document.getElementById("listaAmigos").innerHTML = "";
}



