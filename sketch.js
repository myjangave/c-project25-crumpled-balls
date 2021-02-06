
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function setup() {
	binImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	ground = new ground();
	crumpledPaper = new Paper(); 

	bin = createSprite(964,520,20,20);
	bin.addImage(binImg);
	bin.scale = 0.45;

	binPart1 = new dustbin(902,505,10,120);
	binPart2 = new dustbin(962,565,130,10);
	binPart3 = new dustbin(1024,505,10,120);  
}


function draw() {
	background("black");
	Engine.update(engine);

  ground.display();
  crumpledPaper.display();
  binPart1.display();
  binPart2.display();
  binPart3.display();

  drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}


