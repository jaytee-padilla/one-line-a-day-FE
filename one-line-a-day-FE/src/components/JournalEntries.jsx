import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';

export default function JournalEntries(props) {
	// populates page with initial journal entries upon loading
	useEffect(() => {
		axiosWithAuth().get("https://one-line-daily.herokuapp.com/api/entries")
			.then(response => {
				console.log(response.data.data);
				setEntries(response.data.data);
			})
			.catch(error => console.log(error))
	}, []);

	// component state that will house the journal entries coming in from the backend so they can be mapped and rendered
	const [entries, setEntries] = useState([]);

	return (
		<div>
			{entries.map(entry => {
				return (
					<div className="journal-entry" key={entry.id}>
						<h2>{entry.title}</h2>
						<p>{entry.text}</p>
					</div>
				)
			})}
		</div>
	)
};
