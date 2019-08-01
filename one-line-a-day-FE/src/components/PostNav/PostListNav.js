import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './postListNav.scss';

const PostListNav = ({props}) => {
	const logout = event => {
		localStorage.removeItem('token');
		localStorage.removeItem('user_id');
		props.history.push("/");
	}

    return ( 
        <div className="postListNav">
            <div className="slogan">
                <p>One Line a Day</p>
            </div>
            <div className="navBar">
							<Button className="logout-button" onClick={logout}>Logout</Button>
							<NavLink to="/createpost"><h3>+</h3></NavLink>
            </div>
        </div> 
    
    )
}

export default PostListNav;