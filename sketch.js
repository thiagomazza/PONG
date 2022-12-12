let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

// Minha raquete
let xRaquete = 5;
let yRaquete = 150;

// Raquete Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let larguraRaquete = 10;
let alturaRaquete = 90;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// placares
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  criaBolinha();
  movimentaBolinha();
  verificaColisaoBolinha();
  criaRaquete(xRaquete, yRaquete);
  criaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
  incluirPlacar();
  marcaPonto();
}

function criaBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function criaRaquete(x,y){
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
    
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - alturaRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function verificaColisaoBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}

function verificaColisaoRaqueteOponente() {
    if (xBolinha + raio > xRaqueteOponente) {
        velocidadeXBolinha *= -1;
    }
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(19);
  fill(color(255, 140, 0));
  rect(128,8,45,22);
  rect(428,8,45,22);
  fill(255);
  text(meusPontos, 150, 26);
  text(pontosDoOponente, 450,26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
  }
}