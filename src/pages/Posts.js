// src/pages/Posts.js
import { useEffect, useState } from "react";
import { fetchPosts, createPost } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPost) return;
    const createdPost = await createPost({ text: newPost });
    setPosts([createdPost, ...posts]);
    setNewPost("");
  };

  return (
    <div>
      <h2>Posts</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write a post..."
        />
        <button type="submit">Post</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
