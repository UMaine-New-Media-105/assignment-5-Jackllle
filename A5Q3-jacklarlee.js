let monkey;
let banana;
let particles = [];

let greenColors = ["#5A34B1", "#3D6DA4" ];
let blueColors = ["#123760", "#1D4560", "#3E2271", "#172262"];

function setup() {
  createCanvas(400, 400);
  monkey = new Monkey(100, 100, 20);
  banana = new Banana(200, 200);
  particles.push(new Particle(random(width), random(height)));
}

function draw() {
  background(143, 143, 216);

  sky();
  drawTree(width / 2, height - 50, 80, 200);
  fill("rgb(81,49,111)");
  rect(0, 380, 1000, 1000);
  fill(231, 231, 120);
  ellipse(300, 50, 50, 50);
  monkey.show();
  banana.show();
  // Create new particles
  if (frameCount % 10 === 0) {
    particles.push(new Particle(random(width), random(height)));
  }

  // Update and show particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].alpha <= 0) {
      particles.splice(i, 1);
    }
  }

}

function drawTree(x, y, height, width) {
  // Draw trunkA
  fill(139, 69, 19);
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

function sky() {
  let blueIndex = frameCount % blueColors.length;
  let blueColor = blueColors[blueIndex];

  fill("rgb(1,1,54)");
  rect(0, 0, 500, 500);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

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

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-3, -1);
    this.alpha = 255;
    this.radius= 1/3

  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
  noStroke();

  // Draw multiple ellipses with increasing size and decreasing opacity
  for (let i = 0; i < 5; i++) {
    let glowColor = color(255, 255, 255, this.alpha / 5);
    fill(glowColor);
    ellipse(this.x, this.y, 16 + i * 1);
  }
}
}









