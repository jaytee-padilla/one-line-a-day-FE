import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';


export default function WillBeReplacedByJulieFile(props) {
    const [entry, setEntry] = useState("")

    useEffect(() => {
        const id = props.match.params.entryId

        axiosWithAuth()
            .get(`https://one-line-daily.herokuapp.com/api/entries/${id}`)
            .then(response => {
                setEntry(response.data.data)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h1>{entry.title}</h1>
            <h1>{entry.created_at}</h1>
        </div>
    )
}