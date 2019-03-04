function checkComboType(_type, _numOfEachType, _numOfEachSum, num){
    switch(_type){
        case 'red': _numOfEachType[0]++; _numOfEachSum[0]+= num ; break;
        case 'blue': _numOfEachType[1]++; _numOfEachSum[1]+= num ;break;
        case 'yellow': _numOfEachType[2]++; _numOfEachSum[2]+= num ;break;
        case 'green':  _numOfEachType[3]++; _numOfEachSum[3]+= num ;break;
        case 'purple':  _numOfEachType[4]++; _numOfEachSum[4]+= num ;break;
        default: break;
    }
}

class grid{
    constructor(){
        this.cells = new Array(cols);
        for(let i = 0; i < cols; i++){
            this.cells[i] = new Array(rows);
            for(let j = 0; j < rows; j++){
                this.cells[i][j] = new cell(i, j)
            }
        }
    }

    doneSetting(){
        for(let i = 0; i < cols; i++){        
            for(let j = 0; j < rows; j++){
                cell.setImg(this.cells[i][j]);
            }
        }    
    }

    assignNeighbors(){
        for(let i = 0; i < cols; i++){
            for(let j = 0; j < rows; j++){
                this.cells[i][j].right = this.cells[i][j].left = this.cells[i][j].top = this.cells[i][j].bottom =  undefined;
                if(i < cols -1) this.cells[i][j].right = this.cells[i+1][j];
                if(i > 0) this.cells[i][j].left = this.cells[i-1][j];
                if(j < rows -1) this.cells[i][j].bottom = this.cells[i][j+1];
                if(j > 0) this.cells[i][j].top = this.cells[i][j-1];
            }
        }
    }

    drawGrid(){
        for(let i = 0; i < cols; i++){
            for(let j = 0; j < rows; j++){
                this.cells[i][j].drawCell();
            }
        }
    }

    onSelectingCell(x, y){
        if(x >= _width) x = _width-1
        else if(x < 0) x = 0     
        if(y >= _height) y = _height-1
        else if(y < 0) y = 0    
        const pos = [floor(x/resolution),floor(y/resolution)];
        this.cells[pos[0]][pos[1]].isIntersect = true;
       
        if(!(pos[0]==startCell[0] && pos[1]==startCell[1])){      
            cell.swapCell(startCell, pos, this.cells);
            startCell = pos;
            //console.log(startCell[0], startCell[1])      
        }
    }

    findCombo(){
        let sum = 0;
        let combolists_Horizontal = {'list':[],'end':[]};
        let combolists_Vertical = {'list':[],'end':[]};
        let numOfEachType = [0,0,0,0,0];
        let numOfEachSum = [0,0,0,0,0];

        for(let i = 0; i < cols; i++){
            for(let j = 0; j < rows; j++){
                let Rdata = {'list':[],'num':0,'color':undefined};
                let Bdata = {'list':[],'num':0,'color':undefined};

                let rightResult = this.cells[i][j].checkRight(this.cells[i][j],Rdata);     
                let bottomResult = this.cells[i][j].checkBottom(this.cells[i][j],Bdata);

                if(rightResult.num >= 3){
                    const Hr_end = rightResult.list[rightResult.num-1];
                    const _index =combolists_Horizontal.end.indexOf(Hr_end);
                    if(_index > -1){
                        if(rightResult.num > combolists_Horizontal.list[_index].num){
                            combolists_Horizontal.list[_index] = rightResult  
                        }
                    }else{
                        combolists_Horizontal.list.push(rightResult);
                        combolists_Horizontal.end.push(Hr_end);                   
                    }
                }

                if(bottomResult.num >= 3){
                    const Vr_end = bottomResult.list[bottomResult.num-1];
                    const _index =combolists_Vertical.end.indexOf(Vr_end);
                    if(_index > -1){
                        if(bottomResult.num > combolists_Vertical.list[_index].num){
                            combolists_Vertical.list[_index] = bottomResult  
                        }
                    }else{
                        combolists_Vertical.list.push(bottomResult);
                        combolists_Vertical.end.push(Vr_end);                   
                    }
                }
            }
        }
        
        combolists_Horizontal.list.forEach(e =>{ 
            checkComboType(e.color, numOfEachType, numOfEachSum, e.list.length);
            e.list.forEach(el=>{
                el.isCombo = true;
                sum++;
            })
        })
        combolists_Vertical.list.forEach(e =>{
            checkComboType(e.color, numOfEachType, numOfEachSum, e.list.length);
            e.list.forEach(el=>{
                el.isCombo = true;
                sum++;
            })
        })
        
        return {'combo':combolists_Horizontal.list.length + combolists_Vertical.list.length,'sum':sum, 'numOfEachSum': numOfEachSum,'numOfEachType':numOfEachType}
    } 
    

    resetGrid(){
        for(let i = 0; i < cols; i++){
            for(let j = 0; j < rows; j++){
                this.cells[i][j].isIntersect = false;
            }
        }        
    }

    resetCombo(){
        for(let i = 0; i < cols; i++){
            for(let j = 0; j < rows; j++){
                this.cells[i][j].isCombo = false;
            }
        } 
    }

    clearCombo(){
        for(let i = 0; i < cols; i++){
            let j = 0;
            while(j < this.cells[i].length){
                if(this.cells[i][j].isCombo){
                    this.cells[i][j].img.remove();
                    this.cells[i].splice(j,1);
                    j--;
                }
                j++;          
            }
        }
        for(let i = 0; i < cols; i++){
            while(this.cells[i].length < rows){
              const firstY = this.cells[i][0].y/resolution;
              let newCell = new cell(i, firstY - 2 );
              cell.setImg(newCell);
              this.cells[i].unshift(newCell);            
            }
        }
        for(let i = 0; i < cols; i++){
            for(let j = 0; j < rows; j++){
                const finalY = j * resolution; 
                const Yoff = finalY - this.cells[i][j].y;
                cell.dropAnamation(finalY, this.cells[i][j], Yoff/shiftSteps);
            }
        }           
    }
}