import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import { Route } from 'react-router-dom'

// Components
import PostCard from './PostCard'
import WillBeReplacedByJulieFile from './WillBeReplacedByJulieFile'

export default function JournalEntries(props) {
	// component state that will house the journal entries coming in from the backend so they can be mapped and rendered
	const [entries, setEntries] = useState([]);

	// populates page with initial journal entries upon loading
	useEffect(() => {
		axiosWithAuth().get("https://one-line-daily.herokuapp.com/api/entries")
			.then(response => {
				console.log(response.data.data);
				setEntries(response.data.data);
			})
			.catch(error => console.log(error))
	}, []);

	

	return (
		<div>
			{entries.map(entry => {
				return (
					<PostCard props={props} entryId={entry.id} date={entry.created_at} title={entry.title} text={entry.text} />
				)
			})}
			<Route exact path="/entry/:entryId" component={WillBeReplacedByJulieFile} />
		</div>
	)
};
