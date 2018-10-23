
function Node(value) {
    this.value = value;
    this.edges = [];
    this.searched = false;
    this.parent = null;
  }
  
  Node.prototype.addEdge = function(neighbor) {
    this.edges.push(neighbor);
    // Both directions!
    neighbor.edges.push(this);
  }

  Node.prototype.addStack = function(target,tmp){
    tmp.push(this)
    
    if(this == target){
      return 'find'
    }else{
      let result;
      let stack=[];
      for(let i = 0; i < this.edges.length ; i++){
        stack.push(this.edges[i])
      }
      // if(this.parent != null){
      //   for(let i = 0; i<stack.length; i++){
      //     if(stack[i] == this.parent){
      //        stack.splice(i,1)
      //     }
      //   }
      // }
      while(stack.length>0){
        let edge = stack.shift();
        if(!edge.searched){
          edge.parent = this
          edge.searched = true
          result = edge.addStack(target,tmp)
          if(result == 'find'){
            break;
          }
        }
      }
      
      if(result == 'find'){
        return 'find'
      }else{
        return 'done'
      }
    }
  }
