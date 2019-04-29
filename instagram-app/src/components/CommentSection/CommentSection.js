import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = props => {
    // console.log(props.commentSection);
    return (
        <>
        {props.commentSection.map((comment, i) => (
            <Comment comment={comment} key={i}/> 
        ))}
        </>
    )
}

// PropTypes
CommentSection.propTypes = {
    commentSection: PropTypes.array.isRequired,
}

export default CommentSection