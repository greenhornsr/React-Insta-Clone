import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = (props) =>{
    console.log(props)
    console.log(props.post.username)
    return(
        <section>
            <h1>Post: {props.post.username}</h1>

            <CommentSection />
        </section>
    )
}

export default PostContainer