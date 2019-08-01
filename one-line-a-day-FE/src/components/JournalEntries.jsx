import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';

// Components
import PostCard from './PostCard';
import PostListNav from './PostNav/PostListNav';


export default function JournalEntries(props) {
	// stores the id of the current user that's logged in
	const loginId = localStorage.getItem("user_id");

	// component state that will house the journal entries coming in from the backend so they can be mapped and rendered
	const [entries, setEntries] = useState([]);

	// populates page with initial journal entries from the logged in user upon loading
	useEffect(() => {
		axiosWithAuth().get(`https://one-line-daily.herokuapp.com/api/entries/user/${loginId}`)
			.then(response => {
				setEntries(response.data.data);
				console.log(response.data.data)
			})
			.catch(error => console.log(error))
	}, []);

	return (
		<React.Fragment>
			<div className="postListNav-container">
				<PostListNav props={props} />
			</div>

			<div style={{width: "75%", margin: "0 auto"}}>
				{!entries ? <h1>You don't have any journal entries yet</h1> :
					// map over entries array in reverse order so the most recent journal entry is displayed first
					[...entries].reverse().map(entry => {
						return (
							<PostCard key={entry.id} id={entry.id} date={entry.created_at} title={entry.title} text={entry.text} />
						)
					})
				}
			</div>
		</React.Fragment>
	)
};
