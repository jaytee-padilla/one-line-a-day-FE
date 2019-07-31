import React from 'react';
import './postNav.scss';
import { NavLink, Link } from 'react-router-dom';



const CreatePostNav = () => {
    return ( 
        <div className="nav">
            <div className="slogan">
                <p>One Line a Day</p>
            </div>
            <div className="navBar">
            <button className="button active" >
            <Link to="/postlist/"><i className="left chevron icon"></i></Link> 
            </button>
            {/*change to link to SAVE functionality*/}
            <NavLink to="#"><h3>Save</h3></NavLink>
            </div>
        </div> 
    
    )
}

export default CreatePostNav;


