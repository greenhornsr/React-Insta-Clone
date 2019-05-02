import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import './PostContainer.css'

// Styled-Comoponents
import styled from 'styled-components'

const Comments = styled.section`
    width: 53.5%;
    height: 20rem;
    margin-left: 2.37rem;
`
const CommentPost = styled.section`
    height: 90%;
    margin: 0 0 1.5rem 0;
    background-color: white;
    overflow: auto;
    border: 1px solid black;
`

const InputComment = styled.input`
    width: 98.5%;
    height: 10%;
    font-size: 1rem;
    text-align: center;
`




const PostContainer = (props) =>{
    // console.log(props)
    // console.log(props.post.username)
    // console.log(props.post.comments[2].text)
    const addComment = (event) => {
        console.log(event);
        event.preventDefault();
        props.addComment(props.post.timestamp);
    }
    const addLike = (event) => {
        event.preventDefault();
        // event.className.likeheart.style.background = 
        //     url('../../Sprite-heart-fadetoblack.png');
        props.addLike(props.post.timestamp);
    }

    return(
        <section className="p-container">
            <section className="post-tag">
                <img src={props.post.thumbnailUrl} alt="post logo" />
                <h1>{props.post.username}</h1><p><i className="fas fa-heart" onClick={addLike}></i>  {props.post.likes}</p>
                {/* <h1>{props.post.username}</h1><ul className="navlist"><li className="likeheart"  onClick={addLike}><a href=""></a></li></ul><p>  {props.post.likes}</p> */}
            </section>
            <section className="core-img">
                <img src={props.post.imageUrl} alt="related to post" />
            </section>
            <Comments>
                <CommentPost>
                    <CommentSection commentSection={props.post.comments}/>
                </CommentPost>
                <form onSubmit={addComment}>
                    <InputComment required placeholder="Add new comment..." value={props.post.comments.text} onChange={props.handleChanges} name="text"></InputComment>
                </form> 
            </Comments>
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