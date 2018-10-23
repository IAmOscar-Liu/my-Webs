let graphics;
let x = 50;
let y = 50;
let angle = 0;
let counter = 0;

function setup(){
  createCanvas(400,300);
  pixelDensity(1);
  graphics = createGraphics(100,100);
  //graphics.background(100);
  graphics.fill(100);
  graphics.ellipse(50,50,100);
  startdrawing();
}

function draw(){
}

function startdrawing(){
  setInterval(drawing,30)
}

function drawing(){
  let dx = random(-5,5);
  let dy = random(-5,5);

  // setInterval(function(){
  //   pixelDensity(1);
  //   graphics = createGraphics(100,100);
  //   //graphics.background(100);
  //   graphics.fill(100);
  //   graphics.ellipse(50,50,100);
  //
  // },3000);

  background(0);
  graphics.fill(255);
  graphics.stroke(255);

  let distance = dist(50, 50, x+dx, y+dy);
  if(distance < 50){
    x = x + dx;
    y = y + dy;
    graphics.ellipse(x,y,10);
  } else {
    graphics.ellipse(x,y,10);
  }

  imageMode(CENTER);
  image(graphics,mouseX,mouseY);
  push();
  translate(200,200);
  rotate(angle);
  tint(0,255,0);
  image(graphics,0,0);
  pop();

  angle += 0.1;

  if(counter < 300){
    counter += 1;
  } else {
    counter = 0;
    x = 50;
    y = 50;
    graphics = createGraphics(100,100);
    graphics.fill(100);
    graphics.ellipse(50,50,100);
  }

  // fill(255,0,255);
  // ellipse(mouseX,mouseY,32)
}
