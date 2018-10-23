let counter = 0;
let leftGenerator;
let centerGenerator;
let rightGenerator;
let distance = [];
let speed = 2

function setup() {
    createCanvas(640, 540);
    background(51);

    centerGenerator = new generator(width/2,height);
    subLeftGenerator = new generator(width/4,height/2);
    subCenterGenerator = new generator(width/2,height/2);
    subRightGenerator = new generator(width*0.75,height/2);
    //distance[0]:center to subcenter distance[1]:center to left/rightsubcenter
    distance = [int(dist(width/2, height, width/2, height/2)),int(dist(width/2, height, width/4, height/2))]
    //console.log(distance)
}

function draw(){
    background(51);

    if(counter == 60){
        counter = 0;
        let randomColor = [floor(random(255)),floor(random(255)),floor(random(255))]
        centerGenerator.newWave(true,randomColor)
    }

    centerGenerator.expendWaves()

    noStroke();
    fill(51);
    rect(0, 0, width, height/2);
    strokeWeight(4);
    stroke(255, 0, 255);
    line(0, height/2, width/4 -5, height/2);
    line(width/4 +5, height/2, width/2 -5, height/2);
    line(width/2 +5, height/2, width*0.75 -5, height/2);
    line(width*0.75 +5, height/2, 640, height/2);
    //stroke(255)
    
    subCenterGenerator.expendWaves();
    subLeftGenerator.expendWaves();
    subRightGenerator.expendWaves();
    centerGenerator.createSubwave();

    noStroke();
    fill(255, 0, 255);
    triangle(width/2 -8, height, width/2, height -16, width/2 +8, height);
       
    counter++
}

