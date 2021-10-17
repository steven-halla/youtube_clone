import React from 'react';

// export const VideoPlayer = ({videoId, title}) => { // also works
export const VideoPlayer = (props) => {
  const { videoId, title } = props;

  if (!videoId) {
    return null;
  }

  return (
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
    </div>
  )
}
