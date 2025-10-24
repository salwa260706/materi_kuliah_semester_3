// Classes

class animal{
    constructor(name, type){
        this.name = name;
        this.type = type;   
}

    speak(){
        console.log(`${this.name} makes a noise.`);
    }   
}    

const dog = new animal('Dog', 'Mammal');
dog.speak(); // Dog makes a noise.

console.log(dog.name); // Dog
console.log(dog.type); // Mammal    


// Modules

//math.js
export const add = (x, y) => x + y;

//main.js
import {add} from './math.js';
console.log(add(2,3));