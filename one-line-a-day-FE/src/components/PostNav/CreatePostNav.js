import React from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../auth/axiosWithAuth';
import { Button, Icon } from 'semantic-ui-react';
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
							<Link to="/home/">
								<Icon name="angle left" size="big" />
							</Link>
							<Button basic size="tiny" color="blue" onClick={submitHandler}>
								<h3>Save</h3>
							</Button>
            </div>
        </div> 
    )
}

export default CreatePostNav;

/* delete this useless comment*/


