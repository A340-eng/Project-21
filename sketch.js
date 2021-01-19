var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(80,550,100, 20);
    surface2 = createSprite(200,550,100, 20);
    surface3 = createSprite(320, 550, 100, 20);
    surface4 = createSprite(440, 550, 100, 20);
 
    box = createSprite(random(80,440), 50, 50, 50);
    box.shapeColor = "white";
    box.velocityY = 3;
}

function draw() {
    background("black");

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        surface1.shapeColor = "blue";
        box.shapeColor = "blue";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        surface2.shapeColor = "orange";
        box.shapeColor = "orange";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        surface3.shapeColor = "red";
        box.shapeColor = "red";
    }

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        surface1.shapeColor = "green";
        box.shapeColor = "green";
    }

    drawSprites();
}
