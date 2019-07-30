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
        console.log('Server error', e)
      });
    };

    getPosts();
}, [API]);

console.log(content)


    return (
        <div> 
            <PostNav />
 <div className="fixed">
<Grid container columns={1} className="card-container">
<Grid.Column>
{/* <Post id={content.id} /> */}

    {content.map((item, index) => {
 return (
     <div>
    <Link to={`/post/${props.id}`}> 
 <Card className="card-container" key={index}>
  <Card.Content>
  <Card.Header><span className="post-title">{item.body}</span></Card.Header>
  <Card.Meta>
    <span className='date'>Date created</span>
  </Card.Meta>
  <Card.Description>
    {item.body}
  </Card.Description>
</Card.Content>
</Card>
</Link>
</div>
    )})};
    
</Grid.Column>
</Grid>
</div>
</div>

    )
};

export default List;

function SelectedPost (props) {
    return <Post post={props.content} />;
}

{/* <div className="fixed">
<Grid container columns={1} className="card-container">
<Grid.Column>
    {content.map((item, index) => {
 return (
 <Card className="card-container" key={index}>
  <Card.Content>
  <Card.Header><span className="post-title">{item.body}</span></Card.Header>
  <Card.Meta>
    <span className='date'>Date created</span>
  </Card.Meta>
  <Card.Description>
    {item.body}
  </Card.Description>
</Card.Content>
</Card>

    )})};
    
</Grid.Column>
</Grid>
</div>
</div> */}