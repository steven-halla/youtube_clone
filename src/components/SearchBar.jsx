import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const SearchBar = () => {

  const [searchResult, setSearchResult] = useState("");


  useEffect(() => {
    console.log("use effect working");
    getVideos();
  },[]);

  // use back ticks for url
  async function getVideos() {
    let response = await axios.get(``);
    console.log(response)
  }

  return (
    <div>
      <h1>Video Search</h1>
      <form action="">
        <input type="text"/>
        <button>Song Search</button>
      </form>
    </div>
)
}
