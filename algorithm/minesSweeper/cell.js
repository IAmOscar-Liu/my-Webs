class cell{
    constructor(r,c){
        this.row = r;
        this.col = c;
        this.fillColor = [96,96,96]
        this.isMine = false;
        this.neighbors = [];
        this.numOfMinesNearby = 0;
        this.visited = false;
        this.hasBeenCleared = false;
    }

    findNeighbors(){
        if((this.row+1)<row){
          this.neighbors.push(Grids.cells[this.row+1][this.col])
        }
        if((this.row-1)>=0){
          this.neighbors.push(Grids.cells[this.row-1][this.col])
        }
        if((this.col+1)<col){
          this.neighbors.push(Grids.cells[this.row][this.col+1])
        }
        if((this.col-1)>=0){
          this.neighbors.push(Grids.cells[this.row][this.col-1])
        }
        if((this.col-1)>=0 && (this.row-1)>=0){
            this.neighbors.push(Grids.cells[this.row-1][this.col-1])
        }
        if((this.col-1)>=0 && (this.row+1)<row){
            this.neighbors.push(Grids.cells[this.row+1][this.col-1])
        }
        if((this.col+1)<col && (this.row-1)>=0){
            this.neighbors.push(Grids.cells[this.row-1][this.col+1])
        }
        if((this.col+1)<col && (this.row+1)<row){
            this.neighbors.push(Grids.cells[this.row+1][this.col+1])
        }
    }

    findNumOfMinesNearby(){
        for(let i = 0; i<this.neighbors.length; i++){
            if(this.neighbors[i].isMine){
                this.numOfMinesNearby++
            }
        }
    }

    returnRandomNeighbor() {
        let nonVisitedNeighbors = [];
        for(let i = 0; i<this.neighbors.length; i++){
            if(this.numOfMinesNearby==0 && !this.neighbors[i].visited &&  !this.neighbors[i].isMine){
                nonVisitedNeighbors.push(this.neighbors[i])
            }
        }

        if (nonVisitedNeighbors.length > 0) {
          let r = floor(random(0, nonVisitedNeighbors.length));
          return nonVisitedNeighbors[r];
        } else {
          return undefined;
        } 
    }

    drawCell(){
        stroke(255)
        strokeWeight(2)
        fill(this.fillColor[0],this.fillColor[1],this.fillColor[2])
        rect(this.col*resolution,this.row*resolution,resolution,resolution)
        noStroke();
        fill(192,192,192);
        if(this.isMine && !firstPress && gameStatus!='playing'){                 
            ellipse(this.col*resolution+0.5*resolution,this.row*resolution+0.5*resolution,20);
        }else if(this.numOfMinesNearby!=0 && !firstPress && this.visited){   
            textAlign(CENTER,CENTER);
            textStyle(BOLD);
            textSize(24);
            text(this.numOfMinesNearby, this.col*resolution+0.5*resolution, this.row*resolution+0.5*resolution);
         }

        if(this.hasBeenCleared){
            fill(255,0,0);
            triangle(this.col*resolution+10, this.row*resolution+10, this.col*resolution+10, this.row*resolution+30, (this.col+1)*resolution-10, this.row*resolution+20);
            stroke(255,0,0);
            strokeWeight(5);
            line(this.col*resolution+10,this.row*resolution+10,this.col*resolution+10,(this.row+1)*resolution-10)   
        }
    }
}