import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PostCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
`;

const Date = styled.h2`
    font-family: 'Open Sans';
    color: black;
`;




export default function PostCard({ title, date, entryId, props }) {


    return(
        <PostCardDiv>
            <Date>{date}</Date>
            <Date><Link to={`/entry/${entryId}`}>{title}</Link></Date>
        </PostCardDiv>

    )

}