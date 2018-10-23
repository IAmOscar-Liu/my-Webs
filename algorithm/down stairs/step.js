function pickStepType(){
    let index = 0;
    let r = random(1);
    while (r > 0) {
      r = r - stepType[index].prob;
      index++;
    }
    index--;
    return stepType[index].type;
}

class step{
    constructor(){
        this.x = floor(random(20,_width-stairLength-20))
        this.y = _height + 20;
        this.valid = true; 
        this.drawStair(); 
        this.type = pickStepType()
        //console.log(this.type)
    }

    drawStair(){
        switch (this.type) {
            case "normal":
                strokeWeight(10);
                stroke(255, 0, 255);
                line(this.x, this.y, this.x + stairLength, this.y);
                break;
            case "spike":
                strokeWeight(10);
                stroke(178, 190, 181);
                line(this.x, this.y, this.x + stairLength, this.y);
                noStroke();
                fill(178, 190, 181);
                triangle(this.x, this.y-4, this.x + stairLength*0.1, this.y-24, this.x + stairLength*0.2, this.y-4);
                triangle(this.x + stairLength*0.2, this.y-4, this.x + stairLength*0.3, this.y-24, this.x + stairLength*0.4, this.y-4);
                triangle(this.x + stairLength*0.4, this.y-4, this.x + stairLength*0.5, this.y-24, this.x + stairLength*0.6, this.y-4);
                triangle(this.x + stairLength*0.6, this.y-4, this.x + stairLength*0.7, this.y-24, this.x + stairLength*0.8, this.y-4);
                triangle(this.x + stairLength*0.8, this.y-4, this.x + stairLength*0.9, this.y-24, this.x + stairLength*1, this.y-4);                
                break;
            case "slider-left":
                noStroke();
                fill(179,242,255);
                triangle(this.x + stairLength*0, this.y, this.x + stairLength*0.2, this.y-5, this.x + stairLength*0.2, this.y+5);   
                triangle(this.x + stairLength*0.2, this.y, this.x + stairLength*0.4, this.y-5, this.x + stairLength*0.4, this.y+5);
                triangle(this.x + stairLength*0.4, this.y, this.x + stairLength*0.6, this.y-5, this.x + stairLength*0.6, this.y+5);
                triangle(this.x + stairLength*0.6, this.y, this.x + stairLength*0.8, this.y-5, this.x + stairLength*0.8, this.y+5);
                triangle(this.x + stairLength*0.8, this.y, this.x + stairLength*1, this.y-5, this.x + stairLength*1, this.y+5);
                break;
            case "slider-right":
                noStroke();
                fill(179,242,255);
                triangle(this.x + stairLength*0, this.y-5, this.x + stairLength*0, this.y+5, this.x + stairLength*0.2, this.y);   
                triangle(this.x + stairLength*0.2, this.y-5, this.x + stairLength*0.2, this.y+5, this.x + stairLength*0.4, this.y);
                triangle(this.x + stairLength*0.4, this.y-5, this.x + stairLength*0.4, this.y+5, this.x + stairLength*0.6, this.y);
                triangle(this.x + stairLength*0.6, this.y-5, this.x + stairLength*0.6, this.y+5, this.x + stairLength*0.8, this.y);
                triangle(this.x + stairLength*0.8, this.y-5, this.x + stairLength*0.8, this.y+5, this.x + stairLength*1, this.y);
                break;    
            case "spring":
                strokeWeight(2);
                stroke(0, 179, 89);
                line(this.x, this.y-4, this.x + stairLength, this.y-4);
                line(this.x, this.y+4, this.x + stairLength, this.y+4);
                break;
            case "flip":
                strokeWeight(10);
                if(this.valid){
                    stroke(205,149,117);
                }else{
                    stroke(255,0,255);
                }
                line(this.x, this.y, this.x + stairLength, this.y);
                break;
                
        }     
        //For spring
        // strokeWeight(2);
        // stroke(255, 0, 255);
        // line(this.x, this.y-4, this.x + stairLength, this.y-4);
        // line(this.x, this.y+4, this.x + stairLength, this.y+4);
    }
}