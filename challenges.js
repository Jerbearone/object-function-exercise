// Create a variable called myName and assign it your name as a string.
let myName = "Jerry";
// Create an array called numbers and add five numbers to it.
let numbers = [1, 2, 3, 5, 7];
// Create a variable called myAge and assign it your age as a number.
let myAge = 31;

// Create an object called person with properties name, age, and gender.
let person = {
    name: myName,
    age: myAge,
    gender: "Male",
}

// Create a variable called isRaining and assign it a boolean value based on whether it is currently raining or not.

let isRaining = false;
// Create a function called greet that takes a name as a parameter and returns a greeting message using template literals.

function greeting(name) {
    return `Hello, my name is ${person.myName}.`
}
// Create a function called multiply that takes two numbers as parameters and returns their product.
function multiply(nr1, nr2) {
    return nr1*nr2;
}
// Create a function called divide that takes two numbers as parameters and returns their quotient.

function divide(nr1, nr2) {
    return nr1/nr2;
}
// BONUS
// Create a function called isEven that takes a number as a parameter and returns true if the number is even, false otherwise.
function isEven(nr){
    if (nr % 2== 0) {
        return true
    } else {
        return false
    }
}

console.log(isEven(10));
console.log(isEven(1));
console.log(isEven(11));


