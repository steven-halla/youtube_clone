import React, {useState} from 'react';
import axios from "axios";

export const SearchBar = (props) => {
  const {setSearchResults} = props;

  const [searchQuery, setSearchQuery] = useState("");

  // comment out, we don't want to trigger youtube api call on every keystroke
  // useEffect(() => {
  //   console.log("use effect working");
  //   getVideos(searchQuery).then(searchResults => {
  //     setSearchResults(searchResults);
  //   });
  //
  // }, [searchQuery]);

  // async function searchAndVideos(event) { //
  const searchAndSetVideos = async (event) => {
    event.preventDefault();
    const videos = await searchVideos(searchQuery);
    // console.log('searchAndSetVideos:', videos);
     setSearchResults(videos);
  }

  return (
    <div>
      <h1>Video Search</h1>
      <form action="" method="get" onSubmit={searchAndSetVideos}>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type="submit" onClick={searchAndSetVideos}>Search</button>
      </form>
      {/*<pre>*/}
      {/*  {JSON.stringify(searchResults,null, 2)}*/}
      {/*</pre>*/}
    </div>
  )
}  // use back ticks for url

const searchVideos = async (searchQuery) => {
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&key=AIzaSyAwCt9oWUZi4_CXE7XYxqPjhZmIuh7dmgY`);
  // console.log('searchVideos:', response);
  // const response = getVideosLocal();
  return response.data;
}
//
// function getVideosLocal() {
//   return {
//     data: {
//       "kind": "youtube#searchListResponse",
//       "etag": "hASmm4Nndonvtm7U4R3YwPB2oTo",
//       "nextPageToken": "CAUQAA",
//       "regionCode": "US",
//       "pageInfo": {
//         "totalResults": 1000000,
//         "resultsPerPage": 5
//       },
//       "items": [
//         {
//           "kind": "youtube#searchResult",
//           "etag": "iBWJMBw4F9PHJEMAFafkMJ8qRig",
//           "id": {
//             "kind": "youtube#video",
//             "videoId": "rhTl_OyehF8"
//           },
//           "snippet": {
//             "publishedAt": "2021-08-06T04:00:09Z",
//             "channelId": "UCF_fDSgPpBQuh1MsUTgIARQ",
//             "title": "The Weeknd - Take My Breath (Official Music Video)",
//             "description": "EPILEPSY WARNING ******** *****EPILEPSY WARNING ******** *****EPILEPSY WARNING ******** Official music video for “Take My Breath” by The Weeknd.",
//             "thumbnails": {
//               "default": {
//                 "url": "https://i.ytimg.com/vi/rhTl_OyehF8/default.jpg",
//                 "width": 120,
//                 "height": 90
//               },
//               "medium": {
//                 "url": "https://i.ytimg.com/vi/rhTl_OyehF8/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//               },
//               "high": {
//                 "url": "https://i.ytimg.com/vi/rhTl_OyehF8/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//               }
//             },
//             "channelTitle": "TheWeekndVEVO",
//             "liveBroadcastContent": "none",
//             "publishTime": "2021-08-06T04:00:09Z"
//           }
//         },
//         {
//           "kind": "youtube#searchResult",
//           "etag": "5oN6YuhqqGVoU1xsiiGtWPFp1w0",
//           "id": {
//             "kind": "youtube#video",
//             "videoId": "XXYlFuWEuKI"
//           },
//           "snippet": {
//             "publishedAt": "2021-01-05T17:00:12Z",
//             "channelId": "UCF_fDSgPpBQuh1MsUTgIARQ",
//             "title": "The Weeknd - Save Your Tears (Official Music Video)",
//             "description": "Official music video by The Weeknd performing \"Save Your Tears\"– 'After Hours' available everywhere now: http://theweeknd.co/afterhoursYD ▻Subscribe to ...",
//             "thumbnails": {
//               "default": {
//                 "url": "https://i.ytimg.com/vi/XXYlFuWEuKI/default.jpg",
//                 "width": 120,
//                 "height": 90
//               },
//               "medium": {
//                 "url": "https://i.ytimg.com/vi/XXYlFuWEuKI/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//               },
//               "high": {
//                 "url": "https://i.ytimg.com/vi/XXYlFuWEuKI/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//               }
//             },
//             "channelTitle": "TheWeekndVEVO",
//             "liveBroadcastContent": "none",
//             "publishTime": "2021-01-05T17:00:12Z"
//           }
//         },
//         {
//           "kind": "youtube#searchResult",
//           "etag": "YgdCYzuEgOzFmHSrmZIjk74gGPM",
//           "id": {
//             "kind": "youtube#video",
//             "videoId": "cxcA1UtpOdo"
//           },
//           "snippet": {
//             "publishedAt": "2021-05-03T15:00:11Z",
//             "channelId": "UC7xv7HgIPHkMdjdS3CsIAEQ",
//             "title": "T H E W E E K N D GREATEST HITS FULL ALBUM - BEST SONGS OF T H E W E E K N D PLAYLIST 2021",
//             "description": "T H E W E E K N D GREATEST HITS FULL ALBUM - BEST SONGS OF T H E W E E K N D PLAYLIST 2021 T H E W E E K N D GREATEST HITS FULL ALBUM ...",
//             "thumbnails": {
//               "default": {
//                 "url": "https://i.ytimg.com/vi/cxcA1UtpOdo/default.jpg",
//                 "width": 120,
//                 "height": 90
//               },
//               "medium": {
//                 "url": "https://i.ytimg.com/vi/cxcA1UtpOdo/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//               },
//               "high": {
//                 "url": "https://i.ytimg.com/vi/cxcA1UtpOdo/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//               }
//             },
//             "channelTitle": "US Music",
//             "liveBroadcastContent": "none",
//             "publishTime": "2021-05-03T15:00:11Z"
//           }
//         },
//         {
//           "kind": "youtube#searchResult",
//           "etag": "24D45Tb-OUXZlUDGU23HVFk1Vi4",
//           "id": {
//             "kind": "youtube#video",
//             "videoId": "yzTuBuRdAyA"
//           },
//           "snippet": {
//             "publishedAt": "2015-05-27T13:00:03Z",
//             "channelId": "UCF_fDSgPpBQuh1MsUTgIARQ",
//             "title": "The Weeknd - The Hills (Official Video)",
//             "description": "The Weeknd - The Hills (Official Video) Download Song: http://theweeknd.co/BeautyBehindTheMadness Taken from the new album Beauty Behind The ...",
//             "thumbnails": {
//               "default": {
//                 "url": "https://i.ytimg.com/vi/yzTuBuRdAyA/default.jpg",
//                 "width": 120,
//                 "height": 90
//               },
//               "medium": {
//                 "url": "https://i.ytimg.com/vi/yzTuBuRdAyA/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//               },
//               "high": {
//                 "url": "https://i.ytimg.com/vi/yzTuBuRdAyA/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//               }
//             },
//             "channelTitle": "TheWeekndVEVO",
//             "liveBroadcastContent": "none",
//             "publishTime": "2015-05-27T13:00:03Z"
//           }
//         },
//         {
//           "kind": "youtube#searchResult",
//           "etag": "PIZI3sCUnuBa243poU3Ghi8-NBM",
//           "id": {
//             "kind": "youtube#video",
//             "videoId": "4NRXx6U8ABQ"
//           },
//           "snippet": {
//             "publishedAt": "2020-01-21T18:00:10Z",
//             "channelId": "UCF_fDSgPpBQuh1MsUTgIARQ",
//             "title": "The Weeknd - Blinding Lights (Official Video)",
//             "description": "Official music video for The Weeknd \"Blinding Lights\" - available everywhere now: http://theweeknd.co/blindinglightsYD ▻Subscribe to The Weeknd on ...",
//             "thumbnails": {
//               "default": {
//                 "url": "https://i.ytimg.com/vi/4NRXx6U8ABQ/default.jpg",
//                 "width": 120,
//                 "height": 90
//               },
//               "medium": {
//                 "url": "https://i.ytimg.com/vi/4NRXx6U8ABQ/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//               },
//               "high": {
//                 "url": "https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//               }
//             },
//             "channelTitle": "TheWeekndVEVO",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-01-21T18:00:10Z"
//           }
//         }
//       ]
//     }
//   };
// }
