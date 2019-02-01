let cirPath = [];
let triPath = [];
let spacing = 10;
let theta = 0;

function polarToCartesian(r, angle){
    return createVector(r*cos(angle),r*sin(angle))
}

function setup(){
    createCanvas(400,400);
    angleMode(DEGREES);
    let radius = 100;
    let startA = 0;
    let endA = 120;
    let start = polarToCartesian(radius, startA);
    let end = polarToCartesian(radius, endA);
    for(let a = startA; a < 360; a+=spacing){
        let cv = polarToCartesian(radius,a);
        cirPath.push(cv);
        let amt = (a%120) / (endA - startA);
        let tv = p5.Vector.lerp(start,end,amt)
        triPath.push(tv);

        if((a+spacing) % 120 == 0){
          startA = startA + 120;
          endA = endA + 120;
          start = polarToCartesian(radius, startA);
          end = polarToCartesian(radius, endA);
        }
    }

    // let astart = 0;
    // let aend = 120;
    // let xs = radius * cos(astart);
    // let ys = radius * sin(astart);
    // let xe = radius * cos(aend);
    // let ye = radius * sin(aend);
    // triPath.push(createVector(xs,ys));
    // triPath.push(createVector(xe,ye));
    // for(let a = 120; a < 240; a+=spacing){
    //     let x = radius * cos(a);
    //     let y = radius * sin(a);
    //     let v = createVector(x,y);
    //     cirPath.push(v)
    // }
    // for(let a = 240; a < 360; a+=spacing){
    //     let x = radius * cos(a);
    //     let y = radius * sin(a);
    //     let v = createVector(x,y);
    //     cirPath.push(v)
    // }
}

function draw(){
  background(220);
  translate(width/2, height/2);
  stroke(0);
  strokeWeight(4)
  noFill();
  let amt =( sin(theta)+1)/2;
  theta += 4
  beginShape();
  for(let i = 0; i < cirPath.length; i++){
      let cv = cirPath[i];
      let tv = triPath[i];
      let x = lerp(cv.x, tv.x, amt);
      let y = lerp(cv.y, tv.y, amt);
      vertex(x,y)
  }
  endShape(CLOSE);
 
}