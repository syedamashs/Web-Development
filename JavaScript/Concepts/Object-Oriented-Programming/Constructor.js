function person(name,age,gender){
    this.name = name;
    this.age= age;
    this.gender = gender;
    this.drive = function(){console.log(`I am ${name}`)};
}

const person1 = new person("Amash" , 19 , "Male");
const person2 = new person("Syed" , 20 , "Male");

console.log(person1.age);
console.log(person1.drive());
console.log(person2.gender);
