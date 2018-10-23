var tree;
var nodeList=[50,20,80];
let myList = [];

function handleClick(){
  myList = []
  let num = document.getElementById('NodeNum').value
  let newNum = parseInt(num)
  nodeList.push(newNum);
  setup();
  //console.log(newNum)
}

function setup() {
  createCanvas(600, 400);
  background(51);
  tree = new Tree();
  // for (var i = 0; i < 5; i++) {
  //   tree.addValue(floor(random(0, 100)));
  // }

  for(let i = 0; i<nodeList.length; i++){
    tree.addValue(nodeList[i]);
  }

  console.log(tree);

  tree.traverse();
  tree.adjust();
  tree.linkNode();

  var result = tree.search(10);
  if (result == null) {
    console.log('not found');
  } else {
    console.log(result);
  }
}