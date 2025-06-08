let x ;
document.getElementById("myh1").textContent = x;


document.getElementById("inc").onclick = function (){
    x=x+1;
    document.getElementById("myh1").textContent = x;
}

document.getElementById("res").onclick = function (){
    x=0;
    document.getElementById("myh1").textContent = x;
}

document.getElementById("dec").onclick = function (){
    x=x-1;
    document.getElementById("myh1").textContent = x;
}

