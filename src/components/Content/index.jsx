import React from 'react';
import './style.scss'
import Banner from '../Banner';
import Comments from '../Comments';
import Advantages from '../Advantages';
import Video from '../Video';
import Picture from '../Picture';

function Content() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  let content;
  if ((hours === 18 && minutes >= 0 && minutes < 20) || (hours === 17 && minutes >= 60 && minutes < 80)) {
    // видео + комментарии (с 18:00 до 18:20)
    content = <div className='content__wrapp container'>
      <div className='content__inner container-secondary'>
        <Video />
      </div>
      <Comments />
    </div>;
  } else if (hours === 18 && minutes >= 20 && (hours < 21 || (hours === 21 && minutes === 0))) {
    // видео + баннеры + текст + комментарии (с 18:20 до 21:00)
    content = <div className='content__wrapp container'>
      <div className='content__inner container-secondary'>
        <Video />
        <h1 className='content__inner-title'>Как создать прирост трафика и продаж в 2023 году?</h1>
        <Banner />
      </div>
      <Comments />
      <Advantages />
    </div>;
  } else {
    // картинка + комментарии(с 21:00 до 18:00)
    content = <div className='content__wrapp container'>
      <div className='content__inner container-secondary'>
        <Picture />
      </div>
      <Comments />
    </div>;
  }


  return (
    <div className='content'>
      {content}
    </div >
  );
}

export default Content;