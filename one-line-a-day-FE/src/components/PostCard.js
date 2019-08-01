import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid } from 'semantic-ui-react';

export default function PostCard({ title, date, id }) {
		// formats the date
		const changedate = date.split("-");
		const item3 = changedate[2];
		const item3split = item3.split("T");
		const datedisplay =  `${changedate[1]}, ${item3split[0]}, ${changedate[0]}`;
    
    return(
        <div className="post-card">
					<Link to={`/post/${id}`}>
						<Card raised fluid className="card-container" style={{padding: "50px 0", marginBottom: "25px"}}>
								<Card.Content>
										<Card.Header><div className="date">{datedisplay}</div></Card.Header>
										<Card.Meta>
												<div className="post-title">{title}</div>
										</Card.Meta>
								</Card.Content>
						</Card>
					</Link>
        </div>
    )
}