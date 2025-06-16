To unpack a Array and Implement any Operation of Elements in Array!!!

Array = [1,2,3,4,5];

let maxx = Math.max(Array);  --- Not work (NaN) !!!!.

So -- let maxx  = Math.max(...Array);

//It works as unpacked elements maximum calculated!!!

We can unwind the String to array by ...:

  let a = "Amash"
  let namearray = [...a]

//namearray = ['A','m','a','s','h']

Can combine two arrays into one -- unpack both:

  let Array = [...fruits , ...veges , "hi"];
