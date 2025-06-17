class person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    displaydetails(){
        console.log(`I am ${this.name} and my age is ${this.age}`);
    }

    returnage(){
        return this.age;
    }
}

const person1 = new person("Amash",19);
const person2 = new person("Syed",20);

person1.displaydetails();

let total = person1.returnage() + person2.returnage();
console.log(total);
