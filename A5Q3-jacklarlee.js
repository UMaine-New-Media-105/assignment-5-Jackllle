class Monkey {
  constructor(x, y, width, height) {
    this.x = x || random(width);
    this.y = y || random(height);
    this.width = width || 25;
    this.height = height || 25;
    this.radius = 20;
    this.color = color("red");
    this.score = 0;
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

  move() {
    this.x += this.maxSpeed * this.xDir;
    this.y += this.maxSpeed * this.yDir;
    if (this.x < 0 || this.x > width) {
      this.xDir *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.yDir *= -1;
    }
  }

  eat(banana) {
    let distance = dist(this.x, this.y, banana.x, banana.y);
    if (distance < this.radius + banana.height - 20) {
      return true;
    } else {
      return false;
    }
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

let monkeys = [];
let bananas = [];
let Fireflys=[];
let timeSinceLastBanana = 0;
let greenColors = ["#34B134", "#66C66C", "#98D998", "#CAF9CA"]; // Array of different green colors
let blueColors=["#346FB1", "#669FC6", "#98D8D9", "#CAF0F9"]
function setup() {
  createCanvas(500, 400);
  var x = width / 2;
  var y = height / 2; 
  monkeys.push(new Monkey(x, y, 25, 25));
  bananas.push(new Banana(random(width), random(height)));
}

function draw() {
  background("green");
 Sky();  
  //stumps
  fill("#4F2856")
rect(160,300,10,100)
rect(250,200,35,1000)
rect(50,250,15,1000)
rect(350,270,20,1000)  
rect(450,150,30,1000) 
  //moon
  fill("rgb(240,240,166)")
  ellipse(50,80,80,80)
  fill("rgb(0,0,47)")
  ellipse(70,80,50,50)
  
  
  
//branch
fill("rgb(56,63,113)")
rect(140,100,50,200)
rect(200,50,125,300)
rect(5,100,125,150)  
rect(340,250,50,100)  
rect(400,-20,500,250)
  //ground
  fill("blue")
  rect(0,380,1000,1000)

  for (let i = monkeys.length - 1; i >= 0; i--) {
    monkeys[i].show();
  

    for (let j = bananas.length - 1; j >= 0; j--) {
      if (monkeys[i].eat(bananas[j])) {
        bananas.splice(j, 1);
        monkeys[i].score++;
        timeSinceLastBanana = 0;
        if (monkeys[i].score >= 5 && monkeys.length < 100) {
          let newMonkey = new Monkey(monkeys[i].x, monkeys[i].y);
          newMonkey.color = color(random(255), random(255), random(255));
          monkeys.push(newMonkey);
          monkeys[i].score = 0;
        }
      }
    }
 

  for (let i = bananas.length - 1; i >= 0; i--) {
    bananas[i].show();
  }

  if (bananas.length < 20) {
    bananas.push(new Banana(random(width + 10), random(height + 10)));
  }
if (frameCount % 5 === 0) {
    Fireflys.push(new Firefly(random(width), random(height)));
  }

  // Update and show Fireflys
  for (let i = Fireflys.length - 1; i >= 0; i--) {
    Fireflys[i].update();
    Fireflys[i].show();
    if (Fireflys[i].alpha <= 0) {
      Fireflys.splice(i, 1);
    }
  }


}
}


function Sky() {
  let blueIndex = frameCount % blueColors.length;
  let blueColor = blueColors[blueIndex];

  fill("rgb(0,0,47)");
  rect(0, 0, 500, 500)
       }

class Firefly {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.max = 30;
    this.color = random(blueColors);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.alpha = 255; 
    this.glowRate = random(2, 5); 
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x < 0 || this.x > width) {
      this.velocity.x *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.velocity.y *= -1;
    }

    
    this.alpha -= this.glowRate;
  }

  show() {
    let glowingColor = color("rgb(239,239,191)");
    glowingColor.setAlpha(this.alpha); 

    fill(glowingColor);
    noStroke();
    ellipse(this.x, this.y, 10);
  }
}
