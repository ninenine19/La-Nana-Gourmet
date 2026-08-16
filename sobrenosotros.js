function abrirTapa() {

    document.querySelector("tapa")
        .classList.add("abierta");

}
setTimeout(() => {

    document.querySelector(".tapa")
        .classList.add("abierta");

}, 2000);