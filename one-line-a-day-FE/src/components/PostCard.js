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




export default function PostCard({ title, date }) {


    return(
        <PostCardDiv>
            <Date>{date}</Date>
            <Link to="/home/:id"><Date>{title}</Date></Link>
        </PostCardDiv>

    )

}