import React, {useState} from 'react';
import axios from "axios";
import styled from "@emotion/styled";
import {Button, TextField} from "@mui/material";
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';

const CreateSearchBarDiv = styled.div`
  .search-button {
    margin-top: 5px;
  }
  
  .title {
    color: red;
  }
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
    <CreateSearchBarDiv>
      <div>
        <h1 className="title">YouTube Video Search</h1>
        <form action="" method="get" onSubmit={searchAndSetVideos}>
          <TextField size="medium" id="outlined-basic" variant="outlined" name="search" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          <Button className="search-button" size="large" variant="contained" type="submit" onClick={searchAndSetVideos}>Search</Button>
          <YoutubeSearchedForIcon/>
        </form>
      </div>
    </CreateSearchBarDiv>
  )
}

const searchVideos = async (searchQuery) => {
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&key=AIzaSyAwCt9oWUZi4_CXE7XYxqPjhZmIuh7dmgY`);
  return response.data;
}
