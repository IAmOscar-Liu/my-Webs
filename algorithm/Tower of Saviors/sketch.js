const _width = 500;
const _height = 500;
const cols = 10;
const rows = 10;
const resolution = _width/cols;
let Grid;
const candyType = [{"type":"red","prob":0.2},{"type":"yellow","prob":0.2},{"type":"green","prob":0.2},{"type":"blue","prob":0.2},{"type":"purple","prob":0.2}];
const shiftSteps = 10;
const shiftDelay = 50;
let score = 0;
let gameStatus = 'avalible';
let startCell ;
let totalCombo = 0
let life = 3;
let isGameover = false;
let best = 0;
let TotalEachOfType = [0,0,0,0,0];
let TotalEachOfScore = [0,0,0,0,0];
let myTimeout = undefined;

function setup(){
    let canvas = createCanvas(_width,_height);
    canvas.parent('sketch-holder');
    document.getElementById('sketch-holder').setAttribute('style',`width:${width}px; height:${height}px`);
    do {
        Grid = new grid();
        Grid.assignNeighbors();
    }while (Grid.findCombo().combo > 0);
    Grid.doneSetting();
    background(51);
    Grid.drawGrid();
}

function draw(){  
    if(mouseIsPressed && gameStatus=='pressing') Grid.onSelectingCell(mouseX, mouseY);    
    if(gameStatus != 'avalible'){
        background(51);
        Grid.drawGrid();
        Grid.resetGrid();
    }
}

function mousePressed(){
    if(gameStatus == 'avalible' && mouseX >= 0 && mouseX < _width && mouseY >= 0 && mouseY < _height){
        gameStatus = 'pressing';
        document.querySelector('div.inner-time-bar').classList.add('anim');
        myTimeout = setTimeout(()=>handleReleased(),5000)
        //console.log('press start');
        startCell = [floor(mouseX/resolution),floor(mouseY/resolution)];  
        //console.log(startCell[0], startCell[1])
    }//else console.log('not yet')      
}

function handleReleased(){
    if(gameStatus == 'pressing'){
        gameStatus = 'waiting';
        document.querySelector('div.inner-time-bar').classList.remove('anim');
        Grid.resetCombo();
        Grid.assignNeighbors();
        const comboThisTime = Grid.findCombo();
        if(comboThisTime.combo > 0){
            addScore(comboThisTime, 2);
            setCover(totalCombo += comboThisTime.combo);
            //console.log('combo: '  totalCombo) ;
            setTimeout(()=> Grid.clearCombo(),500);
            setTimeout(()=> autoDropping(),700 + shiftDelay * shiftSteps); 
        }else{
            handleOops();
            setCover('Oops!!!');
            setTimeout(()=> {
                gameStatus = 'avalible';
                clearCover();
            },1100);          
        } 
    } 
}


function mouseReleased(){
    clearTimeout(myTimeout)
    handleReleased()
}


function autoDropping(){
    Grid.resetCombo();
    Grid.assignNeighbors();
    const comboThisTime = Grid.findCombo()
    if(comboThisTime.combo > 0){
        addScore(comboThisTime, 1);          
        setCover(totalCombo += comboThisTime.combo);
        // console.log('comboAll: ' + totalCombo + 'comboThistime: ' +comboThisTime.combo ) ;
        setTimeout(()=> Grid.clearCombo(),500);
        setTimeout(()=> autoDropping(),700 + shiftDelay * shiftSteps); 
    }else{
        if(totalCombo > best){
            best = totalCombo;
            document.querySelectorAll('#info span')[2].innerHTML = best;
        }
        gameStatus = 'avalible';
        totalCombo = 0;
        clearCover();      
    }   
}