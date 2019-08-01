import React, { useState } from 'react';
import { Form, TextArea, Container } from 'semantic-ui-react';
import styled from 'styled-components';

// components
import CreatePostNav from '../PostNav/CreatePostNav';

export const PostStyle = styled.div`
	margin-bottom: 20px;
	border: 1px solid lightgrey;
	padding: 20px;
`;

function CreateEntry (props) {
	// component state that will house the content of a journal entry written by a user and will be sent to the backend
	const [
		entry,
		setEntry
	] = useState({
		title   : '',
		text    : '',
		user_id : localStorage.getItem('user_id')
	});

	const changeHandler = (event) => {
		setEntry({ ...entry, [event.target.name]: event.target.value });
	};

	return (
		<div>
			<CreatePostNav entry={entry} setEntry={setEntry} routerProps={props} />
			<Container text>
				<PostStyle>
					<Form>
						<Form.Field>
							<label>Create Post</label>
							<input name="title" value={entry.title} placeholder="Title" onChange={changeHandler} />
						</Form.Field>
						<TextArea
							name="text"
							value={entry.text}
							placeholder="My daily line..."
							onChange={changeHandler}
						/>
					</Form>
				</PostStyle>
			</Container>
		</div>
	);
}

export default CreateEntry;
