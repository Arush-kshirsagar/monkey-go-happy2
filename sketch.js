var monkey,stoneGroup,banannaGroup,ground,survivalTime;
var monkey_running,backimg,bananaimg,stoneimg;
var gamestate,play,end,background;
function preload(){
  backimg = loadImage("jungle.jpg");
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaimg = loadImage("banana.png");
  stoneimg = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
 
 monkey=createSprite(40,300,30,40);
  monkey.addImage("monkey",monkey_running);
  monkey.scale=0.2;
  ground=createSprite(10,390,900,10);
  ground.velocityX=-4;
  ground.visible=false;
  banannaGroup=newGroup();
 stoneGroup=newGroup();
  background=createSprite(200,400,100000,10);
  background.addImage("back",backimg);
  background.scale=1
  background.x=background.width/2
  background.velocityX=-10;
  ground.x = ground.width/2
  survivalTime=0;
}

function draw() {
  background(255);
  monkey.collide(ground);
  
    if (ground.x < 0){
          ground.x = ground.width/2;
        }
        ground.velocityX=-5;
    
   if (background.x <100){
          background.x = ground.width/2;
        }
        
    
if(keyDown("space")){
      monkey.velocityY = -12 ;
     
    }
    
    monkey.velocityY = monkey.velocityY + 0.8;
    
    if(banannaGroup.isTouching(monkey)){
      banannaGroup.destroyEach()
      survivalTime=survivaltime+2
    }
  survivalTime=Math.ceil(frameCount/frameRate);

  
  switch(score){
    case 10:monkey.scale=0.12;
      break;
       case 20:monkey.scale=0.14;
      break;
       case 30:monkey.scale=0.16;
      break;
       case 40:monkey.scale=0.18;
      break;
  }
 
  if(stoneGroup.isTouching(monkey)){
    monkey.scale=0.2;
  }
    
  
    
    if(monkey.isTouching(stoneGroup)){
      monkey.x=0;
   
  
   
  
  
  
  
    
  
    
    
    
         if(stonreGroup.isTouching(monkey)){
      monkey.scale=0.04;
         }
      stroke("black");
      textSize(20);
      fill("black")
      text("GAME OVER",200,100);
    
       
spawnObstacles();
spawnBananna();
drawSprites();  

}

function spawnObstacles(){
  if(frameCount%300===0){
    var stone=createSprite(300,342,40,40);
    stone.addImage("Stone");
    stone.x=randomNumber(100,200);
    stone.scale=0.2;
    stone.velocityX=-3;
   stone.lifetime=10;
   stoneGroup.add(stone);
  }
}
function spawnBananna(){
  if(World.frameCount%300===0){
     var bananna=createSprite(300,200,40,40);
     bananna.scale=0.1;
     bananna.y=random(120,200);
    bananna.addImage("Banana");
   bananna.velocityX=-3;
   bananna.lifetime=10 ;
   bananna.depth=2;
   banannaGroup.add(bananna);
  }


  

}
    
}
