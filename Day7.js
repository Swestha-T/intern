// //switch condition statement

let day = Number(prompt("Enter your day"));
switch(day){
    case 1:
        console.log("sunday");
        //break;
        case 2:
            console.log("monday");
            break;  
            case 3:
                console.log("tuesday");
                break;
                default:
                    console.log("invalid day");
}


let choice = Number(prompt("enter operation\n1, addition\n2, subtraction\n3, multiplication\n4, division\n5, modulus"));

let num1 = Number(prompt("Enter your first number"));
let num2 = Number(prompt("Enter your second number"));

switch(choice){
    case 1:
        console.log("Addition of two number" + (num1 + num2));
        break;
        case 2:
            console.log("Subtraction" + (num1 - num2));
            break;
            case 3:
                console.log("Multiplication" + (num1 * num2));
                break;
                case 4:
                    console.log("Division" + (num1 / num2));
                    break;
                        default:
                            console.log("invalid operation");
}


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