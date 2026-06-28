// //switch condition statement

// let day = Number(prompt("Enter your day"));
// switch(day){
//     case 1:
//         console.log("sunday");
//         //break;
//         case 2:
//             console.log("monday");
//             break;  
//             case 3:
//                 console.log("tuesday");
//                 break;
//                 default:
//                     console.log("invalid day");
// }


// let choice = Number(prompt("enter operation\n1, addition\n2, subtraction\n3, multiplication\n4, division\n5, modulus"));

// let num1 = Number(prompt("Enter your first number"));
// let num2 = Number(prompt("Enter your second number"));

// switch(choice){
//     case 1:
//         console.log("Addition of two number" + (num1 + num2));
//         break;
//         case 2:
//             console.log("Subtraction" + (num1 - num2));
//             break;
//             case 3:
//                 console.log("Multiplication" + (num1 * num2));
//                 break;
//                 case 4:
//                     console.log("Division" + (num1 / num2));
//                     break;
//                         default:
//                             console.log("invalid operation");
// }


// Grade using switch statement

// MERN Menu

// let choice = Number(prompt("Select a MERN Technology\n" +"1. MongoDB\n" +"2. Express.js\n" +"3. React.js\n" +"4. Node.js"));

// switch (choice) {
//     case 1:
//         console.log("MongoDB is a NoSQL database used to store data.");
//         break;

//     case 2:
//         console.log("Express.js is a backend framework for Node.js.");
//         break;

//     case 3:
//         console.log("React.js is a JavaScript library used to build user interfaces.");
//         break;

//     case 4:
//         console.log("Node.js is a JavaScript runtime used to run JavaScript outside the browser.");
//         break;

//     default:
//         console.log("Invalid Choice");
// }


//loops
//console.log("for loop");

for(let i=1; i<=30;i++){
    console.log(i);
}



//sum of natural number

let number = 30
let sum = 0;
for(let i=1; i<=number;i++){
    sum= sum + i;
}
console.log("sum of natural number is " + sum);