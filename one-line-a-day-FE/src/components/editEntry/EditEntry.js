import React, { useState } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import styled from 'styled-components';
import '../../variables.scss'

// components
import EditPostNav from '../PostNav/EditPostNav';


export const PostStyle = styled.div`
margin-bottom: 20px;
border: 1px solid lightgrey;
padding: 20px;
`;


const EditEntry = props => {
	const {id, text, title, user_id} = props.location.state.post.post;

	const [entry, setEntry] = useState({
		id: id,
		title: title,
		text: text,
		user_id: user_id
	});

	const changeHandler = event => {
		setEntry({...entry, [event.target.name]: event.target.value})
	}

	return (
	<div>
		<EditPostNav entry={entry} routerProps={props} />

		<PostStyle>
			<Form>
				<Form.Field>
					<label>Edit Post</label>
					<input name="title" value={entry.title} onChange={changeHandler} />
				</Form.Field>
				<TextArea name="text" value={entry.text} onChange={changeHandler} />
			</Form>
		</PostStyle>
  </div>
	)
}

export default EditEntry;