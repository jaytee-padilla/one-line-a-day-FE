import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Post';
import PostNav from '../PostNav/PostNav';
import Post from './Post';


const SelectedPost = (props) => {


    const [post, setPost] = useState(null);


    useEffect(() => {
        const id = props.match.params.id

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            setPost(res.data);
        })
        .catch(e => {
        console.log('SelectedPostError', e)
      });
    

 
    }, [props.match.params.id]
);
console.log(post, 'selectedCard')

if (!post) {
    return <div>Loading post information...</div>;
}

return (
    <div>
    <PostNav />
    <Post post={post} />
    </div>
    )
};

export default SelectedPost;