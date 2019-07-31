import React from 'react';
import './post.scss';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {


const {id, title, body} = post;


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

