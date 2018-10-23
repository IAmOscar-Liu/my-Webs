let graph;
let nodeNum = 15;
let lineNum = 0;
let nowMin = -10000;
let sum = 0;
//let count = 0;
//let result = null;

function setup(){
    canvas = createCanvas(640,360);
    canvas.parent('sketch-holder');
    background(51);
    p = createP('Lines: '+ lineNum +' Total distance: ' + sum); 
    graph = new Graph();
    for(let i = 0; i<nodeNum; i++){
      let node = new Node(i,random(width), random(height))
      graph.addNode(node);
    }
}

function myFunction(){
    let cmp = 10000000;
    let indexI,indexJ;
    //Find the smallest dist,second smallest dist,...etc
    for(let i = 0; i < graph.nodes.length; i++){
        for(let j = 0 ; j < graph.nodes.length; j++){
            if(i == j){continue;}
            
            let d = dist(graph.nodes[i].x , graph.nodes[i].y, graph.nodes[j].x, graph.nodes[j].y);
            if(d< cmp && d > nowMin){
                cmp = d;
                indexI = i;
                indexJ = j;
            }
            
        }
    }
    resetMin(cmp)
    
    if(isLoop(graph.nodes[indexI],graph.nodes[indexJ])){       
        graph.connectLoopedLine(indexI,indexJ);
        p.html('Lines: '+ lineNum +' Total distance: ' + sum + "  !!Found Loop" );
        console.log('Found loop'+"  ,i="+indexI+",j="+indexJ+",dist"+cmp)
        myFunction();
    }else{
        graph.connectLine(indexI,indexJ);
        lineNum += 1;
        sum += cmp;
        p.html('Lines: '+ lineNum +' Total distance: ' + sum );
        console.log(lineNum+"  ,i="+indexI+",j="+indexJ+",dist"+cmp)  
        if(lineNum>=nodeNum-1){
            console.log('finished')    
            document.getElementById("myBtn").disabled = true;
            p.html('Lines: '+ lineNum +' Total distance: ' + sum + "  !!Done");
        }
    }
}

function resetMin(k){
    nowMin = k;
}

function isLoop(node1,node2){
    //Use bredth search to Find if node1 can go to node2

    graph.reset();
    let queue = [];
    let findLoop = false;

    node1.searched = true;
    queue.push(node1);
  
    while (queue.length > 0) {
      let current = queue.shift();
      if (current == node2) {
        //console.log("Found " + current.value);
        findLoop = true;
        break;
      }
      let edges = current.edges;
      for (let i = 0; i < edges.length; i++) {
        let neighbor = edges[i];
        if (!neighbor.searched) {
          neighbor.searched = true;
          //neighbor.parent = current;
          queue.push(neighbor);
        }
      }
    }

    if(findLoop){
        // console.log('found loop')
        return true
    }else{
        node1.addEdge(node2);
        return false
    }

}