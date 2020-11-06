
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
function setup(){
    createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    red1 = new Dustbin(610,height-45,200,20);
    red2 = new Dustbin(710,410,20,100);
    
    ground= new Ground(width/2, height-35, width,10)
    
    red3= new Dustbin(510,410,20,100);
    paper = new Paper(100,200,30)
	
	Engine.run(engine);
  
}

function draw(){
	rectMode(CENTER)
    background("black");
    Engine.update(engine);
    red1.display();
    red2.display();
    red3.display()
    paper.display();
	ground.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	 }
   }
