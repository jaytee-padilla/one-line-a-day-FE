import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PostCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
`;




export default function PostCard({ title, text, date }) {
    return(
        <PostCardDiv>
            <h2>{date}</h2>
            <Link to="/home/:id"><h2>{title}</h2></Link>
            <p>{text}</p>
        </PostCardDiv>

    )

}