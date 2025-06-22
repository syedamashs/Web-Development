Array = ["Apple" , "Mango"]

console.log(Array);
console.log(Array[i]);

Array.push("Banana");   //insert at last
Array.pop();            //remove at last
Array.unshift("Banana");
Array.shift();
Array.sort();
Array.sort().reverse();

Arrays.length;
Arrays.indexOf("Mango");   //return index or -1(not present)


//Smarter Iteration

for(let fruit of Array){
  console.log(fruit);
}
