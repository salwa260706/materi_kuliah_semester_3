// Try...Catch Statement
try {
    // Code that may throw an error
    let result = 10/0;
    console.log(result); // this line wont be executed if an exception occurs
} catch (error) {
    console.error('An error occurred:', error.massage);
} finally {
    // code that runs regardless of whether an exception occured
    console.log('finally block executed');
}

// Throwing Custom Errors
function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

try{
    let result = divide(10,0);
    console.log(result);
} catch (error){
    console.error('Error:', error.massage);
}