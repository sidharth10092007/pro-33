//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;

//var snow
var bgImg
var snow=[];


function preload(){

bgImg=loadImage("snow1.jpg")

}


function setup() {
  createCanvas(1000,1000);
  //engine = Engine.create();
  //world = engine.world;
  createSprites = (400, 200, 50, 50);
  for (var i = 0; i < 15; i++) {
  snow.push(new SnowFall()); 
} 
}
 


function draw() {
 // Engine.update(engine);
  background(bgImg); 
for (var i = 0; i < snow.length; i++) {

 snow[i].display(); snow[i].update();
 } 
drawSprites(); 
}
