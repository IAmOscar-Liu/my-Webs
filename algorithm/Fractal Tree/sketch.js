let Tree;
let gen = 0;
const maxGen = 7;
//let Ydiff = [];
let jitter = [0,0];
let fix_jitter;

function setup() {
  createCanvas(400, 400); 
  
  let begin = createVector(width / 2, height);
  let end = createVector(width / 2, height - 100);
  let _root = new branch(begin, end, gen);
  Tree = new tree(_root)
}

function mousePressed() {
    if( gen < maxGen){
        //console.log(gen)
        Tree.addNextGeneration(gen);
        gen++;
    }
}

function draw() {
  background(51);

  let diffXY = [random(-1,1),random(-1,1)]  //confine the range of jittering
  diffXY.forEach((dXY,index)=>{
    if((jitter[index] + dXY) > 10){
        jitter[index] -= dXY;
      }else if((jitter[index] + dXY) < -10){
        jitter[index] -= dXY;
      }else{
        jitter[index] += dXY;
      }
  })

  Tree.showTree(jitter);

  if( gen == maxGen &&  min(Tree.Ydiff) < height){
    if(fix_jitter == undefined){
        fix_jitter = jitter.slice();  //deep copy jitter only once
      }
      Tree.showLeaves(fix_jitter);
  } 
}