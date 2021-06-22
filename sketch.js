
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;
var angle =0;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;
          
     var ball_options= {
		 isStatic:false,
		 restitution:0.3,
		 friction:0,
		 density:1.2
	 }

	//Create the Bodies Here.
   ball = Matter.Bodies.circle(40,30,20,ball_options);
   World.add(world,ball);

	ground= new Ground(width/2,670,width,20);
	leftSide= new Ground(650,610,20,100,120);
    rightSide = new Ground(500,610,20,100,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown("DOWN_ARROW")){
	push()
	translate(ball.position.x,ball.position.y)
	rotate(angle)
	pop()
	angle = angle+0.1

  }
  
  ground.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20);

drawSprites();
}

 


function upArr(){
	//console.log("up is pressed")
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:50})
  }



