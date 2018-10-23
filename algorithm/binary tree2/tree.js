function Tree() {
  this.root = null;
}

Tree.prototype.traverse = function() {
  this.root.visit(this.root,false);
}

Tree.prototype.linkNode = function(){
  this.root.visit(this.root,true);
}

Tree.prototype.search = function(val) {
  var found = this.root.search(val);
  return found;
}

Tree.prototype.addValue = function(val) {
  var n = new Node(val);
  if (this.root == null) {
    this.root = n;
    this.root.x = width / 2;
    this.root.y = 16;
  } else {
    this.root.addNode(n);
  }
}

Tree.prototype.adjust = function(){
  let rootNode;
  let rootX;
  let index;
  
  for(let i = 0; i < myList.length; i++){
    if(myList[i].value == nodeList[0]){
      rootNode = myList[i];
      rootX = rootNode.x
      index = i
      break;
    }
  }
  
  drawCircle(rootNode)

  //console.log(rootNode,index)
  let rootXLeft = rootX;
  for(let i = index-1; i>=0;i--){
    rootXLeft -= 50;
    myList[i].x = rootXLeft;
    drawCircle(myList[i])
  }
  let rootXRight = rootX;
  for(let i = index+1; i<myList.length;i++){
    rootXRight += 50;
    myList[i].x = rootXRight;
    drawCircle(myList[i])
  }

}

function drawCircle(node){
  fill(255);
  noStroke();
  textAlign(CENTER);
  text(node.value, node.x, node.y);
  stroke(255);
  noFill();
  ellipse(node.x, node.y, 20, 20);
}