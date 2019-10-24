var canvasFullw = 1200;
var canvasFullh = 800;
//planet size and color variables
var planetSizes = [0.38,0.95,1,.53,11.2,9.45,4,3.88];
var planetSizeScale = 10;
var planetDistances = [35.98,67.24,92.96,141.6,483.8,890.8,1784,2793];
var planetDistanceScale = 600/2793;

/// Planet sizes and distances:
/// Mercury: 2440km (.38), 35.98 mil.mi
/// Venus: 6052km (.95), 67.24 mil.mi
/// Earth: 6371km (1), 92.96 mil.mi
/// Mars: 3390km (.53), 141.6 mil.mi
/// Jupiter: 69911km (11.2), 483.8 mil.mi
/// Saturn: 58232km (9.45), 890.8 mil.mi
/// Uranus: 25632km (4), 1.784 bil.mi
/// Neptune: 24622km (3.88), 2.793 bil.mi

var planetColors = [("gray"),("tan"),("blue"),("red"),("orange"),("tan"),("teal"),("blue")];
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
var planetInfo = ["Me,Ve,Ea,Ma,Ju,Sa,Ur,Ne"];
var currentPlanet;

function setup() {
  // put setup code here
  createCanvas(canvasFullw, canvasFullh);
  prevTime = millis();
  timeTheta = 1/10;
}

function draw() {
  background("black");
  angleMode(DEGREES);
  // put drawing code here
  // default fill,stroke,strokeWeight
  fill(255);
  stroke("black");
  strokeWeight(1);

  //update delta
  deltaTime = millis() - prevTime;
  //update previous time
  prevTime = millis();
  console.log("Delta: " + deltaTime);
  if (/*display boolean*/ false){
    //display info for current selection
  }
  else{
    //create sun at center
    fill("orange");
    circle(canvasFullw/2,canvasFullh/2,30);
    //update theta

    //dummy object
    //fill("blue");
    //circle(canvasFullw/2 + 100*(cos(millis()*timeTheta)), canvasFullh/2 + 100*(sin(millis()*timeTheta)), 30);

    for(var i = 0; i < 8; i++){
      //create planet[i] at x*cos(theta),y*sin(theta)
      fill(planetColors[i]);
      circle(canvasFullw/2 + planetDistances[i]*planetDistanceScale*(cos(millis()*timeTheta)), canvasFullh/2 + planetDistances[i]*(sin(millis()*timeTheta)),planetSizes[i]*planetSizeScale);
    }
    fill("gray");
    for(var i = 0; i < 8; i++){
      //create buttons for each planet (also the sun? update limit)
      rect(80+(i*160),canvasFullh - 90,80,80);
    }
  }

}
