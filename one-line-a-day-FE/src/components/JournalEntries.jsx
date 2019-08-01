import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';

// Components
import PostCard from './PostCard';
import PostListNav from './PostNav/PostListNav';


export default function JournalEntries(props) {
	// component state that will house the journal entries coming in from the backend so they can be mapped and rendered
	const [entries, setEntries] = useState([]);

	// populates page with initial journal entries upon loading
	useEffect(() => {
		axiosWithAuth().get(`https://one-line-daily.herokuapp.com/api/entries/`)
			.then(response => {
				setEntries(response.data.data);
			})
			.catch(error => console.log(error))
	}, []);

	return (
		<div>
			<PostListNav props={props} />

			{/* map over entries array in reverse order so the most recent journal entry is displayed first */}
			{[...entries].reverse().map(entry => {
				return (
					<PostCard key={entry.id} id={entry.id} date={entry.created_at} title={entry.title} text={entry.text} />
				)
			})}
		</div>
	)
};
