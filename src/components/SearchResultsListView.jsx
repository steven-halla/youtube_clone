import React from "react";
import {VideoPlayer} from "./VideoPlayer";
import {dividerClasses} from "@mui/material";

export const SearchResultsListView = (props) => {
  const { searchResults } = props;
  const {video, setVideo} = props;
  if (searchResults == null) {
    return null;
  }

  return(
    <div>
        {searchResults.items.map(item => {
          // console.log(item);
          // const videoId = item.id.videoId
          // return <VideoPlayer videoId={videoId}/>
          return <SearchResultItem item={item}/>
          }
        )}
    </div>
  )
}


const SearchResultItem = (props) => {
  const item = props.item;
  console.log(item);

  const video = (props) => {
    return <SearchResultItem item={item}/>
  }

  return (
    <div>
      {console.log("Incoming Props: ", props)}
      {/*<a href={item.id.videoId}>*/}

      {/*  <img src={item.snippet.thumbnails.default.url} alt="" />*/}

      {/*</a>*/}

      <button onClick={() => {props.handleSetVideo(video)}}>
        <img src= { item.snippet.thumbnails.default.url}
             alt="searched image"
             />
      </button>

      {/*{item.snippet.thumbnails.default.url}*/}
      {/*{item.items.map()}*/}

    </div>
  );
}
