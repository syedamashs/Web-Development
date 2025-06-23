

const arr = ["Rock","Paper","Scissor"];

let rand = Math.floor(Math.random()*3);

console.log(arr[rand]);
let count=0;
let compcount =0;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const p1 = document.getElementById("p1");
const p3 = document.getElementById("p3");
const p2 = document.getElementById("p2");
const restart = document.getElementById("restart");
const compchoice = document.getElementById("compchoice");


btn1.addEventListener("click",event=>{
    if(arr[rand]==="Scissor"){
        p2.textContent = "You Won"
        count+=1;
    }
    else if(arr[rand]==="Rock"){
        p2.textContent = "Round - Draw"
    }
    else{
        p2.textContent = "Computer Won"
        compcount +=1;
        p3.textContent = `Computer Points: ${compcount}`;
    }

    compchoice.textContent = `Computer: ${arr[rand]}`;
    p1.textContent = `Your Points: ${count}`;
    rand = Math.floor(Math.random()*3);
    console.log(arr[rand]);

    if(count === 10 || compcount===10){
    if(count===10){
        compchoice.textContent = "You WON the Game!!!";
    }
    else{
        compchoice.textContent = "Computer WON the Game!!!";
    }

    p2.textContent="Result"
    p1.textContent="Your Points: 0"
    p3.textContent="Computer Points: 0"
    count=0;
    compcount=0;
    return;
}
})

btn2.addEventListener("click",event=>{
    if(arr[rand]==="Rock"){
        p2.textContent = "You Won"
        count+=1;
    }
    else if(arr[rand]==="Paper"){
        p2.textContent = "Round - Draw"
    }
    else{
        p2.textContent = "Computer Won"
        compcount +=1;
        p3.textContent = `Computer Points: ${compcount}`;
    }

    compchoice.textContent = `Computer: ${arr[rand]}`;
    p1.textContent = `Your Points: ${count}`;
    rand = Math.floor(Math.random()*3);
    console.log(arr[rand]);

    if(count === 10 || compcount===10){
    if(count===10){
        compchoice.textContent = "You WON the Game!!!";
    }
    else{
        compchoice.textContent = "Computer WON the Game!!!";
    }

    p2.textContent="Result"
    p1.textContent="Your Points: 0"
    p3.textContent="Computer Points: 0"
    count=0;
    compcount=0;
    return;
}
})

btn3.addEventListener("click",event=>{
    if(arr[rand]==="Paper"){
        p2.textContent = "You Won"
        count+=1;
    }
    else if(arr[rand]==="Scissor"){
        p2.textContent = "Round - Draw"
    }
    else{
        p2.textContent = "Computer Won"
        compcount +=1;
        p3.textContent = `Computer Points: ${compcount}`;
    }

    compchoice.textContent = `Computer: ${arr[rand]}`;
    p1.textContent = `Your Points: ${count}`;
    rand = Math.floor(Math.random()*3);
    console.log(arr[rand]);

    if(count === 10 || compcount===10){
    if(count===10){
        compchoice.textContent = "You WON the Game!!!";
    }
    else{
        compchoice.textContent = "Computer WON the Game!!!";
    }

    p2.textContent="Result"
    p1.textContent="Your Points: 0"
    p3.textContent="Computer Points: 0"
    count=0;
    compcount=0;
    return;
}
})

restart.addEventListener("click",event=>{
    compchoice.textContent=""
    p2.textContent="Result"
    p1.textContent="Your Points: 0"
    p3.textContent="Computer Points: 0"
    count=0;
    compcount=0;
    return;
})



let rps = document.querySelectorAll(".buttons");

rps.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hover");
    })
})


rps.forEach(button=>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hover");
    })
})


let rpsn = document.querySelectorAll(".buttonsnew")

rpsn.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hovern");
    })
})


rpsn.forEach(button=>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hovern");
    })
})


const toggle = document.getElementById("toggle");

toggle.addEventListener("click",event=>{

    if(document.body.style.color === "white"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    
    else{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    }
})

