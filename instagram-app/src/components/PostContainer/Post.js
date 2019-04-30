import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import './PostContainer.css'

const PostContainer = (props) =>{
    // console.log(props)
    // console.log(props.post.username)
    return(
        <section className="p-container">
            <section className="post-tag">
                <img src={props.post.thumbnailUrl} alt="post logo" />
                <h1>{props.post.username}</h1><p>Likes: {props.post.likes}</p>
            </section>
            <section className="core-img">
                <img src={props.post.imageUrl} alt="related to post" />
            </section>
            <section className="c-tag">
                <section className="c-posts">
                    <CommentSection commentSection={props.post.comments}/>
                </section>
                <input className="add-comment" placeholder="Add new comment..."></input> 
            </section>
        </section>
    )
}

// PropTypes
PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    })   
}

export default PostContainer