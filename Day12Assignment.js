// GET (Read)
async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();

    console.log("GET Request:");
    console.log(users);
}

getUsers();


// POST (Create)
async function createPost() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Learning Fetch API",
            body: "This is my first POST request using async/await.",
            userId: 1
        })
    });

    let data = await response.json();

    console.log("POST Request:");
    console.log(data);
}

createPost();


// PUT (Update)
async function updatePost() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            title: "Updated Title",
            body: "Updated Body",
            userId: 1
        })
    });

    let data = await response.json();

    console.log("PUT Request:");
    console.log(data);
}

updatePost();


// DELETE
async function deletePost() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    });

    if (response.ok) {
        console.log("DELETE Request:");
        console.log("Post deleted successfully.");
    }
}

deletePost();