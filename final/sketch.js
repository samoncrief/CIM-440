var canvasFull = 762;

var menu = true;
var player = null;
var row = null;
var blocks;
var wall = false;
var left = false;
var ints10 = [0,1,2,3,4,5,6,7,8,9];
var ints6 = [0,1,2,3,4,5];
var optionsFull = [2,3,4,5,6,7,8];
var optionsL = [2,3,7];
var optionsR = [5,6,8];

var lastRow = 0;
var increment = 1;

function setup() {
  // put setup code here
  createCanvas(canvasFull, canvasFull);

  player = createSprite(canvasFull/2,canvasFull/2,96,96);
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
    rect(canvasFull/4,canvasFull/4,canvasFull/2,canvasFull/2);
  }
  else{
    if(player == null){
      //initialize game

    }
    else{
      //main game loop
      if(millis() - lastRow > 425){
        //console.log("Row is at " + row.position.y);
        if(increment == 0){
          if(wall){
            if(left)
              createRow(random(optionsL));
            else {
              createRow(random(optionsR));
            }
          }
          else {
            createRow(random(optionsFull));
          }
        }
        else{
          if(wall){
            createRow(1);
          }
          else{
            createRow(0);
          }
        }
        increment++;
        increment = increment % 8;
        lastRow = millis();
      }

      //move sprites
      player.velocity.x = (mouseX-player.position.x)/20;
      player.velocity.y = (canvasFull/2 - player.position.y)/100;

      //collisions
      player.collide(blocks);

      if(player.position.x < 112)
        player.position.x = 112;
      if(player.position.x > canvasFull - 112)
        player.position.x = canvasFull - 112;

      for(var i = 0; i < blocks.size(); i++){
        if(player.velocity.x < 0 && blocks.toArray()[i].overlapPoint(player.position.x - 48,player.position.y)){
          player.velocity.x = 0;
        }
        else if(player.velocity.x > 0 && blocks.toArray()[i].overlapPoint(player.position.x + 48,player.position.y)){
          player.velocity.x = 0;
        }
      }

      //if player goes out of bounds, they lose

      //draw time along top of canvas
    }
    //draw sprites
    drawSprites();
  }



  stroke("red");
  strokeWeight(10);
  line(0,canvasFull-10,canvasFull,canvasFull);
}

function mouseClicked(){
  if(menu){
    menu = false;
  }
}

function createBlock(indexB){
  block = createSprite(indexB * 127,-127,127,127);
  block.addAnimation('normal','boxYellow.png');
  block.velocity.y = 5;
  block.immovable = true;
  block.life = 200;
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
      break;
    case 2:
      //leftmost exit
      blocks.add(createBlock(2));
      blocks.add(createBlock(3));
      blocks.add(createBlock(4));
      blocks.add(createBlock(5));
      wall = false;
      break;
    case 3:
      //left exit
      blocks.add(createBlock(1));
      blocks.add(createBlock(3));
      blocks.add(createBlock(4));
      blocks.add(createBlock(5));
      wall = false;
      break;
    case 4:
      //middle exit
      blocks.add(createBlock(1));
      blocks.add(createBlock(2));
      blocks.add(createBlock(4));
      blocks.add(createBlock(5));
      wall = false;
      break;
    case 5:
      //right exit
      blocks.add(createBlock(1));
      blocks.add(createBlock(2));
      blocks.add(createBlock(3));
      blocks.add(createBlock(5));
      wall = false;
      break;
    case 6:
      //rightmost exit
      blocks.add(createBlock(1));
      blocks.add(createBlock(2));
      blocks.add(createBlock(3));
      blocks.add(createBlock(4));
      wall = false;
      break;
    case 7:
      //left/right, take left
      blocks.add(createBlock(2));
      blocks.add(createBlock(3));
      blocks.add(createBlock(4));
      wall = true;
      left = true;
      break;
    case 8:
      //left/right, take right
      blocks.add(createBlock(2));
      blocks.add(createBlock(3));
      blocks.add(createBlock(4));
      wall = true;
      left = false;
      break;
    default:
      //blocks.add(block);
  }
}
