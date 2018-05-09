var eye_1, eye_2, theStarryNight;

function setup() {
  frameRate(3);
  createCanvas(800, 600);
  background(255);
  eye_1 = loadImage('eye_1.png');
  eye_2 = loadImage('eye_2.png');
  theStarryNight = loadImage('theStarryNight.jpg');
  imageMode(CENTER);
}

function draw() {
  image(theStarryNight, width/2+37, height/2, 230, 230);
  image(eye_1,          width/2,    height/2, 840, 510);  
}

function mousePressed() {
  image(eye_2,          width/2,    height/2, 760, 610);
}
