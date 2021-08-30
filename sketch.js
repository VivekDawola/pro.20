var rocket,rocketImg;
var star,starImg,starGroup;
var asteroid,asteroidImg,asteroidGroup;
var background,backgroundImg;
var score;
var gameState = "play";


function preload(){

asteroidImg = loadImage("kisspng-portable-network-graphics-meteorite-clip-art-illus-5c0b4e0c7b98f6.3619374315442447485063.jpg");
starImg = loadImage("five-pointed-yellow-star-icon-260nw-543076969.jpg");
rocketImg = loadImage("How-to-Draw-Rocket-–-Featured-Image.jpg");
backgroundImg = loadImage("360_F_289726988_cF9wzIATeSAOBxCg23NqnLeaKVfXWvdy.jpg");

}

function setup() {

    createCanvas(600,600);
  
    rocket = createSprite(200,200,45,45);
    rocket.addImage("rocket",rocketImg);
    rocket.scale = 0.9;
    rocket.velocityY = -2;
    
    star = createSprite(200,200,50,50);
    star.scale = 0.3;
    star.addImage("star",starImg);
    starGroup.add(star);

    asteroid = createSprite(200,200,40,40);
    asteroid.scale = 0.3;
    asteroid.addImage("asteroid",asteroidImg);
    asteroidGroup.add(asteroid);

    background = createSprite(300,300);
    background.scale = 3.0;
    background.addImage("background",backgroundImg);

    asteroidGroup = new Group();
    starGroup = new Group();
    
}

function draw() {
 
  background(backgroundImg);

textSize
text("Score= ",350,350);



  if (gameState === "play") {
    
if(background.y>400){
background.y = 300;

}


    if(keyDown("left_arrow")){
      // write a code to move left when left arrow is pressed
       rocket.x = rocket.x-3;
       
    }
    if(keyDown("right_arrow")){
      // write a code to move left when right arrow is pressed
      rocket.x = rocket.x+3;

    }
    if(keyDown("space")){
      // write a code to move up when space arrow is pressed
      rocket.velocityY = -5;
      
     }
   
  rocket.velocityY = rocket.velocityY + 0.8;
  
   if(starGroup.isTouching(rocket)){
  score+1;
   }

    
      if(asteroidGroup.isTouching(rocket)){
      rocket.velocityY = 0;
      }
     
    if (asteroidGroup.isTouching(rocket)||rocket.y>600) {
     rocket.destroy();
     gameState = "end"
     
     }


     
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}


