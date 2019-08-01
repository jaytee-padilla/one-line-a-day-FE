import React from 'react';
import { axiosWithAuth } from '../../auth/axiosWithAuth';
import './postNav.scss';
import { Link } from 'react-router-dom';



const EditPostNav = props => {
	const saveEditHandler = event => {
		event.preventDefault();

		axiosWithAuth().put(`https://one-line-daily.herokuapp.com/api/entries/${props.entry.id}`, {
			title: props.entry.title,
			text: props.entry.text,
			user_id: props.entry.user_id
		})
		.then(response => {
			console.log(response);
			props.routerProps.history.push("/home");
		})
		.catch(error => console.log(error))
	}

    return ( 
        <div className="nav">
            <div className="slogan">
                <p>One Line a Day</p>
            </div>

            <div className="navBar">
							<div className="back-button" >
								<Link to={`/post/${props.entry.id}`}>
									<h3>
										<i className="chevron left icon" title="back" />
									</h3>
								</Link>
							</div>

								<h3 onClick={saveEditHandler} style={{cursor: "pointer"}}>
									<i aria-hidden="true" className="save large icon" title="save"></i>
								</h3>
            </div>
        </div> 
    )
}

export default EditPostNav;