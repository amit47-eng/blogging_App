import React from "react";

function Post({ title, content }) {
    return (
        <article className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-2">{content}</p>
        </article>
    );
}

export default Post;
