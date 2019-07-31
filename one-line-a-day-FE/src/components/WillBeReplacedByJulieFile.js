import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';


export default function WillBeReplacedByJulieFile(props) {
    const [entry, setEntry] = useState()

    useEffect(() => {
        const id = props.match.params.id

        axiosWithAuth()
            .get(`https://one-line-daily.herokuapp.com/api/entries/${id}`)
            .then(response => {
                setEntry(response.data.data)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
 
            {entry.map(ent => {
                return (
                    <div>
                        <h2>{ent.title}</h2>
                        <h2>{ent.text}</h2>
                    </div>
                )
            })}
        </div>
    )
}