var x = 0;

var timer;
var counter = 0;
var interval;
var timeTicking;


function setup(){
  createCanvas(200,200);
  timer = createP("timer");
  button1 = createButton("start timer");
  button1.mousePressed(doTimer);
  button2 = createButton("reset timer");
  button2.mousePressed(resetTimer);

}



function doTimer(){

  if (!interval){  //interval default is false
    interval = setInterval(timeIt,500);
    button1.html("stop timer");
  } else {
    clearInterval(interval);
    interval = false;
    button1.html("start timer");
  }
}

function resetTimer(){
  counter = 0;
  timer.html(counter)
}
function timeIt(){
  counter++;
  timer.html(counter);
}


function draw(){
  background(51);
  stroke(255);
  line(x,0,x,height);

  if(interval){
    x = x + 3;
    if(x > width){
       x = 0;
    }
  }

}
