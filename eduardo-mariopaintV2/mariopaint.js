function setup() {
  createCanvas(1200, 700);
  background("gray");
  {
    fill("yellow");
    ellipse(250,100,100,100);
  }{
    fill("blue");
    ellipse(500,100,100,100);
  }{
  fill("white");
    ellipse(750,100,100,100);
  }
}

function mousePressed() {
  ellipse(250,100,100,100);
  return "yellow"
}

var color

function mouseDragged() {
  fill(color)
  ellipse(mouseX, mouseY, random(200),random(200));
  triangle(random(200), random(200), mouseX, mouseY, random(200), mouseY);
  line(random(200), mouseY, mouseX, random(200));
  return false;
}