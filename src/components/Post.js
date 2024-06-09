import React, { useState } from 'react';
import Comments from './Comments';

const Post = ({ post, user, comments }) => {
    const [showComments, setShowComments] = useState(false);

    return (
        <div className="relative border border-emerald-400 pt-4 pb-10 px-4 my-4 rounded-lg shadow-md transition ">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="my-2">{post.body}</p>
            <p className="text-gray-600 text-lg"><strong>By:</strong> {user?.name}</p>
            <button 
                onClick={() => setShowComments(!showComments)} 
                className="absolute bottom-2 right-4 mt-2 px-4 py-2 bg-emerald-500 text-white rounded transition hover:bg-emerald-600 hover:scale-105"
            >
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {showComments && <Comments comments={comments} />}
        </div>
    );
};

export default Post;
