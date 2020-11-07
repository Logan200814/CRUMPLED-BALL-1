
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(600, 950, width, 20, {isStatic:true});
	World.add(world, ground);

	paper1 = new Paper(100,100,30);

	bin1 = new Bin(1010,940,330,10);
	bin2 = new Bin(1175,775,10,337);
	bin3 = new Bin(845,775,10,337);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(ground.position.x,ground.position.y,width,20)
  
  paper1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  
}

function keyPressed(){
	if (keyCode === UP_ARROW && paper1.body.position.y > 910 && paper1.body.position.x < 910){

		Body.applyForce(paper1.body,paper1.body.position,{x:33,y:-85})

	}
}