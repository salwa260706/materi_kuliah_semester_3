// Traditional function
function add(x, y) {
    return x + y;
}

// Arrow function
const add = ( x, y) => x + y; 



// Arrow Function and 'this' keyword
function MyClass() {
    this.value = 42;

    // Using traditional function
    this.method1 = function() {
        console.log(this.value);
    };

    //Arrow function
    this.method2 = () => {
        console.log(this.value);
    };
}