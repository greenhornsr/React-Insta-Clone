import React from 'react';
import './SearchBar.css'

// styled-components
import styled from 'styled-components'

const Header = styled.section`
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    // border: 1px solid red;
`
// const LogoHeader = styled.section`
//     width: 80%;
//     height: 10rem;
//     margin: 10px;
//     border: 1px solid red;
//     background-image: url('../../Instagram-Logo-004.png')
// `

const Label = styled.label`
    font-size: 1.5rem;
    color: darkgreen;
    background-color: white;
    :hover{
        background-color: yellow;
    }
`

const Input = styled.input`
    font-size: 1rem;
    color: blue;
    
    ::placeholder{
        color: red;
    }
`
// const Logout = styled.button`
//     background: ${(props) =>
//         props.user? 'blue':'orange'
//     };
//     margin: 2rem 0 0 50rem;
//     font-size: 1rem;
//     color: red;
//     :hover{
//         color: yellow;
//         background-color: red;
//     }
// `

const SearchBar = (props) => {
    // console.log(props)
    // console.log(props.dummydata)

    const handleSearch = (event) => {
        event.preventDefault();
        props.handleSearch(event.target.value);
    }
    // console.log(props.search);
    return (
        <Header>
            {/* <LogoHeader>
                <LogoImage></LogoImage>
            </LogoHeader> */}
            <form onSubmit={props.handleFilter}>
                <Label htmlFor="search">Search: </Label>
                <Input placeholder="search here..."  onChange={handleSearch} value={props.search} name="search"></Input>
            </form>
            {/* <Logout onClick={props.handleLogout}>Logout</Logout> */}
        </Header>
    )
}

export default SearchBar