const newh1 = document.createElement("h1");

newh1.textContent = "Im Amash";
newh1.style.backgroundColor = "tomato";
newh1.style.color = "blue";
newh1.id = "id1";

document.body.append(newh1);
document.body.prepend(newh1);

const box1  = document.getElementById("box1");
box1.append(newh1);

//There are many boxes -- We want to apply the texts between the boxes;

const box2 = document.getElementById("box2");
document.body.insertBefore(newh1,box2);