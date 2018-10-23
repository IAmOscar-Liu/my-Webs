
/*
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(50);

    lollipop(100,100,50);
    lollipop(300,200,150);

}

function lollipop(x,y,diameter){

    fill(0,200,255);
    rect(x-10,y,20,150);

    fill(250,0,200);
    ellipse(x,y,diameter,diameter);

}*/

let bubbles = [];

function setup(){
  createCanvas(600,400);
  /*for (let i = 0; i<10 ;i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,40)
    bubbles[i] = new Bubble(x,y,r);
  }*/
}

function mousePressed(){
  let r = random(10,50);
  let b = new Bubble(mouseX,mouseY,r);
  bubbles.push(b);
  console.log(bubbles);  
}

function draw(){
  background(0);
  for (let i = 0; i < bubbles.length ;i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble{
  constructor(tempX,tempY,tempR){
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }
  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    //noStroke();
    //fill(255,10);
    ellipse(this.x, this.y, this.r*2 );

  }
}
