let countEl= document.getElementById("count")
let saveEl= document.getElementById("save-el")
let count=0;

function increment(){
    count=count+1
   countEl.innerText=count;
    console.log("pressed")
}

function decrement(){
    count=count-1  
    countEl.innerText=count;
    //console.log(count)
}

function reset(){
    count=0 
   countEl.innerText=count;
    //console.log(count)
}

function save(){
    let countstr=count+" - "
    saveEl.textContent+=countstr
    countEl.innerText=0
}