let x='';
let operator = '';
let y =0;
let tillnow = '';

document.getElementById("1").onclick = function(){updated(); x+='1'; updated();}
document.getElementById("2").onclick = function(){updated();x+='2'; updated();}
document.getElementById("3").onclick = function(){updated();x+='3'; updated();}
document.getElementById("4").onclick = function(){updated();x+='4';updated();}
document.getElementById("5").onclick = function(){updated();x+='5';updated();}
document.getElementById("6").onclick = function(){updated();x+='6';updated();}
document.getElementById("7").onclick = function(){updated();x+='7';updated();}
document.getElementById("8").onclick = function(){updated();x+='8';updated();}
document.getElementById("9").onclick = function(){updated();x+='9';updated();}
document.getElementById("0").onclick = function(){updated();x+='0';updated();}

document.getElementById("c").onclick = function(){
    x='By Amash';
    operator = '';
    updated();
}


document.getElementById("+").onclick = function(){
    y = Number(x);
    x='';
    operator = '+'
    updated();
}


document.getElementById("-").onclick = function(){
    y = Number(x);
    x='';
    operator = '-'
    updated();
}

document.getElementById("*").onclick = function(){
    y = Number(x);
    x='';
    operator = '*'
    updated();
}


document.getElementById("=").onclick = function(){
    let a = Number(x);
    console.log(x);
    let result = 0;

    if (operator === '+') {
        result = y + a;
    } else if (operator === '-') {
        result = y - a;
    } else if (operator === '*') {
        result = y * a;
    }
    document.getElementById("inp").textContent = result;
    
    x = result.toString();
    operator = '';
    y = 0;
    tillnow = '';
};



function updated(){

    if(operator!=''){
        document.getElementById("inp").textContent =  y + ' ' + operator + ' ' + x;
    }
    else{
    document.getElementById("inp").textContent = x;
    if(x==='By Amash'){
        x='';}}
}
