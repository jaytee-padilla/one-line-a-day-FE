import React from 'react';
import { Card, Image, Grid, Responsive, Segment } from ‘semantic-ui-react’;

const PostCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
`;




export default function PostCard({ date, title }) {
    return(
        <PostCardDiv>
            <h3>{date}</h3>
            <h2>{title}</h2>
        </PostCardDiv>

    )

}