import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import { Route } from 'react-router-dom';

// components
import PostListNav from './PostNav/PostListNav';
import PostCard from './PostCard';
import Post from './Post/SelectedPost';

export default function JournalEntries(props) {
	const loggedInUserId = localStorage.getItem("user_id");

	// populates page with initial journal entries upon loading
	useEffect(() => {
		axiosWithAuth().get(`https://one-line-daily.herokuapp.com/api/entries/`)
			.then(response => {
				setEntries(response.data.data);
			})
			.catch(error => console.log(error))
	}, []);

	// component state that will house the journal entries coming in from the backend so they can be mapped and rendered
	const [entries, setEntries] = useState([]);

	return (
		<div>
			<PostListNav />
			{entries.map(entry => {
				return (
					<PostCard key={entry.id} title={entry.title} text={entry.text} entry={entry} />
				)
			})}
			<Route path="/home/:id" component={Post} />
		</div>
	)
};
