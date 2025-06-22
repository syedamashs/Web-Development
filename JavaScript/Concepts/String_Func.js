let name = "Amash";

name.charAt(i);
name.indexOf(letter);
name.lastIndexOf(letter);
name.length;
name.trim();
name.toUpperCase();
name.toLowerCase();
name.repeat(number);
name.startsWith("");
name.endsWith("");
name.includes("");
name.replaceAll("","");
name.padStart(5,"");
name.padEnd(5,"");

//String Slicing!!

name.slice(0,3);   //Ama
name.slice(3);     //ash
name.slice(0,1);   //A 
name.slice(-1);    //h

//Dynamic Slicing!!

name = "Syed Amash"

name.slice(0 , name.indexOf(" "));  //Syed
name.slice(name.indexOf(" ") +1);   //Amash

//Example with Email

email = "amash@gmail.com"

let name = email.slice(0,email.indexOf("@"));

