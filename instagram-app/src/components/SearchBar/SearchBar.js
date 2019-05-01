import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    // console.log(props)
    // console.log(props.dummydata)

    const handleSearch = (event) => {
        event.preventDefault();
        props.handleSearch(event.target.value);
    }
    // console.log(props.search);
    return (
        <>
            <form onSubmit={props.handleFilter}>
                <label htmlFor="search">Search: </label>
                <input placeholder="search here..."  onChange={handleSearch} value={props.search} name="search"></input>
            </form>
        </>
    )
}

export default SearchBar