
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

var stars = [];

var speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 3000; i++) {
    stars[i] = new Star();
  }


}

function draw() {
  // speed = map(mouseX, 0, width, 0, 50);
  speed = 1.5;

  background(0);

  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width)*4;
      pixels[index+0] = y-250;
      pixels[index+1] = 60;
      pixels[index+2] = 130;
      pixels[index+3] = y;
    }
  }
  updatePixels();

  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
