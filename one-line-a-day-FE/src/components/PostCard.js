import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Card, Grid } from 'semantic-ui-react';

// const PostCardDiv = styled.div`
//     display: flex;
//     flex-direction: column;
//     border-bottom: 2px solid black;
// `;

// const Date = styled.h2`
//     font-family: 'Open Sans';
//     color: black;
// `;




export default function PostCard({ title, date, id }) {

        const changedate = date.split("-")
 
        const item3 = changedate[2]

        const item3split = item3.split("T")

        const datedisplay =  `${changedate[1]} ${item3split[0]}, ${changedate[0]}`
        console.log("date", date)
    



    return(
        <div className="fixed">
            <Grid columns={1} className="card-container">
                <Grid.Column>
                    <Card className="card-container">
                        <Card.Content>
                            <Card.Header><div className="date"><Link to={`/post/${id}`}>{datedisplay}</Link></div></Card.Header>
                            <Card.Meta>
                                <div className="post-title">{title}</div>
                            </Card.Meta>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    )

}