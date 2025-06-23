//Event Listener -- .addEventListener(event,callback)

const div1 = document.getElementById("div1");
const h1 = document.getElementById("h1");

function changecolor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Happy Birthday";
    h1.textContent = "Happy Birthday!!";
}

div1.addEventListener("click",changecolor);


div1.addEventListener("mouseover",event => {
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Go Ahead!!";
})

div1.addEventListener("mouseout",event=>{
     event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me";
    h1.textContent = "";
})