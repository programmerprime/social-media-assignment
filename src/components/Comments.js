import React, {useState, useEffect} from 'react';
import { Avatar } from '@material-ui/core';

const Comments = (props) => {
    

    const {body, email, name, id, postId} = props.comments;


    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setImageURL(data.results[0].picture.medium);
        })
    }, [])

    const commentStyle = {
        border: '2px solid blue',
        borderRadius: '20px',
        margin: '20px auto',
        padding: '20px',
        background: 'lighblue',
        maxWidth: '400px'

    }

    return (
        <div style={commentStyle}>
            <Avatar src={imageURL}></Avatar>
            <h4>Commented by: {email}</h4>
            <h3 style={{color: 'mediumseagreen'}}>{name}</h3>
            <p style={{textAlign: 'justify'}}>{body}</p>
    <br/>

        </div>
    );
};

export default Comments;