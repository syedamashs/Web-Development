//1) Create Element:

const newh1 = document.createElement("h1");

//2) Add Properties and Attributes:

newh1.textContent = "Im Amash";
newh1.style.backgroundColor = "tomato";
newh1.style.color = "blue";
newh1.id = "id1";

//3) Append Elements to DOM:

document.body.append(newh1);
document.body.prepend(newh1);

const box1  = document.getElementById("box1");
box1.append(newh1);

//There are many boxes -- We want to apply the texts between the boxes;

const box2 = document.getElementById("box2");
document.body.insertBefore(newh1,box2);

//Or Else we can Use the querySelector All:

const boxes = document.querySelectorAll(".box"); //id name common
document.body.insertBefore(newh1,boxes[0]);
document.body.insertBefore(newh1,boxes[1]);
document.body.insertBefore(newh1,boxes[3]);  //Insert anywhere btw the Boxes by query selector all!!!

//4) Remove HTML:

document.body.removeChild("newh1");
document.getElementById("box1").removeChild("newh1");