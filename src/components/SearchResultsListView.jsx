import React from "react";
import styled from "@emotion/styled";

const CreateSearchResultsListView = styled.div `
  .video-collection {
    width: 15vw;
    height: 15vh;
  }
`

export const SearchResultsListView = (props) => {
  const {searchResults} = props;

  if (searchResults == null) {
    return <></>;
  }

  if (searchResults.items.length === 0) {
    return <>no match found</>;
  }

return(
  <CreateSearchResultsListView>
    <div>
      {searchResults.items.map((item, index) => {
        return(
          <button  key={index} onClick={() => {props.handleSetVideo(item)}}>
            <img className="video-collection" src={item.snippet.thumbnails.default.url}
                 alt="searched image"/>
          </button>
        )
      })}
    </div>

  </CreateSearchResultsListView>)
}




