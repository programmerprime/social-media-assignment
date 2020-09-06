import React, {useEffect, useState} from 'react';
import Post from './Post';
import Typography from '@material-ui/core/Typography';


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
            <Typography variant="h3" color="textSecondary">All Posts</Typography>
            {
                posts.map(pt => <Post post={pt} key={pt.id}></Post>)
            }
        </div>
    );
};


export default Home;