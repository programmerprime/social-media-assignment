import React, {useEffect, useState} from 'react';
import Post from './Post';


const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setPosts(data);
        })
    }, [])

    return (
        <div>
            <h1>All Posts</h1>
            {
                posts.map(pt => <Post post={pt} key={pt.id}></Post>)
            }
        </div>
    );
};


export default Home;