//Intro--Variables,getById,Datatypes(conversion),Constant

let x = 'Heading'
document.getElementById("myh1").textContent = `Its a ${x}`


document.getElementById("sub").onclick = function (){
    let name = document.getElementById("inp").value
    let age = Number(document.getElementById("inp2").value)
    if(name === '' || age == 0){
        window.alert("Name is empty!!! Or Age is zero !!");
    }
    else{
        document.getElementById("myp").textContent = `I am ${name} and My Age is ${age}`
    }
}


