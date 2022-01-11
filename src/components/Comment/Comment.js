import React from 'react';

const Comment = (props) => {
    const {postId, id, name, email} = props;

    return (
        <div>
            {postId}--{id}--{name}--{email}
        </div>
    );
};

export default Comment;