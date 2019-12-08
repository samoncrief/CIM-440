var canvasFull = 800;

var blockArray = {};

var menu = false;
var player = null;
var row = null;

function setup() {
  // put setup code here
  createCanvas(canvasFull, canvasFull);

  player = createSprite(canvasFull/2,canvasFull/2,127,127);
  player.addAnimation('normal', 'boxGreen.png');

  blocks = new Group();

  //instantiate wall configurations
  blockArray = new Array(new Array(),new Array(),new Array(),new Array(),new Array());
}

function draw() {
  // put drawing code here
  // default fill,stroke,strokeWeight
  background(0, 0, 0);
  fill(255);
  stroke("black");
  strokeWeight(1);

  //main loop
  if(menu){
    //initial menu
  }
  else{
    if(player == null){
      //initialize game

    }
    else{
      //main game loop
      if(row == null){
        createRow(0);
      }
      else if(row.position.y > 0){
        createRow(0);
      }

      //move sprites
      player.velocity.x = (mouseX-player.position.x)/10;
      player.velocity.y = (canvasFull/2 - player.position.y)/10;

      //collisions
      player.collide(blocks);

      //if player goes out of bounds, they lose

      //draw time along top of canvas
    }
  }

  //draw sprites
  drawSprites();
}

function mouseClicked(){
  //pause/unpause game on mouse click
}

function createBlock(X, Y){
  block = createSprite(X,Y,127,127);
  block.addAnimation('normal','boxYellow.png');
  block.velocity = 5;
  block.life = 500;
  blocks.add(block);
  row = block;
}

function createRow(index){
  switch(index){
    case 1:
      //wall in middle
    case 2:
      //leftmost exit
    case 3:
      //left exit
    case 4:
      //middle exit
    case 5:
      //right exit
    case 6:
      //rightmost exit
    case 7:
      //left/mid, take left
    case 8:
      //left/mid, take mid
    case 9:
      //left/right, take left
    case 10:
      //left/right, take right
    case 11:
      //mid/right, take mid
    case 12:
      //mid/right, take
    default:
      createBlock(127,127);
      //createBlock(canvasFull,-127);
  }
}
