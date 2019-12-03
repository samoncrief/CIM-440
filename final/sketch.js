var canvasFull = 500;

var blockArray = {
  [0],
  [0],
  [0],
  [0],
  [0]
};

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
  background(0, 255, 0);
}

function draw() {
  // put drawing code here
  // default fill,stroke,strokeWeight
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
      player = createSprite(400, 200);
      player.addAnimation('normal', 'boxGreen.png');
    }
    else{
      //main game loop

      //move sprites
      player.velocity.x = (mouseX-asterisk.position.x)/10;

      //collisions

      //if player goes out of bounds, they lose

      //draw time along top of canvas
    }
  }

  //draw sprites
}

function mouseClicked(){
  //pause/unpause game on mouse click
}
