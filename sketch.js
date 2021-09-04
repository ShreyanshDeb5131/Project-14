var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, background_Image;


function preload(){
  
  background_Image = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(background_Image);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  score=0;
}

function draw() {
 background(0);




  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    else if(select_balloon == 2){
      greenBalloon();
    }
    else if(select_balloon == 3){
      blueBalloon();
      }
    else {
      pinkBalloon();
    }
  }
  
  drawSprites();

textSize(20);
text("Score:"+score,270,30);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);

  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;

  
}


function redBalloon() {
  var r = createSprite(0,Math.round(random(20, 370)), 10, 10);

  r.addImage(red_balloonImage);
  r.velocityX = 3;
  r.lifetime = 100;
  r.scale = 0.1;
}

function blueBalloon() {
  var b = createSprite(0,Math.round(random(20, 370)), 10, 10);

  b.addImage("running",blue_balloonImage);
  b.velocityX = 3;
  b.lifetime = 100;
  b.scale = 0.1;

}

function greenBalloon() {
  var g = createSprite(0,Math.round(random(20, 370)), 10, 10);

  g.addImage(green_balloonImage);
  g.velocityX = 3;
  g.lifetime = 100;
g.scale = 0.1;
}

function pinkBalloon() {
  var p = createSprite(0,Math.round(random(20, 370)), 10, 10);
  
  p.addImage(pink_balloonImage);
  p.velocityX = 3;
  p.lifetime = 100;
 
}
