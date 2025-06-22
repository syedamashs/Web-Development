//Intro--Variables,getById,Datatypes(conversion),Constant

let x = 'Heading'
document.getElementById("myh1").textContent = `Its a ${x}` //Setting texts in Website!!


document.getElementById("sub").onclick = function (){   //Button Clicking Function!!
    let name = document.getElementById("inp").value
    let age = Number(document.getElementById("inp2").value)   //Forms Input!!
    if(name === '' || age == 0){
        window.alert("Name is empty!!! Or Age is zero !!"); //Window Alert Message!!
    }
    else{
        document.getElementById("myp").textContent = `I am ${name} and My Age is ${age}`
    }
}


