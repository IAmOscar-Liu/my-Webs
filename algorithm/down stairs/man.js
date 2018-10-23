let bounceSpeed = -6;
let life = 5; 

function showGameover(){
    let go = createDiv(`<p>Game Over</p><p>Final Basement: ${basement}</p><button onclick='restart()'>Restart</button>`).addClass('go');
    go.position(_width*0.5,_height*0.5)
}

function restart(){
    window.location.reload();
}

class man{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.yVel = -2;
        this.color = [255,255,255];
        this.onStair = null;
        this.jump = false; //if the man step on the spring and jump
        this.onSpikeCount = 0 //count how long the man step on the spike
        this.onFlipCount = 0 //count how long the man step on the flip
    }
    showMan(){
        noStroke();
        fill(this.color[0],this.color[1],this.color[2]); 
        ellipse(this.x, this.y,20);   
    }

    fallingcontrol(){
      //let fallingSpeed = this.yVel;  
      this.yVel = this.yVel + gravity;
      this.y = this.y + this.yVel
    }
    
    isGameOver(){
        if(this.y > _height + 10 || life <= 0){
            showGameover();
            noLoop();
        }
    }

    isHitTop(){
        if(this.y <= 10 && this.onStair !=null ){
            life--;  
            //console.log('hit top',life)
            this.onStair.valid = false;
            this.onStair = null;
            this.color = [255,0,0];
        }else if(this.y <= 10 && this.jump){
            life--;  
            //console.log('jump hit top',life)
            this.y = 11
            this.yVel = 0;
            this.color = [255,0,0];
            //this.yVel = 0 + gravity;
            //this.y = this.y + this.yVel
        }
        
    }

    behavior(){
        switch (this.onStair.type) {
            case "normal":
                this.y = this.y - yShift;
                this.jump = false; 
                break;
            case "slider-left":
                this.x = this.x - sliderSpeed 
                this.y = this.y - yShift;
                this.jump = false; 
                break;
            case "slider-right":
                this.x = this.x + sliderSpeed 
                this.y = this.y - yShift;
                this.jump = false; 
                break;
            case "spike":
                this.onSpikeCount++
                this.color = [255,0,0];
                if(this.onSpikeCount==1){
                    //trigger only the first time
                    life--
                    //console.log('ouch !!!',life);         
                }
                this.y = this.y - yShift;
                this.jump = false; 
                break;
            case "spring":
                this.yVel = bounceSpeed 
                this.y = this.y + this.yVel
                //console.log('jump')
                this.jump = true; 
                break;
            case "flip":
                this.onFlipCount++
                if(this.onFlipCount==30){
                    //trigger when the count to 10
                    this.onStair.valid = false;
                    this.onStair = null;          
                }
                this.y = this.y - yShift;
                this.jump = false; 
                break;                 
            default:
        } 
    }
}