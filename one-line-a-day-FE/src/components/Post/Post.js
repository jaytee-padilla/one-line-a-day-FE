import React from 'react';
import './post.scss';
import { Card, Grid, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
		const {id, title, text, created_at } = post;

		// formats the date
    const changedate = created_at.split("-");
    const item3 = changedate[2];
    const item3split = item3.split("T");
    const datedisplay =  `${changedate[1]} ${item3split[0]}, ${changedate[0]}`;


    return (
        <Container text>
            
            <Link to={`/post/${post.id}`}>       
            <div className="post-container">
                <Grid container columns={1}>
                <Grid.Column>
                <Card className="card-container">
                <Card.Content>
                <Image src={require('../../assets/quill-drawing-a-line.svg')} size="small" />
                <Card.Header><span className="post-title">{title}</span></Card.Header>
                <Card.Meta>
                    <span className='date'>{datedisplay}</span>
                </Card.Meta>
                <Card.Description>
                    {text}
                </Card.Description>
                </Card.Content>
                </Card>    
                </Grid.Column>
                </Grid>
            </div>

            </Link>
        </Container>
    )
};

export default Post;

//must credit on marketing page to use graphics
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
//<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

