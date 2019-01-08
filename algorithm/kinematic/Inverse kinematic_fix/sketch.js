// port of Daniel Shiffman's Inverse Kinematics coding challenge
// by madacoo
let end;
let start;
let base; //p5.Vector


function setup() {
  createCanvas(600, 400);

  let point = new p5.Vector(300, 200);
  start = new Segment(point, 50, 0);
  let current = start;

  for (let i = 0; i < 4; i++) {
    let next = new Segment(current, 50, i);
    current.child = next;
    current = next;
  }
  end = current;
  base = new p5.Vector(width/2, height)
}


function draw() {
  background(51);
  end.follow(mouseX, mouseY);  //The last segment follow the mouse
  end.update();

  let next = end.parent;
  while (next != null) {
    next.follow();
    next.update();
    next = next.parent;
  }

  // The first segment attach to the base
  start.setA(base);
  start.calculateB();
  next = start.child;
  while (next != null) {
    next.attachA();
    next.calculateB();
    next = next.child;
  }

  end.show();

  next = end.parent;
  while (next != null) {
    next.show();
    next = next.parent;
  }

}

