var obstacleGroup;
var survivalTime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  obstacleGroup=new Group();
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,350); 

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.veocityX=-4;
  ground.x=ground.width/2;
  
  console.log(ground.x);
}


function draw() {
background("white");
  
  if(keyDown("space")){
   monkey.velocityY=-8;
  }
  monkey.velocityY=monkey.velocityY+0.3; 
monkey.collide(ground);
  
 stroke("white");
 textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  food();
  obstacles();
  drawSprites();
}

function food(){
 if(frameCount%80===0){
  banana=createSprite(200,200);
  banana.addImage(bananaImage);
  banana.scale=0.1;
   banana.velocityX=-4;
   banana.lifetime=400;
   banana.y=Math.round(random(140,200));
 } 
}

function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(120,325);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=300;
    obstacle.scale=0.1;
   // obstacle.velocityX=-2;
    
  }
  
}



