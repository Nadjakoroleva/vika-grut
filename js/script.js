function setup() {
  createCanvas(500, 500);
}

function draw() {}

function draw() {
  background("#FC05A6");
  fill("#9905FC");
  if (mouseX > 200 && mouseX < 300) {
    if (mouseY > 150 && mouseY < 350) {
      fill("#FCE005");
    }
  }
  rect(200, 150, 100, 200);
  fill("#B20003");
  textSize(15);
  text("я есть Грут", 210, 250);
}
