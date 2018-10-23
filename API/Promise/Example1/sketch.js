function setup(){
  noCanvas();
  delay('bla')
  .then(()=>createP('Hello'))
  .catch((err)=>console.log(err))
}

function delay(time){


  return new Promise((resolve,reject)=>{

      if(isNaN(time)){
        reject(new Error('delay requires a valid number'));
      }else{
        setTimeout(resolve,time)
      }
    });
  //setTimeout(sayHello,time);
}

// function sayHello(){
//   createP('Hello')
// }
