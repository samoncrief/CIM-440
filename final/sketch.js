var canvasFull = 762;

var menu = false;
var player = null;
var row = null;
var blocks;

var lastRow = 0;
var increment = 1;

function setup() {
  // put setup code here
  createCanvas(canvasFull, canvasFull);

  player = createSprite(canvasFull/2,canvasFull/2,127,127);
  player.addAnimation('normal', 'boxGreen.png');

  blocks = new Group();
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
      if(millis() - lastRow > 465){
        //console.log("Row is at " + row.position.y);
        if(increment == 0){
          createRow(random(10)%10);
          increment++;
        }
        else{
          createRow(0);
          increment++;
        }
        lastRow = millis();
      }

      //move sprites
      player.velocity.x = (mouseX-player.position.x)/10;
      player.velocity.y = (canvasFull/2 - player.position.y)/10;

      //collisions

      if(player.position.x < 128)
        player.position.x = 128;
      if(player.position.x > canvasFull - 128)
        player.position.x = canvasFull - 128;

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

function createBlock(indexB){
  block = createSprite(indexB * 127,-127,127,127);
  block.addAnimation('normal','boxYellow.png');
  block.velocity.y = 5;
  block.life = 185;
  row = block;
  return block;
}

function createRow(index){
  createBlock(0);
  createBlock(6);
  switch(index){
    case 1:
      //wall in middle
      blocks.add(createBlock(3));
    case 2:
      //leftmost exit
      blocks.add(createBlock(2));
      blocks.add(createBlock(3));
      blocks.add(createBlock(4));
      blocks.add(createBlock(5));
    case 3:
      //left exit
      blocks.add(createBlock(1));
      blocks.add(createBlock(3));
      blocks.add(createBlock(4));
      blocks.add(createBlock(5));
    case 4:
      //middle exit
      blocks.add(createBlock(1));
      blocks.add(createBlock(2));
      blocks.add(createBlock(4));
      blocks.add(createBlock(5));
    case 5:
      //right exit
      blocks.add(createBlock(1));
      blocks.add(createBlock(2));
      blocks.add(createBlock(3));
      blocks.add(createBlock(5));
    case 6:
      //rightmost exit
      blocks.add(createBlock(1));
      blocks.add(createBlock(2));
      blocks.add(createBlock(3));
      blocks.add(createBlock(4));
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
      //blocks.add(block);
  }
}
