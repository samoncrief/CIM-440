var eyeSize = 120;

var center = 250;
var headSize = 400;
var eyeHeight = 160
var canvasFull = 500;


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
  //left eye
  //ellipse(100,100,20,20);
  //right eye
  //ellipse(140,100,20,20);

  fill("yellow");
  ellipse(center,center,headSize,headSize);

  fill(255);//rgb
  //left eye
  ellipse(center-(10+eyeSize/2), eyeHeight, eyeSize, eyeSize);
  //right eye
  ellipse(center+(10+eyeSize/2), eyeHeight, eyeSize, eyeSize);

  strokeWeight(50);
  point(center-(10+eyeSize/2),eyeHeight);
  point(center+(10+eyeSize/2),eyeHeight);
}
