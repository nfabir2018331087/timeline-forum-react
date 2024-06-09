import React from 'react';

const Comments = ({ comments }) => {
    return (
        <div className="mt-4 pt-4 border-t border-gray-200">
            <h3 className="text-xl font-semibold">Comments</h3>
            {comments.map(comment => (
                <div key={comment.id} className="my-2 p-2 bg-gray-100 rounded">
                    <p className="font-bold">{comment.name}</p>
                    <p>{comment.body}</p>
                    <p className="text-gray-500"><em>{comment.email}</em></p>
                </div>
            ))}
        </div>
    );
};

export default Comments;
