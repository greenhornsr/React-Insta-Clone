import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import DataIterator from './components/PostContainer/PostContainer';
import PostContainer from './components/PostContainer/Post';

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
      <DataIterator dummydata={this.state.dummydata} />
      {/* <PostContainer /> */}
    </div>
    )
  }
}

export default App;
