var canvasFullw = 1200;
var canvasFullh = 800;
//planet size and color variables
//previous time
//delta time
//time-theta scale
//theta
//display window boolean
//planet info array
//current planet info

function setup() {
  // put setup code here
  createCanvas(canvasFullw, canvasFullh);
  background(0, 255, 0);
}

function draw() {
  // put drawing code here
  // default fill,stroke,strokeWeight
  fill(0);
  stroke("black");
  strokeWeight(1);

  //update delta
  //update previous time
  if (/*display boolean*/ true){
    //display info for current selection
  }
  else{
    //create sun at center
    //update theta
    for(var i = 0; i < 8; i++){
      //create planet[i] at x*cos(theta),y*sin(theta)
    }
    for(var i = 0; i < 8; i++){
      //create buttons for each planet (also the sun? update limit)
    }
  }

}
