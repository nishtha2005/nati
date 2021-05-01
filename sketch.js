const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    box1=new Box(600,300,300,30,PI/2)
    box2=new Box(500,300,300,30,PI/2)
    box3=new Box(400,300,300,30,PI/2)
    box4=new Box(700,300,300,30,PI/2)
    box5=new Box(900,300,300,30,PI/2)
    box6=new Box(800,300,300,30,PI/2)
    box7=new Box(650,250,30,800,PI/2)
    ball1=new Ball(650,50)
    box8= new Box(700,0,300,30,-PI/7)
    box9= new Box(725,0,300,30,PI/7)
  
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ball1.display();
    
 
}