  var PLAY =0;
  var END = 0;
  var gameState = 0;
  var survivalTime = 0;
  var score = 0;
  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score
  var ground,grimg; 


function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
     bananaImage = loadImage("banana.png");
     obstaceImage = loadImage("obstacle.png");

}



function setup() {
  
    createCanvas(500,500);
    monkey = createSprite(100,350,25,25);
    monkey.addAnimation("moving",monkey_running);
    monkey.scale =0.1;
  
    ground = createSprite(100,383,1000,10);
    obstaclesGroup = new Group();
    bananaGroup = new Group();
}


function draw() {
  if(gameState === PLAY){
      background("lightblue");
      monkey.collide(ground);
      stroke("black");
      textSize(20);
      fill("black");
      survivalTime=Math.ceil(frameCount/frameRate());
      text("Survival Time: "+survivalTime,100,50);

      text("Score: "+ score, 400,50); 

      ground.velocityX = -4;

      if (ground.x < 0){
        ground.x= ground.width/2;
        }

      if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -12; 
       }

      monkey.velocityY = monkey.velocityY + 0.8




      food();
      obstacles();
  }
  
  else if (gameState === END) {
    
    
      background("lightblue");
      monkey.collide(ground);

     
       }
       
       
  
      
    
    drawSprites()
}

function obstacles(){
  
  if(frameCount% 300 === 0){
 var obstacles = createSprite(480,362,30,30);
     obstacles.addImage( obstaceImage);
     obstacles.scale = 0.1;
     obstacles.velocityX = -5;
     obstacles.lifetime=95;
     obstaclesGroup.add(obstacles);
   }
}

function food(){
  if(frameCount% 80 === 0){
    var banana = createSprite(490,300,30,30);
    banana.addImage( bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.y = Math.round(random(150,250));
    bananaGroup.add(banana);
  }
}




