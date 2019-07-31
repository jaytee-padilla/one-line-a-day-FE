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
            <div className="back-button" >
            <Link to="/home/"><h3><i className="left chevron icon" title="back"></i></h3></Link> 
            </div>
            {/*change to link to SAVE functionality*/}
            {/* <NavLink to="#"><h3>Save</h3></NavLink> */}
            <NavLink to="#"><h3><i aria-hidden="true" className="save large icon" title="save"></i></h3></NavLink>

            </div>
        </div> 
    )
}

export default CreatePostNav;

/* delete this useless comment*/


