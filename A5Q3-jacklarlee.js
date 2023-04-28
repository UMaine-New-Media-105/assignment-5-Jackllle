class Monkey {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  show() {
    fill("#795548");
    ellipse(this.x, this.y, this.radius * 2);
    fill("tan");
    noStroke();
    ellipse(this.x, this.y, this.radius * 1.5, 30);
    // Ear
    ellipse(this.x - this.radius * 0.8, this.y, this.radius * 1.2);
    ellipse(this.x + 30 - this.radius * 0.8, this.y, this.radius * 1.2);
  }
}

class Banana {
  constructor(x, y) {
    this.x = x || random(width);
    this.y = y || random(height);
    this.width = 20;
    this.height = 40;
    this.max = 20;
    this.color = color(255, 255, 0);
  }

  show() {
    fill(this.color);
    noStroke();
    rect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    fill("rgb(70,7,7)");
    rect(
      this.x - this.width / 4,
      this.y + 15 - this.height / 2 - 20,
      this.width / 2,
      this.height - 25
    );
  }
}

let monkey;
let banana;
let greenColors = ["#34B134", "#66C66C", "#98D998", "#CAF9CA"]; // Array of different green colors
let blueColors=["#346FB1", "#669FC6", "#98D8D9", "#CAF0F9"]
function setup() {
  createCanvas(400, 400);
  frameRate(2);
  monkey = new Monkey(100, 100, 20);
  banana = new Banana(200, 200);
}

function draw() {
  background("rgb(143, 143, 216)");
  
  Sky();
  drawTree(width / 2, height - 50, 80, 200);
  fill("tan");
  rect(0, 380, 1000, 1000);
  fill("rgb(231,231,120)");
  ellipse(300, 50, 50, 50);
  monkey.show();
  banana.show();
}

function drawTree(x, y, height, width) {
  // Draw trunk
  fill(139, 69, 19); // Brown color
  rect(x - 10, y - height, 20, width);
  rect(x - 100, y - 50, 20, width + 100);
  rect(x + 100, y - 50, 20, width + 100);

  
  let greenIndex = frameCount % greenColors.length;
  let greenColor = greenColors[greenIndex];

  // Draw top
  fill(greenColor); 
  rect(x - 40, y - 240, height, width + 50);
  rect(x - 130, y - 300, height, width + 50);
  rect(x - 250, y - 200, height, width);
  rect(x + 60, y - 200, height + 20, width);
}

function Sky() {
  let blueIndex = frameCount % blueColors.length;
  let blueColor = blueColors[blueIndex];

  fill(blueColor);
  rect(0, 0, 500, 500)
       }


