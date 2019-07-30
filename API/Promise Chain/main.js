// console.log('init begin')
// asyncFn('some async data')
// .then(data =>{ 
//     console.log(data);
//     return 'the other async data'
// })
// .then(data => asyncFn(data))
// .then(data =>{ 
//     console.log(data);
//     return 'init end'
// })
// .then(data => console.log(data));

//The way we do above can be written below

async function aaa(asyncData){
    let a =  await asyncFn(asyncData);
    return a;
}

async function init(){
    console.log('init begin')
    console.log(await aaa('some async data'));
    console.log(await aaa('the other async data'));
    console.log('init end')
}


init();



function asyncFn(data) {
	return new Promise(function(resolve, reject) {
      		 //console.log('Async received data:', data);
			 setTimeout(function(){
				resolve(data);
			 }, 1000);
		   });
}

