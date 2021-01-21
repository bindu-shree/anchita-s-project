const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var holder,polygon,ground;
var stand1;
var slingshot;
var engine,world;
function setup(){
createCanvas(900,400);

engine= Engine.create();
world=engine.world;

ground=new Ground();
stand1=new Stand(380,300,270,10);

block1 = new Block(300,275,30,40);
console.log(block1);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);

block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);

block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);

block16 = new Block(390,155,30,40);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot=new Slingshot(this.polygon,{x:200,y:200})
}

function draw(){
background("white");
Engine.update(engine);

stroke(15);
fill(89,24,21);
ground.display();

stroke(15);
stand1.display();

slingshot.display();

stroke(15);
fill("dark blue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();

fill("indigo");
stroke(15);
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();

fill("blue");
stroke(15);

block11.display();
block12.display();
block13.display();
fill("turquoise");
stroke(15);

block14.display();
block15.display(); 
fill("cyan");
stroke(15);
block16.display(); 



fill("yellow");
textSize(22);
text("Drag the hexagonal polygon and release it to make the building blocks fall",100,200);

ellipse(polygon.position.x,polygon.position.y,20);

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}