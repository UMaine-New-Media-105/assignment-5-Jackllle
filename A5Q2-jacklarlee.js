let bubbles = [];

function setup() {
  createCanvas(960, 540);
  for (let i = 0; i < 50; i++) {
    let bubble = new Bubble(random(width), random(height), random(10, 50), color(random(255), random(255), random(255), 100));
    bubbles.push(bubble);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speed = random(1, 3);
    this.xDir = random(-1, 1);
    this.yDir = random(-1, 1);
  }

  move() {
    this.x += this.speed * this.xDir;
    this.y += this.speed * this.yDir;
    if (this.x < 0 || this.x > width) {
      this.xDir *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.yDir *= -1;
    }
  }

  show() {
    fill("white");
    ellipse(this.x, this.y, this.size * 2);
    noStroke();
    ellipse(this.x, this.y, this.size * 1.5, 30);
    // Ear
    ellipse(this.x - this.size * 0.8, this.y, this.size * 1.2);
    ellipse(this.x + 30 - this.size * 0.8, this.y, this.size, this.color);
  }
}
