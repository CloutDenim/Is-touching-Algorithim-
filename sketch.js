var fixedrect;
var movingrect;
function setup() {
  createCanvas(1200,800);
fixedrect=createSprite(600,400,50,100)
movingrect=createSprite(30,70,50,100)
movingrect.shapeColor="green";
fixedrect.shapeColor="green";
movingrect.debug=true;
fixedrect.debug=true;

}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
  movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
  fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
movingrect.shapeColor="red";
fixedrect.shapeColor="red";
}

else{
movingrect.shapeColor="green";
fixedrect.shapeColor="green";
}

  drawSprites();

}