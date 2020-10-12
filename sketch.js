const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground,ball;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
function setup() { 
createCanvas(400,400);
engine=Engine.create();
world=engine.world;
ball.x=mouseX;
ball.y=mouseY;

block1=new Tower(330,225);
block2=new Tower(360,225);
block3=new Tower(390,225);
block4=new Tower(420,225);
block5=new Tower(450,225);

block6=new Tower(360,195);
block7=new Tower(390,195);
block8=new Tower(420,195);

block9=new Tower(390,155);
       

ground=Bodies.rectangle(200,390,200,20,ground_options); 
World.add(world,ground);

ball=Bodies.circle(200,100,20,ball_option); 
World.add(world,ball);

console.log(ground);
}
function draw() {
background(0); 
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
ball.display();

Engine.update(engine);
rectMode(CENTER) ; 
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS) ; 
ellipse(ball.position.x,ball.position.y,20,20);
             }