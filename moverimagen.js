const imagenes = [
  
"imgpart1.png",

"imgpart2.png",

"imgpart3.png",

"imagenes de alimentos/no se/imagen 1920 × 1080/imagen 1920 × 1080.png"

];

let indice = 0;

const imagen = document.getElementById("imagen1");

document.getElementById("siguiente").addEventListener("click", () => {

    indice++;

    if(indice >= imagenes.length){
        indice = 0;
    }

    imagen.src = imagenes[indice];

});

document.getElementById("atras").addEventListener("click", () => {

    indice--;

    if(indice < 0){
        indice = imagenes.length - 1;
    }

    imagen.src = imagenes[indice];

});

