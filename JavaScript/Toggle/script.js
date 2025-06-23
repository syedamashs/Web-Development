
const toggle  = document.getElementById("toggle");


toggle.addEventListener("click",event =>{


    if(toggle.textContent==="Dark Mode"){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        toggle.textContent = "Light Mode";
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        toggle.textContent = "Dark Mode";
    }

});