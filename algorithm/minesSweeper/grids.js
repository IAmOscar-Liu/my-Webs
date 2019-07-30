class grids{
    constructor(){
        this.cells = new Array(row)
        this.mines = []
        this.stack = []
    }

    initGrids(){
        for(let r = 0; r<row; r++){
            this.cells[r] = new Array(col)
            for(let c = 0; c<col; c++){
                let newCell = new cell(r,c)
                this.cells[r][c] = newCell
            }
        }
    }

    assignMines(indexR,indexC){
        let _count = 0
        let isRepeat = false;
        while(_count < NumOfMines){
            let r = floor(random(NumOfMines))
            let c = floor(random(NumOfMines))
            //this.mines.push(this.cells[r][c])
            if(indexR == r && indexC==c){
                isRepeat = true;
                //console.log('find repeat first')
            }else{
                for(let j= 0; j<this.mines.length;j++){
                    if(this.mines[j].row == r && this.mines[j].col == c){
                        isRepeat = true;
                        //console.log('find repeat before')
                        break;
                    }
                }
            }

            if(!isRepeat){
                this.mines.push(this.cells[r][c])
                this.cells[r][c].isMine = true
                //console.log(_count)
                //console.log(r,c)
                _count++
            }else{
                isRepeat = false
            }            
        }
        //console.log(this.mines)
    }

    assignNeighbors(){
        for(let r = 0; r< row; r++){
            for(let c = 0; c<col; c++){
                this.cells[r][c].findNeighbors()
            }
        }
    }

    assignNumOfMinesNearby(){
        for(let r = 0; r<row; r++){
            for(let c = 0; c<col; c++){
                this.cells[r][c].findNumOfMinesNearby()
            }
        }
    }

    drawGrids(){
        for(let r = 0; r<row; r++){
            for(let c = 0; c<col; c++){
                this.cells[r][c].drawCell();
            }
        }
    }

    handlePress(r,c){
        //console.log(r,c)
        //this.cells[r][c].fillColor = [255,0,255]
        if(this.cells[r][c].isMine){
            //console.log('Game over');
            gameStatus = 'gameover';
        }else if(!this.cells[r][c].visited && this.cells[r][c].numOfMinesNearby!=0){
            this.cells[r][c].visited = true;
            this.cells[r][c].fillColor = [255,0,255]
        }else if(!this.cells[r][c].visited && this.cells[r][c].numOfMinesNearby==0){
            //this.cells[r][c].visited = true;
            //this.cells[r][c].fillColor = [255,0,255]
            this.stack = [];
            //handleStack(this.cells[r][c]);
            depthSearch(this.cells[r][c])
        }
    }
}


// function handleStack(_current){
//     let current = _current;
//     while(true){
//         current.visited = true;
//         current.fillColor = [255,0,255]

//         let next = current.returnRandomNeighbor();
//         if (next) {
//             next.visited = true;
//             Grids.stack.push(current);
//             current = next;
//         } else if (Grids.stack.length > 0) {
//             current = Grids.stack.pop();
//         } else{
//             break;
//         }
//     }
// }

function depthSearch(_start){
    let start = _start;
    Grids.stack.push(start);
    while(Grids.stack.length > 0){
        let current = Grids.stack.pop();
        current.visited = true;
        current.fillColor = [255,0,255];
        for(neighbor of current.neighbors){
            if(current.numOfMinesNearby==0 && !neighbor.visited && !neighbor.isMine){
                // console.log('push',neighbor.row,neighbor.col);
                Grids.stack.push(neighbor)
            }
        }
    }
}

