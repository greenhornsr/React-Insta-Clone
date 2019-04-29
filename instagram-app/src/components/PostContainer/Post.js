import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props) =>{
    // console.log(props)
    // console.log(props.post.username)
    return(
        <section>
            <h1>{props.post.username}</h1><p>{props.post.likes}</p>
            <img src={props.post.thumbnailUrl} alt="post logo" /><br/>
            <img src={props.post.imageUrl} alt="related to post" />
            <CommentSection commentSection={props.post.comments}/>
            <input placeholder="Add new comment..."></input>
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