import React, {useState} from 'react';
import axios from "axios";
import styled from "@emotion/styled";

const CreateSearchBarDiv = styled.div`
  

`

export const SearchBar = (props) => {
  const {setSearchResults} = props;
  const [searchQuery, setSearchQuery] = useState("");

  const searchAndSetVideos = async (event) => {
    event.preventDefault();
    const videos = await searchVideos(searchQuery);
    setSearchResults(videos);
  }

  return (
    <div>
      <h1>Video Search</h1>
      <form action="" method="get" onSubmit={searchAndSetVideos}>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type="submit" onClick={searchAndSetVideos}>Search</button>
      </form>
    </div>
  )
}

const searchVideos = async (searchQuery) => {
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&key=AIzaSyAwCt9oWUZi4_CXE7XYxqPjhZmIuh7dmgY`);
  return response.data;
}
