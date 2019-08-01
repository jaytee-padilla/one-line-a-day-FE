import React from 'react';
import './postNav.scss';
import { NavLink, Link } from 'react-router-dom';



const PostNav = post => {
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

							{/* NavLink passes all the props in the post parameter to the component that's being routed */}
							<NavLink to={{
								pathname: `/editpost`,
								state: {post}
							}}>
								<h3>
									<i aria-hidden="true" className="edit large icon" title="edit" />
								</h3>
							</NavLink>
            </div>
        </div> 
    )
}

export default PostNav;