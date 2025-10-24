//let and const Declaration
let count = 10;
count = 20; // valid
console.log(count);

const pi = 3.14;
pi = 3.1415; // invalid, will throw an error
console.log(pi); // 20


// Block Scope 
if (true){
    let insedeIf = 'I am inside if block';
    console.log(insedeIf); // valid
}

console.log(insedeIf); // invalid, will throw an error