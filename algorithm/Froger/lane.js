class lane{
    constructor(yPos,type){
        this.objects = [];
        this.yPos = yPos;
        this.type = type;
        this.size = (this.type == 'car')? (floor( random(3)) + 1) * grid :(floor( random(2,4)) + 1) * grid;
        let dr = (random(1) >= 0.5) ? 1 : -1;  //1: to right; -1: to left
        this.speed = (this.type == 'car')? random(4,6) * dr : random(2,4) * dr;

        if(dr == 1){
            this.laneStart = -200 - (floor( random(3)) + 1) * grid  ;
            for(let i = 0; i < 10; i++){
                if(this.type == 'car'){
                    this.objects.push(new car(this.laneStart + i * this.size * (this.speed)*2 , this.yPos, this.size, grid, this.speed));
                }else{
                    this.objects.push(new log(this.laneStart + i * this.size * (this.speed)*0.75 , this.yPos, this.size, grid, this.speed));
                }         
            }
        }else{
            this.laneStart = width + (floor( random(3)) + 1) * grid;
            for(let i = 0; i < 10; i++){
                if(this.type == 'car'){
                    this.objects.push(new car(this.laneStart - i * this.size * (-this.speed)*2 , this.yPos, this.size, grid, this.speed));
                }else{
                    this.objects.push(new log(this.laneStart - i * this.size * (-this.speed)*0.75 , this.yPos, this.size, grid, this.speed));
                }                 
            }
        }
    }

    static drawEverything(_CarLanes){
        noStroke();
        fill(51,255,255);
        rect(0, 0, width, height);
        fill(160,160,160);
        rect(0, height - (numOfLanes_Car+1)*grid, width, height);
        fill(153,0,153);
        rect(0, height-grid, width, grid);
        rect(0, height - (numOfLanes_Car+2)*grid, width, grid)
        rect(0, 0, width/4-grid/2, grid);
        rect(width/4+grid/2, 0, width/4-grid, grid);
        rect(width/2+grid/2, 0, width/4-grid, grid);
        rect(width*0.75+grid/2, 0, width/4-grid/2, grid);
        stroke(255);
        push(); 
        translate(grid/2, 0);
        for(let i = 0; i < _CarLanes.length-1; i++){
            line(0,_CarLanes[i].yPos,width/10,_CarLanes[i].yPos);
            line(width*2/10,_CarLanes[i].yPos,width*3/10,_CarLanes[i].yPos);
            line(width*4/10,_CarLanes[i].yPos,width*5/10,_CarLanes[i].yPos);
            line(width*6/10,_CarLanes[i].yPos,width*7/10,_CarLanes[i].yPos);
            line(width*8/10,_CarLanes[i].yPos,width*9/10,_CarLanes[i].yPos);
        } 
        pop();  
    }

    addCarsOrLogs(){
        if(this.speed > 0){
            if(this.type == 'car'){
                if((this.objects[0].x - this.laneStart) >= this.size * (this.speed)*random(1,2)){
                    this.objects.pop(); 
                    this.objects.unshift(new car(this.laneStart , this.yPos, this.size, grid, this.speed))
                }
            }else{
                if((this.objects[0].x - this.laneStart) >= this.size * (this.speed)*0.75){
                    this.objects.pop(); 
                    this.objects.unshift(new log(this.laneStart , this.yPos, this.size, grid, this.speed))
                } 
            }
        }else{
            if(this.type == 'car'){
                if((this.objects[0].x - this.laneStart) <= -this.size * (-this.speed)*random(1,2)){
                    this.objects.pop(); 
                    this.objects.unshift(new car(this.laneStart , this.yPos, this.size, grid, this.speed))
                }
            }else{
                if((this.objects[0].x - this.laneStart) <= -this.size * (-this.speed)*0.75){
                    this.objects.pop(); 
                    this.objects.unshift(new log(this.laneStart , this.yPos, this.size, grid, this.speed))   
                }
            }         
        }
    }

    moveCarsOrLogs(){
        this.objects.forEach(object=>{
            object.move();
        })
    }

    showCarsOrLogs(){
        this.objects.forEach(object=>{
            object.show();
        })
    }

    static onWhichLog(_LogLanes,frog){
        let OnLog = null;
        for(let i = 0; i < _LogLanes.length; i++){
            for(let j = 0 ; j < _LogLanes[i].objects.length; j++){
                if(_LogLanes[i].objects[j].intersects(frog)){
                    OnLog = _LogLanes[i].objects[j];
                    break;
                }
            }
            if(OnLog !== null) break;
        }
        return OnLog;
    }

    static isHitByCar(_CarLanes,frog){
        let isHit = false;
        for(let i = 0; i < _CarLanes.length; i++){
            for(let j = 0 ; j < _CarLanes[i].objects.length; j++){
                if(_CarLanes[i].objects[j].intersects(frog)){
                    isHit = true;
                    break;
                }
            }
            if(isHit) break;
        } 
        return isHit;      
    }
}