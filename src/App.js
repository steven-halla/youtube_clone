import React, {useState} from 'react';
import {VideoPlayer} from "./components/VideoPlayer";
import {SearchBar} from "./components/SearchBar";
import {SearchResultsListView} from "./components/SearchResultsListView";

export const App = () => {
  const [searchResults, setSearchResults] = useState(null);

  console.log(searchResults);

  const videoId = getVideoIdFromFirstSearchResult(searchResults);

  const handleSetVideo = (selectedVideo) => {
    setVideo(selectedVideo)
  }

  const [video, setVideo] = useState();
  // const video = passVideoInPlayer();
  return (
    <div>
      <h1>hi</h1>
      <SearchBar setSearchResults={setSearchResults}/>
      <SearchResultsListView  handleSetVideo={handleSetVideo} searchResults={searchResults} video={video}/>
      <br/>
      {/*{videoId && <VideoPlayer videoId={videoId}/>}*/} {/* read up on more */}
      {/*{videoId != null ? <VideoPlayer videoId={videoId}/> : null}*/}
      <VideoPlayer videoId={videoId}/>
    </div>
  )
}

const defaultVideoId = 'Q8JyF3wpsHc';

function getVideoIdFromFirstSearchResult(searchResult) {
  console.log('getVideoIdFromFirstSearchResult:', searchResult);

  if (!searchResult) {
    return defaultVideoId;
  }
  if (searchResult.items.length === 0) {
    return defaultVideoId;
  }

  return searchResult.items[0].id.videoId;
}

function passVideoInPlayer(video) {
  console.log(video)

  return video;
}
