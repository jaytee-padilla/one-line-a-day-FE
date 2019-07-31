import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Image, Grid, Responsive, Segment } from 'semantic-ui-react';
import PostNav from '../PostNav/PostNav';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';

const postAPI = 'https://jsonplaceholder.typicode.com/posts'

const List = (props) => {

    const [API, setAPI] = useState(postAPI);

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
        <div> 
            {/* <PostNav /> */}
 <div className="fixed">
<Grid container columns={1} className="card-container">
<Grid.Column>

    {content.map((post, index) => <SelectedPost key={post.id} post={post} />)}
    
</Grid.Column>
</Grid>
</div>
</div>

    )
};

export default List;

function SelectedPost (props) {
    return <Post post={props.post} />;
}

