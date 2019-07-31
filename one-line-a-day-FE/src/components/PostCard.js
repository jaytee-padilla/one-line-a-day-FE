import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
`;




export default function PostCard({ title, text, entry }) {
    return(
			<Link to={`/${entry.id}`}>
        <PostCardDiv>
            <h2>{title}</h2>
            <p>{text}</p>
        </PostCardDiv>
			</Link>
    )

}