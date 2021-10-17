import React, {useState} from 'react';
import {VideoPlayer} from "./components/VideoPlayer";
import {SearchBar} from "./components/SearchBar";

export const App = () => {
  const [searchResults, setSearchResults] = useState(null);
  console.log(searchResults);

  const videoId = getVideoIdFromFirstSearchResult(searchResults);
  return (
    <div>
      <h1>hi</h1>
      <SearchBar setSearchResults={setSearchResults}/>
      <br/>
      {/*{videoId && <VideoPlayer videoId={videoId}/>}*/} {/* read up on more */}
      {/*{videoId != null ? <VideoPlayer videoId={videoId}/> : null}*/}
      <VideoPlayer videoId={videoId} />
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
