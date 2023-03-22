let saveEl=document.getElementById("save-El");
let countEl=document.getElementById("count");
let count=0 
function countinc(){
     count=count+1  
    countEl.innerText=count;
}

function countdec(){
     count=count-1  
   countEl.innerText=count;
}

function reset(){
    count=0
    countEl.innerText=count;
}

function save(){
    let countstr=count+" - "
    saveEl.textContent+=countstr
    countEl.innerText=0
}
