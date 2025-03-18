import React from 'react';
import Post from './main/post';

const Profile = () => {
    const posts = [
        { id: 1, title: 'First Post', content: 'This is my first post.' },
        { id: 2, title: 'Second Post', content: 'This is my second post.' },
    ];

    const handleEdit = (id) => {
        // Handle edit logic here
        console.log('Edit post with id:', id);
    };

    const handleDelete = (id) => {
        // Handle delete logic here
        console.log('Delete post with id:', id);
    };

    return (
        <div>
            <h2>My Posts</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <Post title={post.title} content={post.content} />
                    <button onClick={() => handleEdit(post.id)}>Edit</button>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Profile;
