import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

// styled library
import styled from 'styled-components'

const Logout = styled.button`
    margin: 2rem 0 0 50rem;
    font-size: 1rem;
    color: red;
    :hover{
        color: yellow;
        background-color: red;
    }
`


const PostContainer = props => {
    // console.log(props);
    // console.log(props.dummydata);
    return (
        <>
            <section>
                <Logout onClick={props.handleLogout}>Logout</Logout>
            </section>
            {props.filterPost ? (props.dummydata.filter(post => {
                    return props.filterPost === post.username ?true:false;
            }).map((data) => (
                // console.log(data.username),
                <Post post={data} newComments={props.newComments} key={data.timestamp} handleChanges={props.handleChanges} addComment={props.addComment} addLike={props.addLike} /> 
            ))
            ):props.dummydata.map((data) => (
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