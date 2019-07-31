import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostListNav from '../PostNav/PostListNav';
import Post from './Post';
import CreatePost from '../JulieTestDataFolder/CreatePost'

const postAPI = 'https://jsonplaceholder.typicode.com/posts'

const PostList = (props) => {

    const [API] = useState(postAPI);

    const [content, setContent] = useState([]);


    useEffect(() => {
        const getPosts = () => {
        axios.get(API)
        .then(res => {
            setContent(res.data);
        })
        .catch(e => {
        console.log('List error', e)
      });
    };

    getPosts();
}, [API]);

//console.log(content)


    return (
        <div><PostListNav />
        <CreatePost post={content}/>
        <div>
            {content.map((post, index) => <GeneratePost key={post.id} post={post} />)}
        </div>
        </div>


    )
};

export default PostList;

function GeneratePost (props) {
    return <Post post={props.post} />;
}

