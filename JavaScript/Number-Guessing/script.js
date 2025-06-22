const minn = 1;
const maxx = 50;
let attempts =0;
const ans = Math.floor(Math.random() * (maxx - minn +1)) + minn;
guess = false;
const p1= document.getElementById("p1");
console.log(ans);

while(!guess){

    let a = window.prompt("Guess the Number Between "+minn+" and "+maxx);
    a= Number(a);

    if(isNaN(a)){
        window.alert("Please Enter a Number!!");
    }
    else if(a<minn || a>maxx){
        window.alert("Please Enter a Valid Number!!");
    }
    else{
        if(a<ans){
            window.alert("Your Guess is Low!!");
        }
        else if(a>ans){
            window.alert("Your Guess is High");
        }
        else{
            window.alert("You Guessed it Correct!!! -- With attempts: "+attempts);
            guess = true;
        }

        attempts++;

    }
}