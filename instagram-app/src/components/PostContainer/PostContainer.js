import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const PostContainer = props => {
    // console.log(props);
    // console.log(props.dummydata);
    return (
        <>
            <section>
                <button onClick={props.handleLogout}>Logout</button>
            </section>
            {props.dummydata.map((data) => (
                // console.log(data.username),
                <Post post={data} newComments={props.newComments} key={data.timestamp} handleChanges={props.handleChanges} addComment={props.addComment} addLike={props.addLike} /> 
            ))}
        </>
    )
}

// PropTypes
PostContainer.propTypes = {
    dummydata: PropTypes.array.isRequired
}

export default PostContainer