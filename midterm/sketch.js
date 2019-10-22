var canvasFullw = 1200;
var canvasFullh = 800;
//planet size and color variables
var planetSizes = [Me,Ve,Ea,Ma,Ju,Sa,Ne,Ur];
var planetColors = [Me,Ve,Ea,Ma,Ju,Sa,Ne,Ur];
//previous time
var prevTime;
//delta time
var deltaTime;
//time-theta scale
var timeTheta;
var theta;
//display window boolean
var infoDisplay;
//planet info array
var planetInfo = ["Me,Ve,Ea,Ma,Ju,Sa,Ne,Ur"];
var currentPlanet;

function setup() {
  // put setup code here
  createCanvas(canvasFullw, canvasFullh);
  prevTime = millis();
  background(0, 255, 0);
}

function draw() {
  // put drawing code here
  // default fill,stroke,strokeWeight
  fill(0,0,0);
  stroke("black");
  strokeWeight(1);

  //update delta
  deltaTime = millis() - prevTime;
  //update previous time
  prevTime = millis();
  console.log("Delta: " + deltaTime);
  if (/*display boolean*/ true){
    //display info for current selection
  }
  else{
    //create sun at center
    fill("orange");
    circle(canvasFullw/2,canvasFullh/2,30);
    //update theta
    for(var i = 0; i < 8; i++){
      //create planet[i] at x*cos(theta),y*sin(theta)
    }
    for(var i = 0; i < 8; i++){
      //create buttons for each planet (also the sun? update limit)
    }
  }

}
