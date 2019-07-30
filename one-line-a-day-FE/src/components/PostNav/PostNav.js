import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import './postNav.scss';



const PostNav = () => {
    return ( 
        <div className="nav">
            <div className="slogan">
                <p>One Line a Day</p>
            </div>
            <div className="navBar">
            <button className="button active" >
            <i className="left chevron icon"></i>
                {/* <Link to="/"> /></Link> */}
            </button>
            <h3>Edit</h3>
                {/* <Link to="/"> /></Link> */}
                {/* preventDefault, stopPropagation */}
            </div>
        </div> 
    
    )
}

export default PostNav;

