function setup() {
  createCanvas(1200, 700);
  background("gray");
}
var sizes = [30, 50, 60, 100, 35, 15, 55, 500];
function mouseDragged() {
  ellipse(mouseX, mouseY, sizes[Math.floor(Math.random()*sizes.length)], sizes[Math.floor(Math.random()*sizes.length)]);
  triangle(sizes[Math.floor(Math.random()*sizes.length)], sizes[Math.floor(Math.random()*sizes.length)], mouseX, mouseY, sizes[Math.floor(Math.random()*sizes.length)], mouseY);
  line(sizes[Math.floor(Math.random()*sizes.length)], mouseY, mouseX, sizes[Math.floor(Math.random()*sizes.length)]);
  return false;
}