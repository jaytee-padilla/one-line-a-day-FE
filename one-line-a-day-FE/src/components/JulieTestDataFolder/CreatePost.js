import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import styled from 'styled-components';
import '../../variables.scss'


export const PostStyle = styled.div`
margin-bottom: 20px;
border: 1px solid lightgrey;
padding: 20px;
`;


const CreatePost = ({post}) => {

    const { id } = post;

    return (
    <PostStyle>
    <Form>
    <Form.Field>
      <label>Create Post</label>
      <input />
    </Form.Field>
    <TextArea placeholder='My daily line...' />
  </Form>
  </PostStyle>
    )
    }

export default CreatePost;