import React from 'react';

const YoutubeVideoComponent = ({ url }) => {
  return (
    <div className="relative justify-center z-[99999] rounded-xl">
      <div className="flex justify-center mt-8 mb-10 p-5 z-10 rounded-xl">
        <iframe
          width="826"
          height="465"
          src={url}
          title="YouTube video player"
          className="rounded-xl"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YoutubeVideoComponent;
