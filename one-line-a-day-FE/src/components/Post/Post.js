import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './post.scss';
import { Card, Image, Grid, Responsive, Segment } from 'semantic-ui-react';
import PostNav from '../PostNav/PostNav';
import { Link } from 'react-router-dom';

const postAPI = 'https://jsonplaceholder.typicode.com/posts'

const Post = ({post}) => {


const {id, title, body} = post;

// console.log(post, 'Post.js log of post obj')

    return (
        <div>
        <Link to={`/post/${post.id}`}>       
<div className="fixed">
<Grid container columns={1} className="card-container">
<Grid.Column>
 <Card className="card-container">
  <Card.Content>
  <Card.Header><span className="post-title">{title}</span></Card.Header>
  <Card.Meta>
    <span className='date'>{id}</span>
  </Card.Meta>
  <Card.Description>
    {body}
  </Card.Description>
</Card.Content>
</Card>    
</Grid.Column>
</Grid>
</div>

</Link>
</div>
    )
};

export default Post;



{/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}


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