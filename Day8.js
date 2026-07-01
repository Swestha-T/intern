//while loop

//while loop execute garnu vanda pahile nai yele condition check garxo

//while(condition){
//    //
//condition.log("execute garxo run garxo code lai");

//}

// const pie=3.
//example of the while loop

// let count=11;
// while(count<=10){
//     console.log("Number are"+count);
//     count++
// }

//do while loop

//first time yellai code lai execute garxo yele condition check garxo
// let count=1
//  do{
//     console.log("the number are"+count)
//     count--;

//  }while(count>=10)


    //function
//function euta resuable code of the block ho jun kunai specific task perform garna lai use garenxo
    
// function sum(a,b){
//     return a+b
// }
// let result=sum(10,15)
// let reuslt1=sum(20,40)
// console.log(result);
// console.log(reuslt1)

//grade checking using the function

//Qodo: Test this function
// function gradeCheck(marks){

// }
//     if(marks>=90){
//         console.log("A+ ho");
//     }
//     else if(marks>=80){
//         console.log("A ho");
//     }
//     else if(marks>70){
//         console.log("B+");
//     }
//     else
//         console.log("Fail")
    
//  {
    
// }
// gradeCheck(86)


//function with expression
// Qodo: test this function
// const sayhello= function(){
//     console.log("helo function with argument")

// }

//scope
//varibale lai access garna ki gardaina
//global scope

// let name= "swestha"
// Qodo: test this function
// function myname(){
//     console.log(name)
// }
// myname();
// console.log(name);

//local scope
// Qodo: test this function
// function myname1(){
//     let name1= "swestha"
//     console.log(name1)
// }

// myname()
// console.log(name1)


//object
//object vaneko collection of related data stored gareu
// let student={
//     name:"swestha",
//     age:"21",
//     faculty:"BIT",
//     college:"IIC"
// }

// console.log(student.name)

// student.address="dulari"; //adding new key value in objects
// console.log(student)
// student.age="22" //updating the value of key in student named object
// delete student.faculty; //key ra value delete garni
// console.log(student)

//classwork
// let vegetable={
//     name:"Cabbage",
//     color:"green",
//     shape:"round"
// }
// console.log(vegetable);

// console.log(vegetable.name);
// console.log(vegetable.color);
// console.log(vegetable.shape);
// vegetable.color="pink"
// console.log=90;

//array
//array vaneko multiple values single variable ma store garni use garinxo

let fruits=["Apple","Banana","Kiwi","Melon"] //naming[0,1,2,3]
console.log(fruits[0])

//push method
fruits.push("mango")
console.log(fruits)

//pop le last element lai remove garxo
fruits.pop()

//shift removes the first elements
fruits.shift(fruits)
console.log(fruits)

//unshift methods le first remove gareko element lai fheri lyaune kam garxo
fruits.unshift("Apple")
console.log(fruits)

//length
console.log(fruits.length)