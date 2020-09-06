import React from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const Post = (props) => {

    // console.log(props.post);

    const {id, body, title} = props.post;

    const postStyle = {
        border: 'none',
        margin: '20px auto',
        padding: '30px',
        maxWidth: '700px',
        background: 'white',
        borderRadius: '40px',
        boxShadow: '3px 2px 10px lightgray'
    }

    return (
        <Container maxWidth="md" style={postStyle}>
            <p><small>Post Number: {id}</small></p>
            <h3 style={{color: 'purple'}}>{title}</h3>
            <p style={{textAlign: 'justify', background: 'lightblue', padding: '20px', borderRadius: '20px'}}>{body}</p>
            <Button color="primary" variant="contained"><Link style={{color: 'white', textDecoration: 'none'}} to={`/${id}`}>Read More</Link></Button>
            </Container>
    );
};

export default Post;