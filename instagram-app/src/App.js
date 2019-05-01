import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      dummydata: [],
      newComments: {
        username: "studlyTroll2040",
        text: "",
      },
    }
  }

  componentDidMount(){
    this.setState({
      dummydata: dummyData,
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
        console.log(post);
        console.log(prevState.newComments);
      }
      return post.timestamp === timestamp ?{...post, comments: [...post.comments, prevState.newComments] }:post
    })
      console.log(commPost)
      return {
        ...prevState,
        dummydata: commPost,
      }
    })
    // console.log(this.state.dummydata)
  }



render(){
  // console.log(dummyData);
  return(
    <div className="App">
      <SearchBar />
      <PostContainer dummydata={this.state.dummydata} newComments={this.state.newComments} handleChanges={this.handleChanges} addComment={this.addComment} />
    </div>
    )
  }
}

export default App;
