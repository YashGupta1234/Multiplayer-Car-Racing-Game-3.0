var database;
var PlayerCount = 0;
var GameState = 0;
var form, game, player;
var canvas;
var allplayers;
var distance = 0;
var car1, car2, car3 , car4;
var cars;

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(PlayerCount === 4){
        game.update(1);
    }
    if(GameState === 1){
        clear();
        game.play();
    }
}