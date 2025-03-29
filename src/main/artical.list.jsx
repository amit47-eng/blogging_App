import axios from "axios";
import { useState, useEffect } from "react";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/articles")
      .then((res) => setArticles(res.data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      {articles.length > 0 ? (
        <ul>
          {articles.map((article) => (
            <li key={article._id}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              {article.article_image && (
                <img
                  src={`http://localhost:5001/uploads/${article.article_image}`}
                  alt="Article"
                  style={{ width: "200px" }}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
};

export default ArticlesList;
