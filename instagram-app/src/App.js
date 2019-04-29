import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      dummydata: dummyData
    }
  }


render(){
  // console.log(dummyData);
  return(
    <div className="App">
      <SearchBar />
      <PostContainer dummydata={this.state.dummydata} />
    </div>
    )
  }
}

export default App;
