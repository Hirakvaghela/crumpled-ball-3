const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var leftSide, bottom, rightSide;
var paper;
var ground;
var bg;
var dustbinImg;

function preload() {
	
	dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	leftSide = new Dustbin(610, 463, 50, 200);
	bottom = new Dustbin(400, 463, 50, 200);
	rightSide = new Dustbin(505.5, 583, 260, 50);
	ground = new Ground(200, 580, 3000, 50);
	paper = new Paper(65, 540, 75);

	launcher = new Launcher(paper.body,{x:200, y:100});

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(255);
	
	
	leftSide.display();
	bottom.display()
	rightSide.display()
	ground.display();
	paper.display();
	image(dustbinImg,505,430,200,238);
	launcher.display()
}


function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
     launcher.fly();   
}

