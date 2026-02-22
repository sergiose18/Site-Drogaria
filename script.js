const imagens = [

"bg1.jpg",
"bg2.jpg",
"bg3.jpg"

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

trocarImagem();

setInterval(trocarImagem, 4000);