//imagens e sons do jogo

let imagemEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
    imagemEstrada = loadImage("material/estrada.png");
    imagemDoAtor = loadImage("material/ator-1.png");
    imagemDoCarro = loadImage("material/carro-1.png");
    imagemDoCarro2 = loadImage("material/carro-2.png");
    imagemDoCarro3 = loadImage("material/carro-3.png");
    imagensCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3,imagemDoCarro, imagemDoCarro2, imagemDoCarro3];
    somDaTrilha = loadSound("material/sons/trilha.mp3");
    somDaColisao = loadSound("material/sons/colidiu.mp3");
    somDoPonto = loadSound("material/sons/pontos.wav");

  }