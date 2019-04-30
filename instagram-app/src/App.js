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
    }
  }

  componentDidMount(){
    this.setState({
      dummydata: dummyData,
      commentText: "",
    })
  }

  handleChanges = event => {
    console.log(event.target.value)
    this.setState({
      commentText: event.target.value, 
    })
  }

  addComment = (id) => {
    console.log(id)

  }

render(){
  // console.log(dummyData);
  return(
    <div className="App">
      <SearchBar />
      <PostContainer dummydata={this.state.dummydata} handleChanges={this.handleChanges}/>
    </div>
    )
  }
}

export default App;
