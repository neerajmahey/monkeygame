
var monkey , monkey_running;
 var ground,groundImage;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivaltime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  score=0;
  survivaltime=0;
   bananaGroup=new Group();
   obstacleGroup=new Group();
  
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
}


function draw() {
  background(225);
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate());
  text("survialtime"+survivaltime,100,50);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&& monkey.y>100){
  monkey.velocityY=-12;
}

monkey.velocityY=monkey.velocityY+0.8;
  
 monkey.collide(ground);
  food();
  obstacles();
  drawSprites();
}
function food(){
  if(frameCount%80===0){
  var banana=createSprite(120,200,20,20);
  banana.addImage(bananaImage);
  banana.velocityX=-4;
  banana.scale=0.1;
  banana.lifetime=100;
  banana.depth=monkey.depth+1;
  bananaGroup.add(banana);
}
}
function obstacles(){
  if(frameCount%300===0){
  var obstacle=createSprite(420,340,20,20);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.1;
  obstacle.lifetime=100;
  obstacleGroup.add(obstacle);
  }
}
