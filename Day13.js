//arrow function
//it is a shorter method to write a function in javascript, it is introduced in ES6 module

//Qodo:test this function
const hello=()=>{
    console.log("hello world")
};
hello()

//Qodo:test this function
const sum=(a,b)=>{
    return a+b ;
}
console.log(sum(10,12))

//template literals
//it is string enclosed in backticks(``)that allows

let name= "swestha"
let surname="tamang"
console.log("Name"+name)
console.log("My name is ${name} ${surname}`")

//why use multiple template literals
//-cleaner code
//-easier string formatting
//-multiple string supports

//import and export
//export allows us to share variable , function or classes from one javascrpit file to another
//import allows us to use those exported items in another javascipt file
//default and named export4

//name export
//Qodo:test this function
export function subtract(a,b){
    return a-b;
}

//default export is used to exported the single items






//what is react.js?

//it is a javascript library developed by Meta(facebook) for building fast, interactive and user interfaces(UI), especially single page applications (SPA)

//features of react
//-component-Based architecture
//-virtual DOM
//resuable components
//fast performance

//What is SPA(single page applications) loads one html page updates only the necessary parts of the page without a full page refresh
//vite is a modern frontend build tool used to creat react project quickly

//advantags
//very fast setup
//hot module replacement
//lightweight

//real dom vs virtual dom
//real dom is the actual dom created and managed by browser .whenever javascript changes something the browser updates the real dom
//virtual dom is a light wight javascript representation(copy) of the real DOM maintained by react

//component like example button changes
//virtual dom (copy of real dom)
//compare with previous virtual dom
//find differencs
//update only changes elements
//real dom
//jsx(javascript XML) HTML + javascript is a syntax extension for javascript that allows us to write HTML-like code inside javascript

//component is a reusable piece of ui code
//why components
//advantages:
//-resuable
//-cleaner code
//easy maintenance
//faster development
//better