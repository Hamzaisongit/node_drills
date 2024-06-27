//Object
const person = {
    name : 'hamza',
    age : 10,
    sayName : ()=>{
       console.log(this.name);
    }
}

//Constructor
function People(name,age){
    this.name = name;
    this.age =age;
    this.sayName = ()=>{
     console.log(name);
    }
}

people1 = new People('Jack',33);
people2 = new People('Jhon', 23);

console.log(`person: ${person.name}
people1: ${people1.age}
people2: ${people2.age}`);

people1.sayName();
people2.sayName();


//Prototypes and inheritance
//every object has a prototype and every constructor has a prototype property

console.log(Object.getPrototypeOf(people1)===People.prototype);

People.prototype.tellAge = ()=>{
    console.log('Hello');
}

people1.tellAge();
people2.tellAge();


//some usefull methodes on objects

console.log(people1.valueOf());
console.log(people1.hasOwnProperty('sayName'));