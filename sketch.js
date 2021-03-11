var maxDrops=100;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrellaObj;
var thunder,thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame;
var rand;
var night_Image;
var thunder_Sound;
var drops = [];



function preload(){
    night_Image = loadImage("images/Night/night.jpg");
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    thunder_Sound = loadSound("Sound/rain_start.mp3");
}

function setup(){
    canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    thunder_Sound.loop();

    for(var k = 0; k < maxDrops; k++){
        drops.push(new createDrops(random(0,400), random(0,400)))
    }
    
    umbrellaObj = new Umbrella(200,450,50);
}

function draw(){
    background(night_Image);
    Engine.update(engine);
    

    for(var k=0; k< maxDrops; k++){ 
        drops[k].display();
        drops[k].update();
    }
    
    umbrellaObj.display();
    

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(50,350),random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
    thunder.scale = (0.2,0.4);
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }


    drawSprites();
    
}   


