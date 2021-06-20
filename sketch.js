var path,boy,lb,rb;
var pathimg,boyimg,i;

function preload(){
  //pre-load images
  boyimg = loadAnimation("Runner-1.png","Runner-2.png")
  pathimg = loadImage("path.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,300)
  path.addImage(pathimg)
  path.scale = 1.2
  path.velocityY = 4

  boy = createSprite(180,380,30,30)
  boy.addAnimation("Felix",boyimg)
  boy.scale = 0.1

  lb = createSprite(0,0,100,800)
  lb.visible = false

  rb = createSprite(410,0,100,800)
  rb.visible = false
}

function draw() {
  background(0);
path.velocityY = 4
boy.x = World.mouseX
edges = createEdgeSprites()
boy.collide(edges[3])
boy.collide(lb)
boy.collide(rb)

if(path.y>400){
  path.y = height/2
}
drawSprites()
}
