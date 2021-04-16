//for creating sprite for a car and a wall
var car;
var wall;

//for creating sprite for speed and weight
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

//for setting up randonm values for speed and weight
speed = random(50,90);
wight = random(400,1500);

//for the car sprite
car = createSprite(50,200,50,50);
car.shapeColor = "red";

//for creating the wall and also giving the wall a color
wall = createSprite(1500,200,60,height/2);
wall.shapeColor = (80,80,80);

//for giving the car a velocity basically a speed
car.velocityX = speed;


}

function draw() {
  background("black");  

//for the deformation of the car basically changing the colors of the car
if(wall.x-car.x < (car.width+wall.width)/2)
{
 car.velocityX = 0;
 var deformation = 0.5  * weight * speed * speed/22500;

 if(deformation>180)
 {
   car.shapeColor = color(255,0,0);
 }

if(deformation<180 && deformation>100)
{
 car.shapeColor = (230,230,0);
}

if(deformation<100)
{
  car.shapeColor = color(0,255,0);
}
}

  drawSprites();
  
}
