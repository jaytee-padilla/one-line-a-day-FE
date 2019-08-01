import React from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../auth/axiosWithAuth';
import './postNav.scss';

const CreatePostNav = props => {

	const submitHandler = event => {
		event.preventDefault();

		axiosWithAuth().post("https://one-line-daily.herokuapp.com/api/entries", props.entry)
			.then(response => {
				console.log(response);
				props.routerProps.history.push("/home");
			})
			.catch(error => console.log(error));
	};

    return ( 
        <div className="nav">
            <div className="slogan">
							<p>One Line a Day</p>
            </div>

            <div className="navBar">
							<div className="back-button" >
								<Link to="/home/">
									<h3>
										<i className="left chevron icon" title="back" />
									</h3>
								</Link>
							</div>

							<h3 onClick={submitHandler} style={{cursor: "pointer"}}>
								<i aria-hidden="true" className="save large icon" title="save"></i>
							</h3>
            </div>
        </div> 
    )
}

export default CreatePostNav;

/* delete this useless comment*/


