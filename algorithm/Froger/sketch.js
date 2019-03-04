let grid = 50;
let Frogs = [];
let CarLanes = [];
let LogLanes = [];
let Caves = [];
const numOfLanes_Car = 4;
const numOfLanes_Log = 3;
let numOfSuccess_Frog = 0;
let life = 3;
let img;
let tmpString = '';
let myTimeout = undefined;

// function preload() {
//     img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv57P7THa-1RjXNlCBg8EATwVQZVu4mHyHXw_r4w3Sk6ozn0lc');
//   }

function setup(){
    let canvas = createCanvas(500,500);
    canvas.parent('sketch-holder');
    document.getElementById('sketch-holder').setAttribute('style',`width:${width}px; height:${height}px`);
    document.querySelectorAll('#info span')[0].innerHTML = life;
    document.querySelectorAll('#info span')[1].innerHTML = numOfSuccess_Frog;
    Frogs.push(new frog(width/2 - grid, height - grid, grid, grid)) ;
    Caves.push(new cave(width/4-grid/2,0,grid,grid))
    Caves.push(new cave(width/2-grid/2,0,grid,grid))
    Caves.push(new cave(width*0.75-grid/2,0,grid,grid))
    
    for(let i = 0; i < numOfLanes_Car; i++){
        CarLanes.push(new lane(height - grid * (i+2),'car'));
    }
    for(let i = 0; i < numOfLanes_Log; i++){
        LogLanes.push(new lane(height - (numOfLanes_Car+3+i) * grid,'log'));
    }   
}

function keyPressed(){
    //left: 37  right:39 top:38 down:40
    switch(keyCode){
        case 37: if((Frogs[0].x - grid) >= 0)  Frogs[0].x -= grid
                 else  Frogs[0].x = 0                 
                  break;
        case 39: if((Frogs[0].x + grid) <= (width-grid)) Frogs[0].x += grid
                 else Frogs[0].x = width-grid
                  break;      
        case 38: 
                if((Frogs[0].y - grid) >= grid){
                    Frogs[0].y -= grid;
                }else if(cave.isReachingCaves(Caves,Frogs[0])){
                    if(numOfSuccess_Frog == Caves.length){
                        noLoop();
                        showSuccess();
                    }else{
                        Frogs.unshift(new frog(width/2 - grid, height - grid, grid, grid))
                    }                 
                }  
                break; 
        case 40: if((Frogs[0].y + grid) <= (height-grid)) Frogs[0].y += grid;
                  break;          
        default: break;
    }

    if(key == 'G' || key == "O" || key == 'W' || key == "I" || key == 'N'){
        //console.log(`pressing ${key}`)
        tmpString += key;       
        if(myTimeout != undefined) clearTimeout(myTimeout);
        myTimeout = setTimeout(()=>{
            tmpString = '';
            myTimeout = undefined
        },1000)       

        if(tmpString == 'GO'){
            noLoop();
            showGameover();
        }
        else if(tmpString == 'WIN'){
            noLoop();
            showSuccess();
        } 

    }
    // let onlane;
    // if(Frogs[0].y <= (height-2*grid) && Frogs[0].y >=(height-5*grid)){
    //     onlane = ((height-2*grid) - Frogs[0].y)/grid
    //     console.log('on road' , onlane)
    // }else if(Frogs[0].y <= (height-7*grid) && Frogs[0].y >=(height-9*grid)){
    //     onlane = ((height-7*grid) - Frogs[0].y)/grid
    //     console.log('on water' , onlane)
    // }
    //console.log(Frogs[0].x)
}

function draw(){
    background(0);
    lane.drawEverything(CarLanes);

    CarLanes.forEach(cl =>{
        cl.addCarsOrLogs();
        cl.moveCarsOrLogs();
    })
    LogLanes.forEach(ll=> {
        ll.addCarsOrLogs();
        ll.moveCarsOrLogs();
    })

    if(lane.isHitByCar(CarLanes, Frogs[0])) Frogs[0].gameReset() ;

    let OnLog = lane.onWhichLog(LogLanes,Frogs[0]);
    if(Frogs[0].y <= (height - (numOfLanes_Car+3) * grid) && Frogs[0].y >= (height - (numOfLanes_Car+5) * grid)){
        if(OnLog){
            Frogs[0].attachLog(OnLog);
        }else{
            Frogs[0].gameReset();
        }
    }

    CarLanes.forEach(cl => {
        cl.showCarsOrLogs()
    })
    LogLanes.forEach(ll => {
        ll.showCarsOrLogs()
    })   
    Frogs.forEach((frog,index) =>{
        frog.show(index);
    })
}

