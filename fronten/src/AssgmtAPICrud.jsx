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