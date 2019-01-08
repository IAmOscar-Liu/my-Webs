/*
  https://law.moj.gov.tw/Law/LawSearchResult.aspx?p=A&t=A1A2E1F1&k1=%E6%B0%91%E6%B3%95
*/


let AllLaws = document.querySelectorAll('#Content2 .TableLawAll tbody tr')

let search = "失蹤"



if(typeof search == 'number'){
    search = search.toString()
}

for(law of AllLaws){
    law.style.display = 'block';
    isFind = false;
    
    if(law.querySelector('td:first-of-type a')){
        let str = law.querySelector('td:first-of-type a').innerText;
        let res;
        let subRes;
        if(str.includes('-')){
          let n = str.indexOf('-');
           subRes = str.slice(2, str.length-2);
           res = str.slice(2, n);     
        }else{
            res = str.slice(2, str.length-2);
        }

        if(search == res || search == subRes){
            isFind = true;
            law.style.backgroundColor = 'yellow';

            let strHead = law.querySelector('td:first-of-type a').innerText;
            let resHead = strHead.split(search).join(`<span style= 'background-color:red'>${search}</span>`)
            law.querySelector('td:first-of-type a').innerHTML = resHead     

        }
    }
    
    
    if(law.querySelector('td:last-of-type pre').innerText.includes(search)){
        isFind = true
        law.style.backgroundColor = 'yellow';
    
        let str = law.querySelector('td:last-of-type pre').innerText;
        let res = str.split(search).join(`<span style= 'background-color:red'>${search}</span>`)
        law.querySelector('td:last-of-type pre').innerHTML = res;   
    } 
    
    if(!isFind){
        law.style.display = 'none';
    }    
}






/*************************************************************************************** */



let backup = {};
let search = "失蹤"



if(typeof search == 'number'){
    search = search.toString()
}


document.querySelectorAll('#Content2 .TableLawAll tbody tr').forEach((law, _i)=>{
        
    if(backup[_i]){
        if(backup[_i].head){
            //console.log(law.querySelector('td:first-of-type a').innerHTML)
            law.querySelector('td:first-of-type a').innerHTML = backup[_i].head
            //console.log(law.querySelector('td:first-of-type a').innerHTML)
            backup[_i].head = null
        }
        if(backup[_i].body){
            //console.log(law.querySelector('td:last-of-type pre').innerHTML)
            law.querySelector('td:last-of-type pre').innerHTML = backup[_i].body
            //console.log(law.querySelector('td:last-of-type pre').innerHTML)
            backup[_i].body = null
        }        
    }

    law.style.display = 'block';
    law.style.backgroundColor = 'white';
    isFind = false;
    
    if(law.querySelector('td:first-of-type a')){
        let str = law.querySelector('td:first-of-type a').innerText;
        let res;
        let subRes;
        if(str.includes('-')){
          let n = str.indexOf('-');
           subRes = str.slice(2, str.length-2);
           res = str.slice(2, n);     
        }else{
            res = str.slice(2, str.length-2);
        }

        if(search == res || search == subRes){
            isFind = true;      
            law.style.backgroundColor = 'yellow';

            let strHead = law.querySelector('td:first-of-type a').innerText;        
            backup[_i] = {head:strHead}
            let resHead = strHead.split(search).join(`<span style= 'background-color:red'>${search}</span>`)
            law.querySelector('td:first-of-type a').innerHTML = resHead     

        }
    }
    
    
    if(law.querySelector('td:last-of-type pre').innerText.includes(search)){
        isFind = true
        law.style.backgroundColor = 'yellow';
    
        let str = law.querySelector('td:last-of-type pre').innerText;
        backup[_i] = {body:str}
        let res = str.split(search).join(`<span style= 'background-color:red'>${search}</span>`)
        law.querySelector('td:last-of-type pre').innerHTML = res;   
        

    }    
    if(!isFind){
        law.style.display = 'none';
    }
})

