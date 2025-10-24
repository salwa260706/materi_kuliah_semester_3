// Function 

function greet(name){ 
    console.log("Halo " + name + " !");
}

greet("Salwa");


// Scope
 
let globalVariable = "Saya adalah variabel global";

function contohScope() {
    let localVariable = "Saya adalah variabel lokal";
    console.log(globalVariable); // Bisa diakses
    console.log(localVariable);  // Bisa diakses
}

contohScope();

console.log(globalVariable); // Bisa diakses
//console.log(localVariable);  // Error tidak bisa diakses karena di luar scope fungsi 