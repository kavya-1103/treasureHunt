var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;

function preload(){
  
}


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

if(playerCount===3){
  game.update(1)
}
if (gameState===1){
clear()
game.play();

}
}