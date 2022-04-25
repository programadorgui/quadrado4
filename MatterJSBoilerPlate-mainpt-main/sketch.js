
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var retangulo;
var triangulo;
var quadrado;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
  

  var retangulo_options = {
    isStatic : true


  }

  var quadrado_options = {

    restitution :0.25,
    isStatic : true
  }
  
  var triangulo_option = {

   restitution : 0.46,
   frictionAir : 0.09


  }


  retangulo = Bodies.rectangle(200,390,400,20,retangulo_options);
  World.add(world,retangulo);

 quadrado = Bodies.rectangle(240,300,50,50,quadrado_options);
  World.add(world,quadrado);

  triangulo = Bodies.rectangle(210,225,100,20);
  World.add(world,triangulo);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rect(retangulo.position.x,retangulo.position.y,400,20);
 rect(quadrado.position.x,quadrado.position.y,50,50);
 rect(triangulo.position.x,triangulo.position.y,100,20)
}

  drawSprites();
 



