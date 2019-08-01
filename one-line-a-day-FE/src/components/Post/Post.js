import React from 'react';
import './post.scss';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
		const {id, title, text, created_at } = post;

		// formats the date
    const changedate = created_at.split("-");
    const item3 = changedate[2];
    const item3split = item3.split("T");
    const datedisplay =  `${changedate[1]} ${item3split[0]}, ${changedate[0]}`;


    return (
			<div>
				<div className="fixed">
					<Grid container columns={1} className="card-container">
						<Grid.Column>
							<Card className="card-container">
								<Card.Content>
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
			</div>
    )
};

export default Post;

