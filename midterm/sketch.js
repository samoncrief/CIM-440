var canvasFullw = 1200;
var canvasFullh = 800;
var sunSize = 100;
//planet size and color variables
var planetSizes = [0.38,0.95,1,.53,11.2,9.45,4,3.88];
var planetSizeScale = 5;
var planetDistances = [35.98,67.24,92.96,141.6,483.8,890.8,1784,2793];
var planetDistanceScale = 300/2793;

var planetSpeeds = [58,116,1,1,10/24,11/24,17/24,16/24];

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
var timeTheta = 1;
var theta = 0;
var thetaSign = [1,-1,1,-1,1,-1,1,-1];
//display window boolean
var infoDisplay;
//planet info array
var planetInfo = ["Me,Ve,Ea,Ma,Ju,Sa,Ur,Ne"];
var currentPlanet;

function setup() {
  // put setup code here
  createCanvas(canvasFullw, canvasFullh);
  prevTime = millis();
  timeTheta = 1/20;
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
  //console.log("Delta: " + deltaTime);
  theta = theta + deltaTime;
  if (false){
    //display info for current selection
  }
  else{
    //create sun at center
    fill("orange");
    circle(canvasFullw/2,canvasFullh/2,sunSize);
    //update theta

    //dummy object
    /*var i = 2;
    fill(planetColors[i]);
    circle(canvasFullw/2 + thetaSign[i]*(planetDistances[i]*planetDistanceScale + sunSize/2)*(cos(theta*timeTheta)), canvasFullh/2 + thetaSign[i]*(planetDistances[i]*planetDistanceScale + sunSize/2)*(sin(theta*timeTheta)),planetSizes[i]*planetSizeScale);
    */

    for(var i = 0; i < 8; i++){
      //create planet[i] at x*cos(theta),y*sin(theta)
      fill(planetColors[i]);
      circle(canvasFullw/2 + thetaSign[i]*(planetDistances[i]*planetDistanceScale + sunSize/2)*(cos(planetSpeeds[i]*theta*timeTheta)), canvasFullh/2 + thetaSign[i]*(planetDistances[i]*planetDistanceScale + sunSize/2)*(sin(planetSpeeds[i]*theta*timeTheta)),sqrt(planetSizes[i])*planetSizeScale);
    }
    //console.log("Uranus is at: " + thetaSign[i]*(canvasFullw/2 + planetDistances[i]*planetDistanceScale*(cos(theta*timeTheta)) + 50) + ", " + canvasFullh/2 + thetaSign[i]*(planetDistances[i]*planetDistanceScale*(sin(theta*timeTheta))));
    fill("gray");
    for(var i = 0; i < 8; i++){
      //create buttons for each planet (also the sun? update limit)
      rect(80+(i*160),canvasFullh - 90,80,80);
    }
  }

}
