var movrect,fixrect;

function setup() {
  createCanvas(1200,800);
  movrect=createSprite(400, 200, 50, 50);
  movrect.shapeColor="blue";
  fixrect=createSprite(600, 400, 50, 50);
  fixrect.shapeColor="blue";
}

function draw() {
  background(0);  
  movrect.x=World.mouseX;
   movrect.y=World.mouseY;
   if(movrect.x-fixrect.x<movrect.width/2+fixrect.width/2
    &&fixrect.x-movrect.x<movrect.width/2+fixrect.width/2
    &&movrect.y-fixrect.y<movrect.height/2+fixrect.height/2
    &&fixrect.y-movrect.y<movrect.height/2+fixrect.height/2)
   {
     movrect.shapeColor="green";
     fixrect.shapeColor="green";
   }
   else
   {
     movrect.shapeColor="blue";
     fixrect.shapeColor="blue";  
    }
  drawSprites();
}