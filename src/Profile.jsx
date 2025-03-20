import React, { useEffect, useState } from "react";
import Post from "./main/post";
import axios from "axios";

const Profile = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5001/api/v1/user/getPosts"); // Adjust API URL
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Handle edit post
  const handleEdit = (id) => {
    console.log("Edit post with id:", id);
  };

  // Handle delete post
  const handleDelete = (id) => {
   
      console.log("Error deleting post:", id);
    
  };

  return (
    <div>
      <h2>My Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <Post title={post.title} content={post.content} />
            <button onClick={() => handleEdit(post.id)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Profile;
