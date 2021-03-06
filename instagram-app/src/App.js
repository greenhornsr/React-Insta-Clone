import React from 'react';
// import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login'

// styled Components
import styled from 'styled-components'
const AppWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`

// HOC 
const ComponentFromWithAuthenticate = withAuthenticate(PostContainer)(Login);



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      dummydata: [],
      user: "",
      search: "",
      filter: "",
      newComments: {
        username: "studlyTroll2040",
        text: "",
      },
    }
  }

  componentDidMount(){
    this.setState({
      dummydata: dummyData,
      user:  localStorage.getItem('user') || '',
    })
  }

  handleChanges = event => {
    // console.log(event.target.value)
    this.setState({
      newComments:{
        ...this.state.newComments, [event.target.name]: event.target.value, 
      }     
    })
  }


//   addComment = (event) => {
//     event.preventDefault();
//     // console.log(this.state.newComments);
//     console.log(this.state.dummycomments);
//     // console.log(this);
//     this.setState({
//       dummycomments: this.state.dummycomments.concat({
//               ...this.state.newComments,
//             }) 
//     })
// }

  // addComment = (timestamp) => {
  //   // console.log(timestamp);
  //   const myNewData = this.state.dummydata.filter(post => {
  //     return post.timestamp === timestamp;
  //   })[0]
  //   myNewData.comments = [...myNewData.comments, this.state.newComments]
  //   const myOldData = this.state.dummydata.filter(post => {
  //     return post.timestamp !== timestamp;
  //   })
  //   this.setState({
  //     dummydata: [...myOldData, myNewData]
  //   })
  //   // console.log(myNewData);
  //   // console.log(myOldData);
  //     console.log(this.state);
  //   // 1. filter previous state posts to find target post
  //   // 2. update comment array of objects with new comments for target post
  //   // 3. need to filter previous state posts to exclude target post
  //   // 4. setState dummydata with ...resultsofstep3, targetPost
  // }

  //Aaron's CORRECT VERSION of addComment
  
  addComment = (timestamp) => {
    this.setState(prevState =>{
    const commPost = prevState.dummydata.map(post => {
      // console.log(post)
      if(post.timestamp === timestamp){
        // console.log(post);
        // console.log(prevState.newComments);
      }
      return post.timestamp === timestamp ?{...post, comments: [...post.comments, prevState.newComments] 
      }:post
    })
      // console.log(commPost)
      return {
        ...prevState,
        dummydata: commPost,
      }
    })
    // console.log(this.state.dummydata)
    // console.log(this.state.newComments)
  }

  addLike= (timestamp) => {
    this.setState(prevState =>{
      const likePost = prevState.dummydata.map(post => {
        if(post.timestamp === timestamp){
          // console.log(post);
          // console.log(post.likes);
          
        }return post.timestamp === timestamp ?{...post, likes: post.likes +1}:post
      })
      // console.log(likePost)
      return {
        ...prevState, 
        dummydata: likePost,
      }
    })
  }

  // Search Function
  handleSearch = (string) => {
    // console.log(string);
    this.setState({
      search: string,
    })
  }

  handleFilter = (event) => {
    event.preventDefault();
    this.setState({
      filter: this.state.search,
      search: '',
    })
  }


  // Login Functions
  handleLogin = (user) => {
    // console.log(user);
    this.setState({
      user: user,
    })
    // setting up local storage(key, value) - both must be strings 
    localStorage.setItem('user', user);
    // console.log(this.state)
  }

  handleLogout = () => {
    this.setState({
      user: '',
    })
    localStorage.removeItem('user');
  }

  // End Login Functions

render(){
  // console.log(dummyData);
  return(
    <AppWrapper>
      {/* <Login handleLogin={this.handleLogin} user={this.state.user} /> */}
      <SearchBar user={this.state.user} search={this.state.search} handleSearch={this.handleSearch} handleFilter={this.handleFilter} handleLogout={this.handleLogout} />
      <ComponentFromWithAuthenticate 
      // PostContainer props
      dummydata={this.state.dummydata} 
      newComments={this.state.newComments} 
      handleChanges={this.handleChanges} 
      addComment={this.addComment} 
      addLike={this.addLike}
      filterPost={this.state.filter}
      // login props
      handleLogin={this.handleLogin}
      handleLogout={this.handleLogout}
      user={this.state.user}
      />
    </AppWrapper>
    )
  }
}

export default App;
