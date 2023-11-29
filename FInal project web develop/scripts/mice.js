let allMice = []; 
let cages = []; 

function setup() {
  createCanvas(1200, 600);

 
  for (let i = 0; i < 5; i++) {
    allMice.push(new Mouse(random(50, 250), random(200, 400), true)); //adult
    allMice.push(new Mouse(random(50, 250), random(200, 400), false)); //pup
  }

  
  cages.push(new Cage(800, 50, 200, 200, true)); // Cage for adult mice
  cages.push(new Cage(800, 350, 200, 200, false)); // Cage for pup
}

function draw() {
  background(220);

  for (let cage of cages) {
    cage.show();
  }

  for (let mouse of allMice) {
    mouse.update();
    mouse.show();
  }
}

class Mouse {
  constructor(x, y, isAdult) {
    this.x = x;
    this.y = y;
    this.isAdult = isAdult;
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  update() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke(0);
    fill(this.isAdult ? 'gray' : 'lightgray');
    ellipse(this.x, this.y, this.isAdult ? 30 : 20, this.isAdult ? 20 : 15);
    ellipse(this.x-5, this.y-10, this.isAdult ? 10 : 7, this.isAdult ? 8 : 5);
    
    if (this.isAdult) {
    line(this.x + 15, this.y, this.x + 25, this.y - 5);}
    else {
    line(this.x + 10, this.y, this.x + 15, this.y - 3);
    }

  }

  pressed() {
    if (mouseX > this.x - 15 && mouseX < this.x + 15 &&
        mouseY > this.y - 10 && mouseY < this.y + 10) {
      this.dragging = true;
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    this.dragging = false;
  }
}

class Cage {
  constructor(x, y, w, h, isForAdults) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isForAdults = isForAdults;
    this.label = isForAdults ? 'Adult Mice Cage' : 'Pup (Baby Mice) Cage';
  }

  show() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.h);

    fill(0);
    noStroke();
    textSize(15);
    textAlign(CENTER, TOP);
    text(this.label, this.x + this.w / 2, this.y + 10)
  }

  containsMouse(mouse) {
    return mouse.x > this.x && mouse.x < this.x + this.w &&
           mouse.y > this.y && mouse.y < this.y + this.h;
  }
}

function mousePressed() {
  for (let mouse of allMice) {
    mouse.pressed();
  }
}

function mouseReleased() {
  for (let mouse of allMice) {
    mouse.released();

    for (let cage of cages) {
      if (cage.containsMouse(mouse)) {
        if (mouse.isAdult !== cage.isForAdults) {
          alert("Wrong cage! Please place the mouse in the correct cage.");
        }
        break;
      }
    }
  }
}
