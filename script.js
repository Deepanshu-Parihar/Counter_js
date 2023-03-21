let count=0;
function increment(){
    count=count+1
    document.getElementById("count").innerText=count;
    console.log("pressed")
}

function decrement(){
    count=count-1  
    document.getElementById("count").innerText=count;
    //console.log(count)
}

function reset(){
    count=0 
    document.getElementById("count").innerText=count;
    //console.log(count)
}