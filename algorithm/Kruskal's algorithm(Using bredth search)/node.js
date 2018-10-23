function Node(index,x,y) {
  this.index = index;
  this.x = x;
  this.y = y;
  //this.parent = null;
  this.searched = false;
  this.edges = [];
  
  //draw Node
  text(this.index, this.x, this.y);
  textAlign(CENTER);
  noFill();
  stroke(255);
  ellipse(x, y,20,20);
}

Node.prototype.addEdge = function(neighbor) {
  this.edges.push(neighbor);
  // Both directions!
  neighbor.edges.push(this);
}

