import React from 'react';
import './postListNav.scss';
import { NavLink } from 'react-router-dom';

const PostListNav = () => {
    return ( 
        <div className="postListNav">
            <div className="slogan">
                <p>One Line a Day</p>
            </div>
            <div className="navBar">
            <NavLink to="/createpost"><h3>+</h3></NavLink>
            </div>
        </div> 
    
    )
}

export default PostListNav;