import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const PostContainer = props => {
    // console.log(props);
    // console.log(props.dummydata);
    return (
        <>
            {props.dummydata.map((data) => (
                // console.log(data.username),
                <Post post={data} key={data.timestamp} handleChanges={props.handleChanges} /> 
            ))}
        </>
    )
}

// PropTypes
PostContainer.propTypes = {
    dummydata: PropTypes.array.isRequired
}

export default PostContainer