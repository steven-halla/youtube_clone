import React, {useState} from 'react';
import styled from "@emotion/styled";

const CreateVideoPlayer = styled.div `
  .video-title {
    color: black;
    font-size: 2.5em;
  }
  
  .video-description {
    color:black;
    font-size: 1.8em;
  }
`

export const VideoPlayer = (props) => {
  const {videoId, title, description} = props;

  if (!videoId) {
    return null;
  }

  return (
    <CreateVideoPlayer>
      <div>
        <iframe
          id="ytplayer"
          title={title}
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
        <p className="video-title">Title:{title}</p>
        <p className="video-description" >Description:{description}</p>
      </div>
    </CreateVideoPlayer>)

}
