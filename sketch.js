var hunterB15;
var hunterB15Img;
var cover1, cover2, cover3;
var cover1h, cover2h, cover3h;
var cover1Img, cover2Img, cover3Img;
var enemyBullet, playerBullet;
var pBulletGroup, eBulletGroup;
var a1Img, a2Img, a3Img, a4Img


function preload(){

  hunterB15Img = loadImage("hunter B15 (new).jpg");
  a1Img = loadImage("Alien1.jpg");
  a2Img = loadImage("Alien2.jpg");
  a3Img = loadImage("Alien3.jpg");
  a4Img = loadImage("Alien4.jpg");
  cover1Img = loadImage("cover left.jpg");
  cover2Img = loadImage("cover middle.jpg");
  cover3Img = loadImage("cover right.jpg");




}

function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50)

  hunterB15 = createSprite(500, 740, 10, 10);
 hunterB15.addImage(hunterB15Img);
 hunterB15.scale = 0.4;

 cover1 = createSprite(120,600,20,20);
 cover1.addImage(cover1Img);
 cover1.scale = 0.4;

 cover2 = createSprite(570,600,20,20);
 cover2.addImage(cover2Img);
 cover2.scale = 0.4;
 
 cover3 = createSprite(1100,600,20,20);
 cover3.addImage(cover3Img);
 cover3.scale = 0.4;

 

  cover1h = 100;
  cover2h = 100;
  cover3h = 100;

  pBulletGroup = createGroup();
  eBulletGroup = createGroup();



}

function draw() {
  background(0);  



  enemyBullet = createSprite(mouseX, mouseY, 10, 20 );
  pBullet();
  cover();  
  textSize(32);

  

  fill(255);
  text(mouseX + "," + mouseY, 50, 50 );
  text("cover1h: "+cover1h + " cover2h: " + cover2h + " cover3h: " + cover3h,600,50);
  drawSprites();
 
}

function cover(){

 



 
  if (cover1.isTouching(enemyBullet) || cover1.isTouching(playerBullet)){
    cover1h = cover1h - 1;
   enemyBullet.destroyEach();
   playerBullet.destroyEach();

 }

 if (cover2.isTouching(enemyBullet) || cover2.isTouching(playerBullet)){
  cover2h = cover2h - 1;
  enemyBullet.destroyEach();
  playerBullet.destroyEach();

}

if (cover3.isTouching(enemyBullet) || cover3.isTouching(playerBullet)){
  cover3h = cover3h - 1;
  enemyBullet.destroyEach();
  playerBullet.destroyEach();

}
}

function pBullet(){

if(keyDown("SPACE")){
playerBullet = createSprite(hunterB15.x, hunterB15.y, 10,20);
playerBullet.velocityY = -20;
playerBullet.lifetime = 100;
pBulletGroup.add(playerBullet);
playerBullet.shapeColor = 255;
}

if(keyDown("LEFT_ARROW")){
  hunterB15.x = hunterB15.x -10;

}

if(keyDown("RIGHT_ARROW")){
  hunterB15.x = hunterB15.x +10;
  
}




}