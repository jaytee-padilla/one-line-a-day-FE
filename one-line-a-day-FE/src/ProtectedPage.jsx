import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

export default function ProtectedPage(props) {
	// populates page with initial journal entries upon loading
	useEffect(() => {
		axiosWithAuth().get("https://one-line-daily.herokuapp.com/api/entries")
			.then(response => {
				console.log(response.data.data);
				setEntries(response.data.data);
			})
			.catch(error => console.log(error))
	}, []);

	const [entries, setEntries] = useState([]);

	return (
		<div>
			{entries.map(entry => {
				return (
					<>
						<h2>{entry.title}</h2>
						<p>{entry.text}</p>
					</>
				)
			})}
		</div>
	)
};
