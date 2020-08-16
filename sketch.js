var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;

  movingRect = createSprite(500, 200, 50, 50);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
 
movingRect.y = mouseY;
movingRect.x = mouseX;

if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2) 
{
  fixedRect.shapeColor = "cyan";
  movingRect.shapeColor = "cyan";
}
else
{
  fixedRect.shapeColor = "yellow";
  movingRect.shapeColor = "yellow";
}


  drawSprites();
}
