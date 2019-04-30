import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css'

const Comment = (props) => {
    return (
        <section className="comm-posts">
            <h3>{props.comment.username}</h3>
            <p>{props.comment.text}</p>
        </section>
    )
}

// PropTypes
Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
}

export default Comment