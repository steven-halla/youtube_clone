import React from "react";

/*
 * this component accepts a searchResults object, which contains the list of "items" that youtube returned to us via api.
 * we also want to pass in handleSetVideo, so that we can set the a video to display/play when user clicks on a search result.
 */
export const SearchResultsListView = (props) => {
  const { searchResults, handleSetVideo } = props;

  if (searchResults == null) {
    return <>search results is null</>;
  }

  if (searchResults.items.length === 0) {
    return <>no match found</>;
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
  // handleSetVideo = item;
  console.log(item);


  // const video = (props) => {
  //   return <SearchResultItem item={item}/>
  // }

  console.log("Incoming Props: ", props);

  return (
    <div>
      {/*<a href={item.id.videoId}>*/}

      {/*  <img src={item.snippet.thumbnails.default.url} alt="" />*/}

      {/*</a>*/}

      <button onClick={() => {props.handleSetVideo(item)}}>
        <img src= { item.snippet.thumbnails.default.url}
             alt="searched image"
             />
      </button>

      {/*{item.snippet.thumbnails.default.url}*/}
      {/*{item.items.map()}*/}

    </div>
  );
}
