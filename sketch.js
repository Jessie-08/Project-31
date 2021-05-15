var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function preload(){
  bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1350, 640);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=160; k = k + 160) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=240; k = k + 240) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=320; k = k + 320) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=400; k = k + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=480; k = k + 480) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=560; k = k + 560) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=640; k = k + 640) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=720; k = k + 720) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=800; k = k + 800) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=880; k = k + 880) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=960; k = k + 960) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=1040; k = k + 1040) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=1120; k = k + 1120) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=1200; k = k + 1200) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=1280; k = k + 1280) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var k = 0; k <=1350; k = k + 1350) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }
  //create 1st row of plinko objects
  for (var j = 75; j <=width-0; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-20; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
 
}
 


function draw() {
  background(bg);

//display the plinkos 
for (var i = 0; i < plinkos.length; i++) {
  plinkos[i].display();   
}
 
//display the divisions
for (var k = 0; k < divisions.length; k++) {
  divisions[k].display();
}

//display the paricles 
if(frameCount%90===0){
  particles.push(new Particles(random(width/4-60 , width/1+10, width/3-20 , width/2+50, width/5+30, width/6-40, width/1+50, width/5-40), 10,10 ))
}
for (var p = 3; p < particles.length; p++) {
particles[p].display();
}
  textSize(20)
  fill("black");
  text("500",25,620)
  text("500",1300,620)
  text("450",100,620)
  text("450",1225,620)
  text("400",180,620)
  text("400",1140,620)
  text("350",270,620)
  text("350",1065,620)
  text("300",340,620)
  text("300",975,620)
  text("250",420,620)
  text("250",910,620)
  text("200",500,620)
  text("200",825,620)
  text("150",580,620)
  text("150",740,620)
  text("100",660,620)

  Engine.update(engine);
  ground.display();
  
  
  
}