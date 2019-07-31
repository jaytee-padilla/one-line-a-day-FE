import React from 'react';
import './postNav.scss';
import { NavLink, Link } from 'react-router-dom';



const PostNav = ({post}) => {
    return ( 
        <div className="nav">
            <div className="slogan">
                <p>One Line a Day</p>
            </div>
            <div className="navBar">
            <button className="button active" >
            <Link to="/postlist/"><i className="left chevron icon"></i></Link> 
            </button>
            <NavLink to={`/post/${post.id}`}><h3>Edit</h3></NavLink>
            </div>
        </div> 
    
    )
}

export default PostNav;


