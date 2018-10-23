function wave(centerLocation,type,color){
    this.radius = 0;
    this.color = [color[0],color[1],color[2]];
    this.centerLocation = centerLocation;
    this.type = type //true:circle false:half circle
    this.hasSubCenterWave = false;
    this.hasSubSidesWave = false;
  }
  
  wave.prototype.expendRadius = function(){
    this.radius += speed;
    stroke(this.color[0],this.color[1],this.color[2])
    strokeWeight(2);
    noFill();
    if(this.type){ 
      ellipse(this.centerLocation.x, this.centerLocation.y, this.radius);
    }else{
      arc(this.centerLocation.x, this.centerLocation.y, this.radius, this.radius, PI, 0);
    }
  }