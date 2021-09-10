var bath,drink,sleep
var gym,brush,move,eat
var bg,backGround
var astronaut
function preload(){
  bg = loadImage("iss.png")
  sleep = loadImage("sleep.png")
  brush = loadAnimation("brush.png")
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  eat = loadAnimation("eat1.png","eat2.png")
  drink = loadAnimation("drink1.png","drink2.png")
  move = loadAnimation("move.png","move1.png")
  bathing = loadAnimation("bath1.png","bath2.png")
}

function setup() {
  createCanvas(400, 400);
  backGround = createSprite(400,400)
  backGround.addImage(bg)
  
  astronaut = createSprite(300,230)
  astronaut.addImage("sleeping",sleep)
  astronaut.scale = 0.1
}

function draw() {
  background(220);
  CreateEdges("Edges")
  astronaut.bounceOff("Edges")
  
  if(keyDown("UP_ARROW")){
   astronaut.addAnimation("brushing",brush) ;
   astronaut.changeAnimation("brushing");
   astronaut.y = 350;
   astronaut.velocityX=0
   astronaut.velocityY=0
  }
  
    if(keyDown("DOWN_ARROW")){
   astronaut.addAnimation("gimming",gym) ;
   astronaut.changeAnimation("bathing");
   astronaut.y = 350;
   astronaut.velocityX=0
   astronaut.velocityY=0
  }
  
  if(keyDown("LEFT_ARROW")){
   astronaut.addAnimation("bathing",bath) ;
   astronaut.changeAnimation("bathing");
   astronaut.y = 350;
   astronaut.velocityX=0
   astronaut.velocityY=0
  }
  
  if(keyDown("RIGHT_ARROW")){
   astronaut.addAnimation("eating",eat) ;
   astronaut.changeAnimation("eating");
   astronaut.y = 350;
   astronaut.velocityX=0
   astronaut.velocityY=0
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.y = 350;
   astronaut.velocityX=2
   astronaut.velocityY=2
  }
  drawSprite()
}