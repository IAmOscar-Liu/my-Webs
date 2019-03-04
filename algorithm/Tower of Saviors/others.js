function handleOops(){
    life--;
    document.querySelectorAll('#info span')[0].innerHTML = life;
    if(life == 0){     
        isGameover = true;
        noLoop();
        document.querySelector('#message p').innerHTML = 'Game Over';
        document.querySelector('button').setAttribute('style',`display:block`);
        document.getElementById('result').setAttribute('style',`display:block`);
        document.getElementById('message').setAttribute('style',`display:flex`); 
        document.querySelector('#message').classList.add('go');      
    }
  }
  
  function addScore(_comboThisTime, bonus){ 
      const newScore = score + _comboThisTime.combo * _comboThisTime.sum * bonus * 10;
      const stepAdding = (newScore - score)/10;
      const newAddingEachScore = new Array(5);
      const stepAddingEachScore = new Array(5);
      for(let i = 0; i < 5; i++){
         TotalEachOfType[i] += _comboThisTime.numOfEachType[i];
         newAddingEachScore[i] = TotalEachOfScore[i] + _comboThisTime.combo * _comboThisTime.numOfEachSum[i] * bonus * 10;
         stepAddingEachScore[i] =  _comboThisTime.combo * _comboThisTime.numOfEachSum[i] * bonus;
         document.querySelectorAll('#scoreInfo div')[i].querySelectorAll('p span')[0].innerText =  TotalEachOfType[i];  
      }
      addingScoreStepByStep(newScore, stepAdding, newAddingEachScore,stepAddingEachScore);
  }
  
  function addingScoreStepByStep(newScore, stepAdding, newAddingEachScore,stepAddingEachScore){
    if(score != newScore){
        score += stepAdding;
        document.querySelectorAll('#info span')[1].innerHTML = score;
        setTimeout(()=>addingScoreStepByStep(newScore, stepAdding,newAddingEachScore,stepAddingEachScore),50)
    }
    for(let i = 0; i < 5; i++){
        if(TotalEachOfScore[i] != newAddingEachScore[i]){
          TotalEachOfScore[i] += stepAddingEachScore[i];
          document.querySelectorAll('#scoreInfo div')[i].querySelectorAll('p span')[1].innerText = TotalEachOfScore[i];
          setTimeout(()=>addingScoreStepByStep(newScore, stepAdding,newAddingEachScore,stepAddingEachScore),50)
        }
    }
  }
  
  function setCover(_message){
      document.getElementById('result').setAttribute('style',`display:block`);
      document.getElementById('message').setAttribute('style',`display:flex`); 
      if(typeof _message == 'string' && !isGameover){
          document.querySelector('#message').classList.add('anim');
          document.querySelector('#message p').innerHTML = _message;
          setTimeout(()=> document.querySelector('#message').classList.remove('anim') ,1000)  
      }else if(!isGameover){  
          document.querySelector('#message').classList.add('anim');    
          document.querySelector('#message p').innerHTML = `Combo # ${_message} `;
          setTimeout(()=> document.querySelector('#message').classList.remove('anim') ,1000)  
      }       
  }
  
  function clearCover(){
      if(!isGameover){
          document.getElementById('result').setAttribute('style',`display:none`);
          document.getElementById('message').setAttribute('style',`display:none`); 
      }
  }
  
  function reload(){
      window.location.reload();
  }
  
  document.querySelectorAll("button[name='myBtn']").forEach((btn, _index)=>{
      btn.addEventListener('click',(e) =>{
          if(!isGameover && gameStatus == 'avalible'){
              gameStatus = 'waiting';
              const _type = e.target.value;
              let _sum = 0;
              let numOfEachType = [0,0,0,0,0];
              let numOfEachSum = [0,0,0,0,0];
              for(let i = 0; i < cols; i++){
                  for(let j = 0; j < rows; j++){
                      if(Grid.cells[i][j].type == _type){
                          Grid.cells[i][j].isCombo = true;
                          _sum++;
                      } 
                  }
              }
              numOfEachSum[_index] = _sum;
              numOfEachType[_index] = 1;
              //console.log(_index,numOfEachSum,numOfEachType)
              setCover(`Clear ${_type}`);
              addScore({'combo':1, 'sum':_sum,'numOfEachSum':numOfEachSum, 'numOfEachType':numOfEachType}, 1);
              setTimeout(()=> Grid.clearCombo(),500);
              setTimeout(()=> autoDropping(),700 + shiftDelay * shiftSteps);
              btn.disabled = true;
          }
      })
  })