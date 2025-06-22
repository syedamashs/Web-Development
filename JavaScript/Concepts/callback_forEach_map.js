hello(goodbye);


function hello(callback){
  console.log("Hello");
  callback();
}

function goodbye(){
  console.log("goodbye");
}


//forEach

let arr = [1,2,3]

array.forEach(display);;

function display(element){
console.log(element);
}

//Double--

array.forEach(double);

function double(element , index, array){
  array[index] = element * 2;
}


//MAP Function:
//Applies the callback for function and Stores in a new Array

let array = [1,2,3];

let newarray = array.forEach(square);

console.log(newarray);

function square(element){
  return Math.pow(element,2);
}
