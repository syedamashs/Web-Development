
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const btn = document.getElementById("btn");
const label1 = document.getElementById("label1");

function temp(){
    let inp1 = document.getElementById("inp1").value;
    inp1= Number(inp1);

    if(isNaN(inp1)){
        label1.textContent = "Please Enter Numbers!!!";
    }
    else{

    if(checkbox1.checked){
        inp1 = (inp1 * 9/5) + 32;
        label1.textContent = inp1 + " F";
    }

    else if(checkbox2.checked){
        inp1 = (inp1 - 32) * 5/9;
        label1.textContent = inp1 + " C";
    }
    else{
        label1.textContent = "Please Tick a Box!!!";
    }

}
}
