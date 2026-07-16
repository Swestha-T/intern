// import React from 'react'
// import { useState } from 'react'


// const App = () => {
//   const [count,setCount]=useState(1)
//   function increase(){
//     setCount(count+1);
//   }
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={increase} className='bg-amber-800 text-blue-800'>increment</button>
    
      
//     </>
//   )
// }
/// example of the useEffect
// export default App
// setIntervale is used to repeatedly execute a function or a code snippet at fixed time intervals

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const[seconds,setSeconds]=useState(0);
//   const[running,setRunning]=useState(false)
//   useEffect(()=>{
//     let timer;
//     if(running){
//       timer=setInterval(()=>{
//         setSeconds((prev)=> prev+1);

//       },1000)
//     }
//     return()=> clearInterval(timer)


//   },[running]) 
//   return (
//     <>
//     <h1>{seconds}</h1>
//     <button  onClick={()=> setRunning(true)}>start</button>
//     <button  onClick={()=> setRunning(false)}>stop</button>
      
//     </>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'


// const App = () => {
//   const[count,setCount]=useState(0)
//   useEffect(()=>{
//     console.log("component mounted")
//     return ()=>{
//       console.log("compoenent removed")
//     }
//   },[count])
//   return (
//     <>
//       <h1>hello mounting </h1>
//       <button onClick={()=>{setCount(count+1)}}>Increment</button>
//     </>
//   )
// }

// export default App



//examples of the lifecycle 

// import React ,{useState} from 'react'
// import Timer from './components/Timer'


// const App = () => {
//   const[showerTimer,setShowerTimer]=useState(true)
//   return (
//     <>
//       <h1>React Lifecycle with timer </h1>
//       <button onClick={()=>{setShowerTimer(!showerTimer)}}>  {showerTimer ? "stop Timer" : "start  Timer "}</button>
//       <hr />
//       {showerTimer && <Timer />}
//     </>
//   )
// }

// export default App



// import React from 'react'
// import UserContext from './context/userContext'
// import Navbar from './components/Navbar.jsx'

// const App = () => {
//   const name="swestha"
//   return (
//     <UserContext.Provider  value={name} >
//       <Navbar />

//     </UserContext.Provider>
   
//   )
// }

// export default App



// import React from 'react'
// import UserContext from './context/userContext'
// import Navbar from './components/Navbar.jsx'

// const App = () => {
//   const age=21;
//   return (
//     <>
//     <UserContext.Provider   value={age} >
//      <Navbar />


//     </UserContext.Provider>
      
//     </>
//   )
// }



// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }


///UserContext makes the user avalibale to every componenet inside 





// fetch api usinf react 

// crud (create,update/read, update, delete)


// import React, { useEffect, useState } from 'react'

// const API = 'https://jsonplaceholder.typicode.com/posts'

// const App = () => {
//   const [posts, setPosts] = useState([])
//   const [title, setTitle] = useState('')
//   const [body,setBody]=useState('')

//   const getPosts = async () => {
//     try {
//       const response = await fetch(API)
//       const data = await response.json()
//       setPosts(data.slice(0, 10))
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   useEffect(() => {
//     getPosts()
//   }, [])

//   const addPost = async () => {
//     if (!title) {
//       return
//     }

//     try {
//       const response = await fetch(API, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           title,
//          body
//         })
//       })

//       const data = await response.json()
//       setPosts([data, ...posts])
//       setTitle('')
//       setBody('')
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Fetch API with React</h1>
//       <div>
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Post title"
//         />
//         <input value={body} onChange={(e)=> setBody(e.target.value)}
//         placeholder='post body'
//       /  >

//         <button onClick={addPost}>Add post</button>
//       </div>

//       //// read the posts 
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <strong>{post.title}</strong>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App


// {/* const arr =[0,1,2,3,4] */}


  //assignmnet (using fetch api perform crud operation)

  import React, { useEffect, useState } from 'react';

const API = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // GET - Read
  const getPosts = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setPosts(data.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // POST - Create
  const addPost = async () => {
    if (!title.trim() || !body.trim()) return;

    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body,
          userId: 1,
        }),
      });

      const data = await response.json();

      setPosts((prev) => [{ ...data, id: Date.now() }, ...prev]);
      setTitle('');
      setBody('');
    } catch (error) {
      console.error(error);
    }
  };

  // PUT - Update
  const updatePost = async (post) => {
    const newTitle = prompt('Enter new title', post.title);
    const newBody = prompt('Enter new body', post.body);

    if (newTitle === null || newBody === null) return;

    try {
      const response = await fetch(`${API}/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: post.id,
          title: newTitle,
          body: newBody,
          userId: 1,
        }),
      });

      const data = await response.json();

      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id
            ? { ...p, title: data.title, body: data.body }
            : p
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE
  const deletePost = async (id) => {
    try {
      await fetch(`${API}/${id}`, {
        method: 'DELETE',
      });

      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Fetch API CRUD Operations</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type='text'
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: 10 }}
        />

        <input
          type='text'
          placeholder='Enter body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ marginRight: 10 }}
        />

        <button onClick={addPost}>Add Post</button>
      </div>

      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: 20 }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>

            <button
              onClick={() => updatePost(post)}
              style={{ marginRight: 10 }}
            >
              Edit
            </button>

            <button onClick={() => deletePost(post.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;