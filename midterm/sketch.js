var canvasFullw = 1200;
var canvasFullh = 800;
var sunSize = 100;
//planet size and color variables
var planetSizes = [0.38,0.95,1,.53,11.2,9.45,4,3.88];
var planetSizeScale = 5;
var planetDistances = [35.98,67.24,92.96,141.6,483.8,890.8,1784,2793];
var planetDistanceScale = 300/2793;

//var planetDays = [58,116,1,1,10/24,11/24,17/24,16/24];
var planetYears = [88/365,225/365,1,687/365,12,29,84,165];

/// Planet sizes and distances:

/// Mercury: 2440km (.38), 35.98 mil.mi
/// Venus: 6052km (.95), 67.24 mil.mi
/// Earth: 6371km (1), 92.96 mil.mi
/// Mars: 3390km (.53), 141.6 mil.mi
/// Jupiter: 69911km (11.2), 483.8 mil.mi
/// Saturn: 58232km (9.45), 890.8 mil.mi
/// Uranus: 25632km (4), 1.784 bil.mi
/// Neptune: 24622km (3.88), 2.793 bil.mi

var planetColors = [("gray"),("tan"),("blue"),("red"),("orange"),("tan"),("teal"),("blue"),("white")];
//previous time
var prevTime;
//delta time
var deltaTime;
//time-theta scale
var timeTheta = 1;
var theta = 0;
//display window boolean
var infoDisplay = true;
//planet info array
var planetNames = ["Mercury","Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
var planetInfo = [
  "Mercury\nMercury is both the smallest planet and the closest planet to the Sun.\n1 Mercury Day = 59 Earth Days\n1 Mercury Year = 88 Earth Days",
  "Venus\nThe second planet from the Sun is known for its odd rotation, going East-West instead of the reverse. A day on Venus is longer than a year, and hurricane-force winds blow across its surface.\n1 Venus Day = 243 Earth Days\n1 Venus Year = 225 Earth Days",
  "Earth\nOnce thought to be the center of the universe, the third planet is unique with its lush greenery and intelligent life.\n1 Earth Day = 24 Earth Hours\n1 Earth Year = 365.25 Earth Days",
  "Mars\nThe red color of the Martian surface comes from the oxidation of iron in Mars' soil. It is a cold desert with a thin atmosphere.\n1 Mars Day = 1 Earth Day\n1 Mars Year = 687 Earth Days",
  "Jupiter\nThe largest planet in our solar system is actually mostly gas, specifically hydrogen and helium. It boasts over 75 moons in its orbit.\n1 Jupiter Day = 10 Earth Days\n1 Jupiter Year = 12 Earth Years",
  "Saturn\nSaturn may be a gas giant, but its many complex rings of ice and rock are quite solid.\n1 Saturn Day = 10.7 Earth Days\n1 Saturn year = 29 Earth Years",
  "Uranus\nThis ice giant is made largely of water, methane, and ammonia. Uranus not only rotates East-West like Venus, but it rotates on its side as well.\n1 Uranus Day = 17 Earth Hours\n1 Uranus Year = 84 Earth Years",
  "Neptune\nSomewhat fittingly, this deep blue ice giant, farther from the Sun than any other true planet in our solar system, is named after the Roman god of the ocean depths.\n1 Neptune Day = 16 Earth Hours\n1 Neptune Year = 165 Earth Years",
  "Welcome to the interactive solar system! You can open info on any planet by clicking on the button or pressing the associated number. Clicking anywhere other than the buttons will close a window, and the space bar will toggle the info window display."
];
var currentPlanet = 8;

var buttonSize = 100;
var buttonSpace = 200/7;

function setup() {
  // put setup code here
  var cnv = createCanvas(canvasFullw, canvasFullh);
  var x = (windowWidth - canvasFullw) / 2;
  var y = (windowHeight - canvasFullh) / 2;
  cnv.position(x, y);
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

  if (infoDisplay){
    //display info for current selection
    displayInfo();
  }
  else{
    //console.log("Delta: " + deltaTime);
    theta = theta + deltaTime;
    //create sun at center
    fill("orange");
    circle(canvasFullw/2,canvasFullh/2,sunSize);
    //update theta

    //dummy object
    /*var i = 2;
    fill(planetColors[i]);
    circle(canvasFullw/2 + thetaSign[i]*(planetDistances[i]*planetDistanceScale + sunSize/2)*(cos(theta*timeTheta)), canvasFullh/2 + thetaSign[i]*(planetDistances[i]*planetDistanceScale + sunSize/2)*(sin(theta*timeTheta)),planetSizes[i]*planetSizeScale);
    */
    stroke("black");
    strokeWeight(1);
    for(var i = 0; i < 8; i++){
      //create planet[i] at x*cos(theta),y*sin(theta)
      var locX = canvasFullw/2 - (planetDistances[i]*planetDistanceScale + sunSize/2)*(cos(theta*timeTheta/planetYears[i]));
      var locY = canvasFullh/2 - (planetDistances[i]*planetDistanceScale + sunSize/2)*(sin(theta*timeTheta/planetYears[i]));
      var pSize = sqrt(planetSizes[i])*planetSizeScale;
      fill(planetColors[i]);
      circle(locX, locY, pSize);
      if(i == 2){
        fill("green");
        strokeWeight(0);
        circle(locX, locY, pSize*0.5);
        strokeWeight(1);
      }
      if(i == 5){
        stroke("orange");
        strokeWeight(3);
        line(locX - pSize*0.75, locY + pSize*0.3, locX + pSize*0.75, locY - pSize*0.3);
        stroke("black");
        strokeWeight(1);
      }
    }
    //console.log("Uranus is at: " + thetaSign[i]*(canvasFullw/2 + planetDistances[i]*planetDistanceScale*(cos(theta*timeTheta)) + 50) + ", " + canvasFullh/2 + thetaSign[i]*(planetDistances[i]*planetDistanceScale*(sin(theta*timeTheta))));
    }
    textAlign(CENTER);
    textSize(20);
    for(var i = 0; i < 8; i++){
      //create buttons for each planet
      fill("gray");
      rect(100+(i*(buttonSize+buttonSpace)),canvasFullh - (buttonSize + 10),buttonSize,buttonSize);
      fill("black");
      text(planetNames[i],100+buttonSize/2+(i*(buttonSize+buttonSpace)),canvasFullh - (buttonSize/2 + 10));
      text(i+1,100+buttonSize/2+(i*(buttonSize+buttonSpace)),canvasFullh - (buttonSize/2 + 10)+(buttonSize/4));
    }
    textSize(50);
    fill("white");
    text("INTERACTIVE SOLAR SYSTEM", canvasFullw/2, 50);

    function displayInfo(){
      fill(planetColors[currentPlanet]);
      rect(100-10, 100-10, 20+canvasFullw - 200, 20+canvasFullh - 100 - (buttonSize + 110));
      fill("gray");
      rect(100,100,canvasFullw - 200, canvasFullh - 100 - (buttonSize + 110));
      fill("black");
      textAlign(LEFT);
      textSize(40);
      text(planetInfo[currentPlanet],110,120, canvasFullw - 200 - 20, canvasFullh - 100 - (buttonSize + 110) - 40);
    }

}

function mousePressed(){
  var hide = true;
  for(var i = 0; i < 8; i++){
    var locX = 100+(i*(buttonSize+buttonSpace));
    var locY = canvasFullh - (buttonSize + 10);
    if(mouseX > locX && mouseX < locX + buttonSize && mouseY > locY && mouseY < locY + buttonSize){
      hide = false;
      currentPlanet = i;
    }
  }
  infoDisplay = !hide;
}

function keyPressed(){
  console.log(key);
  if(key == ' '){
    infoDisplay = !infoDisplay;
  }
  else if(key > '0' && key < '9'){
    switch(key){
      case '2':
        currentPlanet = 1;
        break;
      case '3':
        currentPlanet = 2;
        break;
      case '4':
        currentPlanet = 3;
        break;
      case '5':
        currentPlanet = 4;
        break;
      case '6':
        currentPlanet = 5;
        break;
      case '7':
        currentPlanet = 6;
        break;
      case '8':
        currentPlanet = 7;
        break;
      default:
        currentPlanet = 0;
        break;
    }
    //console.log(1.0+key-1.0);
    infoDisplay = true;
  }
}
