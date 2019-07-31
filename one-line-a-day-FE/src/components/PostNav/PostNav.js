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
            <Link to="/home/"><i className="left chevron icon"></i></Link> 
            </button>
            {/*change to link to tanias edit form */}
            {/* <NavLink to={`/post/${post.id}`}><h3>Edit</h3></NavLink> */}
            <NavLink to={`/post/${post.id}`}><h3><i aria-hidden="true" className="edit large icon"></i></h3></NavLink>

            </div>
        </div> 
    
    )
}

export default PostNav;


