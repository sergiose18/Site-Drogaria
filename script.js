const imagens = [

"loja1.jpg",
"loja2.jpg",
"loja3.jpg"

];

let index = 0;

const background = document.querySelector(".background");

function trocarImagem(){

background.style.backgroundImage = `url(${imagens[index]})`;

index++;

if(index >= imagens.length){

index = 0;

}

}

// REMOVA ISTO:

//const imagens = [...]
//trocarImagem()
//setInterval(...)