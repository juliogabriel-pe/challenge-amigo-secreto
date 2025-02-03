const listFriend = [];

function adicionarAmigo() {

    let nameFriend = document.getElementById("amigo").value;

    if (!nameFriend) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (listFriend.includes(nameFriend)) {
        alert("Esse amigo já foi adicionado.");
        return;
    }

    listFriend.push(nameFriend);

    document.getElementById("listaAmigos").textContent = listFriend.join(", ");

    document.getElementById("amigo").value = "";

}

function sortearAmigo() {
    if (listFriend.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listFriend.length);
    const amigoSorteado = listFriend[indiceSorteado];

    document.getElementById("resultado").textContent = `🎉 O amigo sorteado é: ${amigoSorteado}!`;
}

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});