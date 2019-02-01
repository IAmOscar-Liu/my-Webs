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
  addingScoreStepByStep(newScore, stepAdding);
}

function addingScoreStepByStep(newScore, stepAdding){
  if(score != newScore){
      score += stepAdding;
      document.querySelectorAll('#info span')[1].innerHTML = score;
      setTimeout(()=>addingScoreStepByStep(newScore, stepAdding),50)
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

document.querySelectorAll("button[name='myBtn']").forEach((btn,i)=>{
   btn.addEventListener('click',e=>{
       gameStatus = 'waiting';
       const _type = e.target.value;
       let _sum = 0;
       for(let i = 0; i < cols; i++){
          for(let j = 0; j < rows; j++){
              if(Grid.cells[i][j].type == _type){
                  Grid.cells[i][j].isCombo = true;
                  _sum++;
              } 
          }
      }
      setCover(`Clear ${_type}`);
      addScore({'combo':1, 'sum':_sum}, 1);
      setTimeout(()=> Grid.clearCombo(),500);
      setTimeout(()=> autoDropping(),700 + shiftDelay * shiftSteps);
      btn.disabled = true;
   })
})