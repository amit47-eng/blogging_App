import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostForm = ({ userId, refreshArticles }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTag, setSelectedTag] = useState("lifestyle");
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(userId || ""); // State for user ID
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.length < 10) {
      alert("Title must be at least 10 characters long.");
      return;
    }
    if (description.length < 10) {
      alert("Description must be at least 10 characters long.");
      return;
    }
    if (!user) {
      alert("User ID is required.");
      return;
    }

    const formData = new FormData();
    formData.append("article_title", title);
    formData.append("article_description", description);
    formData.append("user", user);
    formData.append("tags", selectedTag);
    if (image) {
      formData.append("article_image", image); // Attach image
    }

    try {
      const response = await axios.post("http://localhost:5001/api/createArticle", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Post created:", response.data);
      if (refreshArticles) refreshArticles(); // Trigger refresh
      navigate(`/articles/${response.data._id}`); // Navigate to the created post
    } catch (error) {
      console.error("Error creating post:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Article Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Article Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      {/* Tag Selection */}
      <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
        <option value="lifestyle">Lifestyle</option>
        <option value="tech">Tech</option>
        <option value="food">Food</option>
      </select>

      {/* Image Upload */}
      <input type="file" onChange={handleFileChange} accept="image/*" />

      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
