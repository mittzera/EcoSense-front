import React from 'react';
import ReactPlayer from 'react-player';

function YoutubePlayerComponent() {
  return (
    <div className='relative justify-center z-[99999]'>
      <div className="flex justify-center mt-8 mb-10 p-5 z-10 rounded-xl">
        <ReactPlayer url='https://youtu.be/s8VneecWQQo?si=6YZSyclMwKgzdOx-' />
      </div>
    </div>
  );
}

export default YoutubePlayerComponent;
