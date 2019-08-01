import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../auth/axiosWithAuth';
import Loader from 'react-loader-spinner';
import './Post';

// components
import Post from './Post';
import PostNav from '../PostNav/PostNav';

const SelectedPost = (props) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const id = props.match.params.id

        axiosWithAuth().get(`https://one-line-daily.herokuapp.com/api/entries/${id}`)
					.then(res => {
							setPost(res.data.data);
					})
					.catch(e => {
					console.log('SelectedPostError', e)
				});
		}, [props.match.params.id]);

return (
    <div>
			<PostNav post={post}/>

			{!post ? <Loader type="Oval" color="grey" height={80} width={80} /> :
				<Post post={post} />
			}
    </div>
    )
};

export default SelectedPost;

