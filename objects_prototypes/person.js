

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greetA() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    
   
}

// Here extends refere to the prototype of Person class.
// In Internally it will work in this way that 
// anotherPerson.prototype = Object.create(Person.prototype);(Instead of this we can use extends keyword)
class anotherPerson extends Person {

    // to use the constructor of Person class we can use super() method.
    constructor(name, age,city) {
        super(name, age); // Calls the constructor of the Person class
        this.city = city; // Additional property for anotherPerson
    }
    // constructor(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    greetB() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
const person2 = new anotherPerson("Bob", 25,"New York");
console.log(person2.city); // Hello, my name is Alice and I am 30 years old.
 console.log(person1.__proto__ === Person.prototype); // true
 console.log(person2.__proto__ === Person.prototype); // false

 console.log(person1.__proto__=== person2.__proto__); // false


