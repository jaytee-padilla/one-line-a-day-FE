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
							<div className="back-button" >
								<Link to="/home/">
									<h3>
										<i className="chevron left icon" title="back" />
									</h3>
								</Link>
							</div>

							<NavLink to={`/post/${post.id}`}>
								<h3>
									<i aria-hidden="true" className="edit large icon" title="edit" />
								</h3>
							</NavLink>
            </div>
        </div> 
    )
}

export default PostNav;


