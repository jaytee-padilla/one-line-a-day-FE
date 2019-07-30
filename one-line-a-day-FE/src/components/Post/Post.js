import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './post.scss';
import { Card, Image, Grid, Responsive, Segment } from 'semantic-ui-react';
import PostNav from '../PostNav/PostNav';
import { Link } from 'react-router-dom';

const postAPI = 'https://jsonplaceholder.typicode.com/posts'

const Post = (props) => {

//     const [API, setAPI] = useState(postAPI);

//     const [content, setContent] = useState([]);

//     const [user, setUser] = useState(null);

//     const [post, setPost] = useState(null);

//     useEffect(() => {
//         const getPosts = () => {
//         axios.get(API)
//         .then(res => {
//             setContent(res.data);
//         })
//         .catch(e => {
//         console.log('Server error', e)
//       });
//     };

//     getPosts();
// }, [API]);

// console.log(content)


    return (
        <div>
        <PostNav />
        <Link to={`/post/${props.id}`}>       
<div className="fixed">
<Grid container columns={1} className="card-container">
<Grid.Column>
 <Card className="card-container">
  <Card.Content>
  <Card.Header><span className="post-title">{props.title}</span></Card.Header>
  <Card.Meta>
    <span className='date'>{props.id}</span>
  </Card.Meta>
  <Card.Description>
    {props.body}
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

{/* <Segment.Group>
<Responsive as={Segment} minWidth={768}>
  Visible only if display has <code>768px</code> width and higher
</Responsive>
<Responsive as={Segment} minWidth={992}>
  Visible only if display has <code>992px</code> width and higher
</Responsive>
</Segment.Group>
) */}


// return (
//     <div className="fixed">

// <Grid container columns={1} className="grid-container">
// <Grid.Column>
// {content.map((item, index) => {
// return (
// <Card className="card-container" key={index}>
// <Card.Content>
// <Card.Header><span className="post-title">{item.body}</span></Card.Header>
// <Card.Meta>
// <span className='date'>Date created</span>
// </Card.Meta>
// <Card.Description>
// {item.body}
// </Card.Description>
// </Card.Content>
// </Card>
// </div>
// )})};

// </Grid.Column>
// </Grid>
// </div>
// )
// };

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