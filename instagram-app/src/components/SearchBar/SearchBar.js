import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    // console.log(props)
    // console.log(props.dummydata)
    const commentFilter = (event) =>{
        event.preventDefault();
        props.commentFilter(props.dummydata.username);
    }

    return (
        <>
            <form onSubmit={commentFilter}>
                <label>Search: </label>
                <input placeholder="search here..."  onChange={props.handleChanges} value={props.dummydata.username} name="username"></input>
            </form>
        </>
    )
}

export default SearchBar