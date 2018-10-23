function Graph() {
  this.nodes = [];
  this.end = null;
  this.start = null;
}

Graph.prototype.reset = function() {
  for (var i = 0; i < this.nodes.length; i++) {
    this.nodes[i].searched = false;
    //this.nodes[i].parent = null;
  }
}

Graph.prototype.addNode = function(n) {
  // Node into array
  this.nodes.push(n);
}

Graph.prototype.connectLine = function(i,j){
  strokeWeight(4);
  line(this.nodes[i].x, this.nodes[i].y, this.nodes[j].x, this.nodes[j].y);
  strokeWeight(1);
}

Graph.prototype.connectLoopedLine = function(i,j){
  stroke(255, 0, 255);
  line(this.nodes[i].x, this.nodes[i].y, this.nodes[j].x, this.nodes[j].y);
  stroke(255);
}