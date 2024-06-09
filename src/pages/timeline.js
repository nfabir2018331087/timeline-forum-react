import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post';

const Timeline = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const postsData = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const usersData = await axios.get('https://jsonplaceholder.typicode.com/users');
            const commentsData = await axios.get('https://jsonplaceholder.typicode.com/comments');
            setPosts(postsData.data);
            setUsers(usersData.data);
            setComments(commentsData.data);
        };

        fetchData();
    }, []);

    const getUserById = (id) => users.find(user => user.id === id);
    const getCommentsByPostId = (id) => comments.filter(comment => comment.postId === id);

    return (
        <div className="px-20 py-10">
            {posts.sort((a, b) => b.id - a.id).map(post => (
                <Post 
                    key={post.id} 
                    post={post} 
                    user={getUserById(post.userId)} 
                    comments={getCommentsByPostId(post.id)} 
                />
            ))}
        </div>
    );
};

export default Timeline;
