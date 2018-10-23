var ball = {
    x:300,
    y:200,
    xspeed:4,
    yspeed:-3
}


function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    move();
    bounce();
    display();
    
    //var x = 0;


    /*while(x <= width){
        fill(0,200,255);
        ellipse(x,100,25,25);
        x = x + 50;
    }*/

    /*for( var x = 0; x <= mouseX ; x += 50){
        for (var y = 0 ; y <= width; y+=50){
            fill(random(255),0,random(255));
            ellipse(x,y,25,25);
        }
    }*/
}

function move(){

    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;

}

function bounce(){

    if(ball.x > width || ball.x < 0){
        ball.xspeed = ball.xspeed * -1;
    }

    if(ball.y > height || ball.y < 0){
        ball.yspeed = ball.yspeed * -1;
    }

}


function display(){

    strokeWeight(4);
    stroke(255);
    noFill();
    ellipse(ball.x,ball.y,24,24)

}








