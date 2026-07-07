//synchronous javascript it is used to execute code line by line
console.log("start of the program");
console.log("this is a synchronous code");
console.log("end of the program");

//problem statement that we faced in synchronous javascript
let datas =[
    {
        name: "swestha",
        role: "web developer",
        address: "biratchowk",

    },
    {
        name: "junah",
        role: "ui developer",
        address: "kathmandu"
    }
]

//Qodo:test this 
function getData(){
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
           output= `<li> {data.name}</li>`
        });
        document.body.innerHTML = output
    }, 1000)

}

//asynchronous javascript
//its alows the javascript to perform long running tasks like loading data from server without stopping the rest of the program


//promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value
//promise has three states
//1.pending:initial state, neither fulfilled nor rejected
//2.fulfilled:operation completed successfully
//3.rejected:operation failed
//a promise may resolved, rejected

//syntax using promise resolved the statement
let promise = new Promise(function(resolve, reject){
    let datas = false;
    if (login) {
        resolve("login successful")
    } else {
        reject("login failed")
    }
})

promise.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})

//async and wait
//async is a keyword that is used to declare a function that returns a promise and allows the use of await inside it.
//await pauses the execution of an async function until a promise can't resolve or reject

//Qodo: test this function
function getData(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("data fetched successfully")
        }, 1000);
    })
}

//Qodo: test this function
async function display(){
    let result = await getData();
    console.log(result)
}
display();


