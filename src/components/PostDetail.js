import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';
import Typography from '@material-ui/core/Typography';

const PostDetail = () => {

    const {id} = useParams();

    const [comments, setComments] = useState([]);

    const [currentPost, setCurrentPost] = useState({});

    

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setCurrentPost(data))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    

    const postStyle = {
        border: 'none',
        margin: '20px auto',
        padding: '40px',
        maxWidth: '700px',
        background: 'white',
        borderRadius: '40px',
        boxShadow: '3px 2px 10px lightgray'
    }

    return (
        <div>
            <div style={postStyle}>
            <p><small>Post Number: {currentPost.id}</small></p>
            <h3 style={{color: 'purple'}}>{currentPost.title}</h3>
            <p style={{textAlign: 'justify', background: 'lightblue', padding: '20px', borderRadius: '20px'}}>{currentPost.body}</p>
           
        </div>

            {
                comments.map(com => <Comments comments={com}></Comments>)
            }
        </div>
    );
};

export default PostDetail;