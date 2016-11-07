import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash'
// Compoents
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAmgNtB0-y3f-oLiVF9aOKxZfh5aAJJrqU';


// create component to produce html

// const App = function(){
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState ({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video = { this.state.selectedVideo } />
        <VideoList
          onVideoSelect = { selectedVideo => this.setState({ selectedVideo })}
          videos = { this.state.videos } />
      </div>
    );
  }
}

// render html to screen

ReactDOM.render(<App />, document.querySelector('.container'));
