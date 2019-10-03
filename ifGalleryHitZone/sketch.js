// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
// Catpig "Pig in a cat suit" by jhm is licensed under CC BY-SA 2.0 https://ccsearch.creativecommons.org/photos/e6a6c6ab-e337-4fde-b379-b6cf2f2dadeb
// chicken "chicken" by Sarah Deforche is licensed under CC BY-NC-SA 2.0 https://ccsearch.creativecommons.org/photos/0eb94d7b-34a4-4dcd-9cff-8ee892a847cc

var puppy, dinosaur, sloth, catpig, chicken;
//var pButton, dButton, sButton, cpButton, cButton;

var currentImage = 0;
var hitX = [100,200];
var hitY = [300,300];
var hitSize = 50;


function preload(){
  // load media
  puppy = loadImage("images/puppy.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");
  sloth = loadImage("images/sloth.jpg");
  catpig = loadImage("images/catpig.jpg");
  chicken = loadImage("images/chicken.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

  /*pButton = createButton("Puppy");
  pButton.mousePressed(function(){
    currentImage = 0;
  });

  dButton = createButton("Dinosaur");
  dButton.mousePressed(function(){
    currentImage = 1;
  });

  sButton = createButton("Sloth");
  sButton.mousePressed(function(){
    currentImage = 2;
  });

  cpButton = createButton("Catpig");
  cpButton.mousePressed(function(){
    currentImage = 3;
  });

  cButton = createButton("Chicken");
  cButton.mousePressed(function(){
    currentImage = 4;
  });*/


}

function draw() {
  // put drawing code here
  background(255);
  console.log("currentImage " + currentImage);

  rect(hitX[0],hitY[0],hitSize,hitSize);
  rect(hitX[1],hitY[1],hitSize,hitSize);

  if(currentImage == 0){
    // show puppy
    image(puppy,0,0,puppy.width/4, puppy.height/4);
  }else if(currentImage == 1){
    // show dino
    image(dinosaur,0,0,dinosaur.width/4,dinosaur.height/4);
  }else if(currentImage == 2){
    //show sloth
    image(sloth,0,0,sloth.width/4,sloth.height/4);
  }else if(currentImage == 3){
    image(catpig,0,0,catpig.width/2,catpig.height/2);
  }else if(currentImage == 4){
    image(chicken,0,0,chicken.width/2,chicken.height/2);
  }

  function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Button 0");
    currentImage = currentImage + 1;

    if(currentImage == 5){
      currentImage = 0;
    }//end of currentImage == 3 if statement

  }//button 0 end of hitzone

}//end of mousePressed
}
