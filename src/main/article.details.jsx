import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ArticleDetails = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/articles/${id}`)
      .then((res) => setArticle(res.data))
      .catch((error) => console.error("Error fetching article:", error));
  }, [id]);

  if (!article) {
    return <p>Loading article...</p>;
  }

  return (
    <div>
      <h1>{article.article_title}</h1> {/* Ensure this matches the API response */}
      <p>{article.article_description}</p> {/* Ensure this matches the API response */}
      {article.article_image && (
        <img
          src={`http://localhost:5001/uploads/${article.article_image}`} // Ensure this path is correct
          alt="Article"
          style={{ width: "400px" }}
        />
      )}
    </div>
  );
};

export default ArticleDetails;
