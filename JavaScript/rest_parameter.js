function rest(...foods){    //Rest Parameter
  console.log(...foods);    //Spread Parameter
}

const f1 = "Apple";
const f2 = "Orange";

rest(f1,f2);
