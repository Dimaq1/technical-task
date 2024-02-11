import React, { useRef } from 'react';
import './style.scss'

function Video() {
  const videoRef = useRef(null);

  const handleClickVideo = () => {
    const videoImage = document.querySelector('.wrapp__image');
    const videoIframe = videoRef.current;

    videoImage.style.zIndex = '0';

  };

  return (
    <div className='wrapp'>
      <img onClick={handleClickVideo} className='wrapp__image' src="../../public/images/video-cover.png" alt="#" />
      <iframe
        ref={videoRef}
        className='wrapp__iframe'
        src="https://www.youtube.com/embed/wVkD89V1-BQ"
        title="Как правильно определить рекламный бюджет?"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Video;