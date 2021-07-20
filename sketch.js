function setup() {
  createCanvas(1600,800);
speed=random(55,90)
weight=random(400,1500)
car=createSprite(50,200,50,50)
wall=createSprite(800,200,50,height/2)
}
var wall,car;
var speed,weight;
car=velocityx = speed;
function draw() {
  background(255,255,255);  
  drawSprites();
}