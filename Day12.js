//fetch api is a built in javascript api used to send http request to a server and receive data from it.
//it is commonly used to:
//-get data (GET)
//-send data (POST)
//-update data (PUT/PATCH)
//-delete data (DELETE)


//why do we use fetch api?
//-imagine we are building:
//E-commerce website
//the frontend needs data from the backend
//without fetch api, our website cannot communicate with the server

//let url=http://localhost5000/api

/////basic get request

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response){

//     //receives the server response
//     console.log("loading the data...")

//     return response.json(); //converts the json into javascript object
// })


// .then(function(data){ //displays the received data
    
//     // console.log(userdata.username)

//     let output=""
//     data.forEach(function(user){
//         output += `<li>${user.name}</li>`;
//         output += `<li>${user.email}</li>`;

//     });
//     document.getElementById("users").innerHTML=output;
// }) 

//fetch using the aynsc and await
//Qodo: Test this function
// function getUsers(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users")
//     let users = await response.json()
//     console.log(users)
// }
// getUsers()



/////POST request (POST) // users send data
//fetch(url,optionsvalue )
fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    headers:{  //headers provide the extra information about the request
        "content-Type":"application/json" //ma json format ma data lai send gardaixu
    },
    body:JSON.stringify({ //converts the javascript objects into a json string
        title:"javascript learing or fetch post requests learning",
        body:"learning fetch api",
        userId:1
    })
})

.then(function(response){
    return response.json();

})
.then(function(data){
    console.log(data)
})


/////only update the title (patch/PUT)
fetch("https://jsonplaceholder.typicode.com/users",{
    method:"PUT",
    headers:{
        "content-Type":"application/json"
    },
    body:JSON.stringify({
        title:"new title",
        body:"new data updated"
    })
})

.then(function(response){
    return response.json();

})
.then(function(data1){
    console.log(data1)
})

//delete the data
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"delete",

})

.then(function(response2){
    console.log("post deleted");

})