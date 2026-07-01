// let fruits=["apple", "banana", "grapes", "kiwi"]; //[0,1,2,3]

//includesn (check the element is present in the array or not)
// console.log(fruits.includes("banana")); //true
// console.log(fruits.includes("cat")); //false

// //indexOf (position of the element in the array)
// console.log(fruits.indexOf("banana")); //1
// console.log(fruits.indexOf("cat")); // -1

// //sort (in alphabetical order)
// fruits.sort()
// console.log(fruits)

// //reverse (reverses the order of elements in the array)
// fruits.reverse()
// console.log(fruits) //array reversed

// //splice method (removes or adds elements at a specific position)
// fruits.splice(1, 2); // removes elements at index 1 and 2
// console.log(fruits); 

//forEach loop method
// fruits.forEach(function(fruits, index){
//     console.log("the fruit is " + fruits + " at index " + index)
// })

//map array method its help to create a new array by applying a function to each element of the original array
// let upper = fruits.map(function(fruit){
//     console.log("the fruits are " + fruit)
//     return fruit.toUpperCase(); //converts each fruit to uppercase
// })
// console.log(upper); //logs the new array with uppercase fruits

//filter array method it returns a new array with elements that pass a certain condition
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = number.filter(function(num){
//     return num %2 === 0; //filters even numbers
// });
//     console.log(evenNumbers); //logs the new array with even numbers

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddNumbers = number.filter(function(num){
//     return num %2 !== 0; //filters odd numbers
// });
//     console.log(oddNumbers); //logs the new array with odd numbers

//reduce helps to reduce the array to a single value
// let nummm=number.reduce(function(num){
//     let num11=0;
//     return num+num11;
// })
// console.log(nummm); //logs the sum of all numbers in the array

let totalnumber=number.reduce(function(total, num){
    return total + num;
}, 22);
console.log(totalnumber); //logs the sum of all numbers in the array