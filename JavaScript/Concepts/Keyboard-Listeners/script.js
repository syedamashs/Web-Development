const mydiv = document.getElementById("mydiv");

let x=0;
let y=0;

document.addEventListener("keydown",event=>{
    mydiv.style.backgroundColor = "tomato";
    mydiv.textContent = "😫"
})


document.addEventListener("keyup",event=>{
    mydiv.style.backgroundColor = "lightblue";
    mydiv.textContent = "😉"
})

document.addEventListener("keydown", event=>{
    
    console.log(event.key);
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y=y-10;
                break;
            case "ArrowDown":
                y=y+10;
                break;
            case "ArrowLeft":
                x=x-10;
                break;
            case "ArrowRight":
                x=x+10;
                break;
        }

        mydiv.style.top = `${y}px`;
        mydiv.style.left = `${x}px`;
    }
});