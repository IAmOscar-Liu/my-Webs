function generator(positionX,positionY){  
    this.position = {x:positionX,y:positionY};
    this.waves = [];
  }
  
  generator.prototype.newWave = function(type,color){
    let newWave = new wave(this.position,type,color)
    this.waves.push(newWave);
    if(this.waves.length > 20){
        this.waves.shift();
    }
  }
  
  generator.prototype.expendWaves = function(){
      for(let i = 0; i<this.waves.length;i++){
          this.waves[i].expendRadius()
      }
  }
  
  // generator.prototype.popWave = function(){
  //     this.waves.shift();
  // }
  
  generator.prototype.createSubwave = function(){
    for(let i = 0; i< this.waves.length; i++){
        let d = this.waves[i].radius 
        if(!this.waves[i].hasSubCenterWave && (0.5*d) >= distance[0] ){
          // console.log(i,d,this.waves.length,this.waves[i].hasSubCenterWave)  
          this.waves[i].hasSubCenterWave = true;
          subCenterGenerator.newWave(false,this.waves[i].color)
        }
        if(!this.waves[i].hasSubSidesWave && (0.5*d) >= distance[1] ){
          // console.log(i,d,this.waves.length,this.waves[i].hasSubCenterWave)    
          this.waves[i].hasSubSidesWave = true;
          subRightGenerator.newWave(false,this.waves[i].color);
          subLeftGenerator.newWave(false,this.waves[i].color); 
        }
    }
  }