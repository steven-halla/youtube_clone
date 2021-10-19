import React, {useState} from 'react';
import {VideoPlayer} from "./components/VideoPlayer";
import {SearchBar} from "./components/SearchBar";
import {SearchResultsListView} from "./components/SearchResultsListView";

export const App = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  console.log(searchResults);

  // const videoId = getVideoIdFromFirstSearchResult(searchResults);

  const handleSetVideo = (selectedVideo) => {
    console.log('selected video', selectedVideo);
    setSelectedVideo(selectedVideo);
  }

  // const video = passVideoInPlayer();
  return (
    <div>
      <h1>hi</h1>
      <SearchBar setSearchResults={setSearchResults}/>
      <SearchResultsListView
        handleSetVideo={handleSetVideo}
        searchResults={searchResults}
      />
      <br/>
      {/*{videoId && <VideoPlayer videoId={videoId}/>}*/} {/* read up on more */}
      {/*{videoId != null ? <VideoPlayer videoId={videoId}/> : null}*/}
      {/*<VideoPlayer videoId={videoId}/>*/}
      {selectedVideo != null
        ? <VideoPlayer videoId={selectedVideo.id.videoId} title={selectedVideo.snippet.title} description={selectedVideo.snippet.description}/>
        : <VideoPlayer videoId={defaultVideoId} title={defaultVideoTitle} description={defaultVideoDescription}/>
      }
      {/*{selectedVideo != null && <VideoPlayer videoId={selectedVideo.id.videoID\d}}*/}
    </div>
  )
}

const defaultVideoId = '5qap5aO4i9A';
const defaultVideoTitle = "lofi hip hop radio - beats to relax/study to\n"
const defaultVideoDescription = "🤗 Thank you for listening, I hope you will have a good time here\n" +
  "\n" +
  "✔️ | This music is free to use in your livestreams & videos\n" +
  "→  https://bit.ly/lofigirl-usethemusic\n" +
  "\n" +
  "🎼 | Listen on Spotify, Apple music and more\n" +
  "→  https://bit.ly/lofigirI-playlists\n" +
  "\n" +
  "💬 | Join the Lofi Girl community\n" +
  "→   https://bit.ly/lofigirl-discord\n" +
  "→   https://bit.ly/lofigirl-reddit\n" +
  "\n" +
  "🌎 | Lofi Girl on all social media\n" +
  "→  https://bit.ly/lofigirl-sociaI\n" +
  "\n" +
  "👕 | Lofi Girl merch\n" +
  "→  https://bit.ly/lofigirI-merch\n" +
  "\n" +
  "🎶 | Radio tracklist\n" +
  "→  https://bit.ly/lofi-tracklist\n" +
  "\n" +
  "🎨 | Art by Juan Pablo Machado\n" +
  "→  https://bit.ly/Machadofb\n" +
  "\n" +
  "🎃 | Halloween theme by Enrico Camerra\n" +
  "→  https://www.instagram.com/enricocamerra\n" +
  "\n" +
  "📝 | Submit your music / art\n" +
  "→  https://bit.ly/lofi-submission"

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
