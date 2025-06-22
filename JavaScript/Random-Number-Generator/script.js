const para = document.getElementById("p1");
const button = document.getElementById("mybutton");

button.onclick = function() {

    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);

    if(isNaN(inp1) || isNaN(inp2)){
        para.textContent = "Please Enter the Numbers!!!";
        return;
    }

    if(inp1>inp2){
        para.textContent = "Please Correctly Give the Start and End";
        return;
    }

    let rand = Math.floor(Math.random() * (inp2 - inp1 +1)) + inp1;
    para.textContent = rand;
}
