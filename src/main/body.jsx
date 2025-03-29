import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import Post from './post';
import PostForm from './post'; // Import PostForm
import axios from "axios";

function Body() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = () => {
    axios
      .get("http://localhost:5001/api/articles")
      .then((res) => setArticles(res.data))
      .catch((error) => console.error("Error fetching articles:", error));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <main className="p-4 overflow-y-auto">
      <section id="about" className="mb-8">
        <div className="flex items-center space-x-2">
          <FaUser className="text-gray-700" />
          <p className="text-gray-700">examperUserName</p>
        </div>
      </section>

      {/* Post Form Section */}
      <section id="create-post" className="mb-8">
        <h2>Create a New Post</h2>
        <PostForm refreshArticles={fetchArticles} /> {/* Pass fetchArticles as a prop */}
      </section>

      {/* Articles Section */}
      <section id="services">
        <h2>Articles</h2>
        {articles.map((article) => (
          <Post
            key={article._id}
            title={article.article_title} // Ensure this matches the API response
            content={article.article_description} // Ensure this matches the API response
          />
        ))}
      </section>
    </main>
  );
}

export default Body;
