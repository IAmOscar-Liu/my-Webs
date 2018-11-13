const  resolution = 50
const  col = 10;
const  row = 10;
const NumOfMines = 10;
let firstPress = true;
const totalCells = col*row;
let remainingMines = NumOfMines;
let onClearMine = false;
let Grids;
let canvas;
let gameStatus = 'playing';


function setup(){
  document.querySelector('#pp span').innerHTML =  remainingMines;
  document.getElementById('myBtn').innerHTML = "Clear mine"; 
  canvas = createCanvas(resolution*col,resolution*row)
  canvas.parent('sketch-holder');
  //background(51)
  canvas.mousePressed(handleCanvas)
  document.getElementById('sketch-holder').style.width = `${width}px`;
  document.getElementById('sketch-holder').style.height = `${height}px`;

  Grids = new grids();
  Grids.initGrids();
  //Grids.assignMines();
  //Grids.assignNeighbors()
  //Grids.assignNumOfMinesNearby();

  Grids.drawGrids();
}

function handleCanvas(){

    let indexR = floor(mouseY/resolution)
    let indexC = floor(mouseX/resolution)
    //console.log(indexR,indexC)
    if(firstPress){
        firstPress = false
        Grids.assignMines(indexR,indexC);
        Grids.assignNeighbors()
        Grids.assignNumOfMinesNearby();
    }
    if(onClearMine){
        onClearMine = false;
        document.getElementById('myBtn').innerHTML = 'Clear mine';
        if(!Grids.cells[indexR][indexC].visited){
            //Grids.cells[indexR][indexC].hasBeenCleared = !Grids.cells[indexR][indexC].hasBeenCleared;
            if(!Grids.cells[indexR][indexC].hasBeenCleared){
                Grids.cells[indexR][indexC].hasBeenCleared=true
                remainingMines--;
            }else{
                Grids.cells[indexR][indexC].hasBeenCleared=false
                remainingMines++;
            }
            
            document.querySelector('#pp span').innerHTML =remainingMines
        }       
    }else{
        Grids.handlePress(indexR,indexC)
    }
    Grids.drawGrids();
    if(gameStatus=='gameover'){
        drawGameover(indexR,indexC);
    }
    countNumOfUnVisitedCells();

}

function countNumOfUnVisitedCells(){
    let numOfVisited = 0;
    for(let r = 0; r<row; r++){
        for(let c = 0; c<col; c++){
            if(Grids.cells[r][c].visited){
                numOfVisited++
            }
        }
    }
    if((totalCells-numOfVisited)==10){
        //console.log('You Win!!!');
        gameStatus='winning';
        document.getElementById('myBtn').disabled = true;
        document.getElementById('cot').style.display = 'block';
        //document.getElementById('cot').style.width = `${width}px`;
        //document.getElementById('cot').style.height = `${height}px`;
        document.getElementById('message').style.display="flex";
        document.querySelectorAll('#message p')[1].style.display = 'block';
        Grids.drawGrids();
    }
}

function handleClearMine(){
    if(!onClearMine){
        onClearMine = true;
        document.getElementById('myBtn').innerHTML = 'Cancel';
    }else{
        onClearMine = false;
        document.getElementById('myBtn').innerHTML = 'Clear mine';
    };
}

function drawGameover(r,c){
    stroke(255,0,0);
    strokeWeight(5);
    line(c*resolution,r*resolution,(c+1)*resolution,(r+1)*resolution)
    line((c+1)*resolution,r*resolution,c*resolution,(r+1)*resolution);
    document.getElementById('myBtn').disabled = true;
    document.getElementById('cot').style.display = 'block';
    //document.getElementById('cot').style.width = `${width}px`;
    //document.getElementById('cot').style.height = `${height}px`;
    document.getElementById('message').style.display="flex";
    document.querySelectorAll('#message p')[0].style.display = 'block';
}

function reload(){
    window.location.reload();
}



