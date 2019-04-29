import React from 'react'
import Post from './Post'

const PostContainer = props => {
    // console.log(props);
    // console.log(props.dummydata);
    return (
        <>
            {props.dummydata.map((data) => (
                // console.log(data.username),
                <Post post={data} key={data.username} /> 
            ))}
        </>
    )
}

export default PostContainer