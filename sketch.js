const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops=300;
var drops=[]
function preload(){
    
}

function setup(){
   createCanvas(700,1200);
   engine=Engine.create();
   world=engine.world;
   man = new Man(150,990);
   ground = new Ground(350,1200,700,30);

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,700),random(0,700)));
    }
}

function draw(){
    background("black");
Engine.update(engine);

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
    }
man.display();
ground.display();

}   

