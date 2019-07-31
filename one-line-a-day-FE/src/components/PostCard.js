import React from 'react';
import styled from 'styled-components'

const PostCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
`;




export default function PostCard({ title, text }) {
    return(
        <PostCardDiv>
            <h2>{title}</h2>
            <p>{text}</p>
        </PostCardDiv>

    )

}