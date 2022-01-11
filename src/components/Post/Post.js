import React from 'react';

const Post = (props) => {
    const {userId, id, title} = props;

    return (
        <div>
            {userId}--{id}--{title}
        </div>
    );
};

export default Post;