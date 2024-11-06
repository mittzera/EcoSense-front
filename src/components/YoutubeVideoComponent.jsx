import React from 'react';

const YoutubeVideoComponent = ({ url }) => {
  return (
    <iframe
      width="560"
      height="315"
      className="fixed inset-0 z-[999999999999]"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
};

export default YoutubeVideoComponent;
