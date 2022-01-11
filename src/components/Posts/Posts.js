import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])

    return (
        <div>
            {posts.map(value => <Post key={value.id} userId={value.userId} id={value.id} title={value.title} />)}
        </div>
    );
};

export default Posts;