//variable understand
//var age =22;
//let age = 22; 
//age = 23; // This will throw an error because 'age' is declared as a constant.
//console.log(age); // This will log 22 to the console.
//const pie=3.14; // This is a constant variable and cannot be reassigned.



// data types
let number =23; // number
const name = "swestha"; // string
let isloggedin = true; // boolean
let city; // undefined
let user= null; // null
console.log(typeof name);


//operations

//arithmetic operations
let x = 10;
let y = 5;
let sum = x + y; // addition
console.log(sum); // addition

let r=14;
let b=10;
console.log(r-b); // subtraction
console.log(r*b); // multiplication
console.log(r/b); // division
console.log(r%b); // modulus

//comparison operations is all about true or false
// == equal to
// != not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// === strict equal to

let age = 22;
console.log(age == 22); // checking equal to
console.log(age != 22); // checking not equal to
console.log(age > 45); // checking greater than
console.log(age < 10); // checking less than


//logical operators
//%%
let age1 = 22;
let citizen = true;
console.log(age>=18 && citizen === true);

//assignment operators
let a = 5;
a -= 20;
console.log(a); 

//conditional statements
let age44 = 22;

//voting elegibility

if(age44 >= 18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You are not eligible to vote.");
}

// else if statement
let Mern=60;
if(Mern >= 90){
    console.log("You have an A grade.");
}
else if(Mern >= 80){
    console.log("You have a B grade.");
}
else{
    console.log("You have a C grade.");
}