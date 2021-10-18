import React from "react";
import {buttonClasses} from "@mui/material";

/*
 * this component accepts a searchResults object, which contains the list of "items" that youtube returned to us via api.
 * we also want to pass in handleSetVideo, so that we can set the a video to display/play when user clicks on a search result.
 */
export const SearchResultsListView = (props) => {
  const {searchResults, handleSetVideo} = props;

  if (searchResults == null) {
    return <>search results is null</>;
  }

  if (searchResults.items.length === 0) {
    return <>no match found</>;
  }

return(
  <div>
    {console.log("parent function:", props)}
    {searchResults.items.map((item, index) => {
      {console.log("item", item)}
      return(
        <button key={index} onClick={() => {props.handleSetVideo(item)}}>
                <img src={item.snippet.thumbnails.default.url}
                alt="searched image"/>
        </button>
      )
    })}
  </div>

)

}




