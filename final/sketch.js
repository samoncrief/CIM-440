var canvasFull = 800;

var blockArray = {};

function blockForm(entry){
  this.entry = entry % 5;
  this.exit = (Math.random() * blockArray[this.entry].length) % blockArray[this.entry].length;
  this.sprite = blockArray[this.entry][this.exit];
}

var menu = false;
var player = null;

function setup() {
  // put setup code here
  createCanvas(canvasFull, canvasFull);

  player = createSprite(canvasFull/2,canvasFull/2,127,127);
  player.addAnimation('normal', 'boxGreen.png');
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

      //move sprites
      player.velocity.x = (mouseX-player.position.x)/10;

      //collisions

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