class stairCases{
    constructor(){
        this.steps = [];
    }

    addNewStair(){
        let newStep = new step
        this.steps.push(newStep);
        if(this.steps.length > 20){
            this.steps.shift();
        }
    }

    shiftStaircases(n){
        for(let i = 0; i < this.steps.length; i++){
            this.steps[i].y -= n;
        }
    }

    showAllStairs(){
        for(let i = 0; i < this.steps.length; i++){
            this.steps[i].drawStair();
        }
    }

    isFalling(x,y){
        let falling = true;
        for(let i = 0; i < this.steps.length; i++){
            if(this.steps[i].valid && x >= this.steps[i].x-10 && x <= (this.steps[i].x+stairLength)+10 && y<this.steps[i].y && (this.steps[i].y-y)<=15){
                Man.y = this.steps[i].y - 15;
                Man.yVel = -2;
                Man.onStair = this.steps[i];
                falling = false;
                break;
            }
        }

        if(falling){
            Man.onStair = null;
            Man.onSpikeCount = 0;
            Man.onFlipCount = 0;
            Man.color = [255,255,255]
            //console.log(Man.onStair)
            return true;
        }else{
            //console.log(Man.onStair)
            return false;
        }
    }
}