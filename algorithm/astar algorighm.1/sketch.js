function removeFromArray(arr, elt) {
  // Could use indexOf here instead to be more efficient
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == elt) {
      arr.splice(i, 1);
    }
  }
}

// An educated guess of how far it is between two points
function heuristic(a, b) {
  var d = dist(a.i, a.j, b.i, b.j);
  // var d = abs(a.i - b.i) + abs(a.j - b.j);
  return d;
}

// How many columns and rows?
var cols = 50;
var rows = 50;

// This will be the 2D array
var grid = new Array(cols);

// Open and closed set
var openSet = [];
var closedSet = [];

// Start and end
var start;
var end;

// Width and height of each cell of grid
var w, h;

// The road taken
var path = [];

function setup() {
  createCanvas(400, 400);
  console.log('A*');

  // Grid cell size
  w = width / cols;
  h = height / rows;

  // Making a 2D array
  for (var i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  // All the neighbors
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].addNeighbors(grid);
    }
  }


  // Start and end
  start = grid[0][0];
  start.g = 0;
  end = grid[cols - 1][rows - 1];
  start.f = heuristic(start, end)
  start.wall = false;
  end.wall = false;

  // openSet starts with beginning only
  openSet.push(start);
}

function draw() {

  // Am I still searching?
  if (openSet.length > 0) {

    // Best next option
    var winner = 0;
    var minF = Infinity
    for (var i = 0; i < openSet.length; i++) {
      if (openSet[i].f < minF) {
        minF = openSet[i].f 
        winner = i;
      }
    }
    var current = openSet[winner];

    // Did I finish?
    if (current === end) {
      noLoop();
      console.log("DONE!");
    }

    // Best option moves from openSet to closedSet
    //removeFromArray(openSet, current);
    openSet.splice(openSet.indexOf(current), 1)
    closedSet.push(current);

    // Check all the neighbors
    var neighbors = current.neighbors;
    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
      if(closedSet.includes(neighbor) || neighbor.wall) continue; //neighbor in closedSet
      // Ignore the neighbor which is already evaluated.
    
      // The distance from start to a neighbor
      let tentative_gScore = current.g + heuristic(current, neighbor);

      if(!openSet.includes(neighbor)){ //neighbor not in openSet	// Discover a new node
        openSet.push(neighbor)
      }else if (tentative_gScore >= neighbor.g) continue;
      
      // This path is the best until now. Record it!
      neighbor.previous = current;
      neighbor.g = tentative_gScore
      neighbor.f = neighbor.g + heuristic(neighbor, end);
    }

    drawPath(current);
  
  } else {  // Uh oh, no solution
    console.log('no solution');
    noLoop();
    return;
  }


}

function drawPath(current){

  // Draw current state of everything
  background(255);

  for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
      grid[i][j].show();
      }
  }
  
  for (var i = 0; i < closedSet.length; i++) {
      closedSet[i].show(color(255, 0, 0, 50));
  }
  
  for (var i = 0; i < openSet.length; i++) {
      openSet[i].show(color(0, 255, 0, 50));
  }
  // Find the path by working backwards
  path = [];
  var temp = current;
  path.push(temp);
  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;
  }


  // for (var i = 0; i < path.length; i++) {
    // path[i].show(color(0, 0, 255));
  //}

  // Drawing path as continuous line
  noFill();
  stroke(255, 0, 200);
  strokeWeight(w / 2);
  beginShape();
  for (var i = 0; i < path.length; i++) {
    vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
  }
  endShape();
}