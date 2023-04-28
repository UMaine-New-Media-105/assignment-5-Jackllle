let bubbles = [];

function setup() {
  createCanvas(960, 540);
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(220);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xspeed = random(-2, 2);
    this.yspeed = random(-2, 2);
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x < 0 || this.x > width) {
      this.xspeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.yspeed *= -1;
    }
  }

  show() {
    push();
    noStroke();
    fill(random(255), random(255), random(255), 100);
    translate(this.x, this.y);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}
