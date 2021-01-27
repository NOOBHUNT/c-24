const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground;
var pig;
var log,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,390,1200,10);
    box1 = new Box(800,370,80,80);
    box2=new Box(1000,370,80,80);
   
    pig=new Pig(900,370);
   
    log =new Log(900,350,300,PI/2);

    box3 = new Box(800,300,80,80);
    box4=new Box(1000,300,80,80);
   
    pig2=new Pig(900,300);

    log2 =new Log(900,250,300,PI/2);

    bird = new Bird(200,400);

    box4=new Box(900,200,80,80);
   
    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
   pig.display();
  log.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  bird.display();
 
 
}