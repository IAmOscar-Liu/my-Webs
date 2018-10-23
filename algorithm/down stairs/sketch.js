let Staircases;
let yShift = 2;
let stairLength = 100;
let newStairTimeinterval = 30;
let _width = 540;
let _height = 640;
let count = 0;
let timeCount = 0
let floorTime = 300;
let basement = 0
let gravity = 0.2;
let stepType = [{"type":"normal","prob":0.5},{"type":"spike","prob":0.2},{"type":"spring","prob":0.15},{"type":"slider-left","prob":0.05},{"type":"slider-right","prob":0.05},{"type":"flip","prob":0.05}]
let sliderSpeed = 3;
let Man;
let topSpikeWidth = 20;
let topSpikeIndex = 0;
let p1,p2;


function setup(){
    let canvas = createCanvas(_width, 640);
    canvas.parent('sketch-holder');
    background(51);
    p1 = createP('');
    p2 = createP('');
    p1.parent('_p1');
    p2.parent('_p2').addClass('pp');

    Staircases = new stairCases();
    for(let i = 0; i < 20*newStairTimeinterval; i++){     
        if((i%newStairTimeinterval) == 0){
            Staircases.addNewStair();
        }
        Staircases.shiftStaircases(yShift)
    }
    Man = new man(Staircases.steps[18].x+(stairLength/2),Staircases.steps[18].y-15);
    Staircases.steps[18].type = "normal";
    Staircases.showAllStairs();
    
    Man.showMan();
    //noLoop();
    
}

function draw(){
    background(51);

    if(count  == 0){
        Staircases.addNewStair();
    }

    if(timeCount == floorTime-1){
      basement += 1;
    }
    
    if(keyIsPressed){
        keyPressed()
    }

    if(Staircases.isFalling(Man.x,Man.y)){
      //console.log('falling')
      Man.fallingcontrol();
    }else{
      Man.behavior();
    }
 
    Man.isHitTop();
    Man.isGameOver();

    Staircases.shiftStaircases(yShift)
    Staircases.showAllStairs();
    drawTopSpikes()
    Man.showMan();

    p1.html(`<span>life: ${life}</span>`);
    p2.html(`Basement: ${basement}`);
    count = (count+1) % newStairTimeinterval;
    timeCount = (timeCount+1) % floorTime;
}

function keyPressed() {
    //left:37
    //right:39
    if(keyCode==37){
        Man.x -= 4;
        if(Man.x <=0){
            Man.x = 0
        }
    }else if(keyCode==39){
        Man.x += 4;
        if(Man.x >=_width){
            Man.x = _width;
        }
    }
    //console.log(keyCode); 
}

function drawTopSpikes(){
    noStroke();
    fill(178, 190, 181);

    while(topSpikeWidth*topSpikeIndex <= (_width+20)){
        triangle(topSpikeWidth*topSpikeIndex,0,topSpikeWidth*topSpikeIndex+topSpikeWidth/2,20,topSpikeWidth*topSpikeIndex+topSpikeWidth,0);   
        topSpikeIndex++;
    }
    topSpikeIndex = 0;
}


