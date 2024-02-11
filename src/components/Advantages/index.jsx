import React from 'react';
import './style.scss'

function Advantages() {
  const changeImagesWidth = window.innerWidth < 992



  return (
    <div className='advantages container-secondary'>
      <h2 className='advantages__title'>Ты получишь:</h2>
      <ul className='advantages__list'>
        <li className='advantages__list-item'>
          <div className='advantages__list-item-text'>12 тематических уроков в записи</div>
          <div className='advantages__list-item-images'>
            <img className='advantages__list-item-images-star' src={!changeImagesWidth ? "../../../public/images/star.svg" : "../../../public/images/star-mobile.svg"} alt="" />
            <img className='advantages__list-item-images-check' src={!changeImagesWidth ? "../../../public/images/check.svg" : "../../../public/images/check-mobile.svg"} alt="" />
          </div>
        </li>
        <li className='advantages__list-item'>
          <div className='advantages__list-item-text'>12 online - разборов своего бизнеса
            лично Алексом Яновским</div>
          <div className='advantages__list-item-images'>
            <img className='advantages__list-item-images-star' src={!changeImagesWidth ? "../../../public/images/star.svg" : "../../../public/images/star-mobile.svg"} alt="#" />
            <img className='advantages__list-item-images-check' src={!changeImagesWidth ? "../../../public/images/check.svg" : "../../../public/images/check-mobile.svg"} alt="#" />
          </div></li>
        <li className='advantages__list-item'>
          <div className='advantages__list-item-text'>Возможность смотреть за
            бизнесами других участников
            и перенимать лучшие практики</div>
          <div className='advantages__list-item-images'>
            <img className='advantages__list-item-images-star' src={!changeImagesWidth ? "../../../public/images/star.svg" : "../../../public/images/star-mobile.svg"} alt="#" />
            <img className='advantages__list-item-images-check' src={!changeImagesWidth ? "../../../public/images/check.svg" : "../../../public/images/check-mobile.svg"} alt="#" />
          </div></li>
        <li className='advantages__list-item'>
          <div className='advantages__list-item-text'>Эффективные методики, основанные на опыте увеличения чистой прибыли в 100+ компаниях</div>
          <div className='advantages__list-item-images'>
            <img className='advantages__list-item-images-star' src={!changeImagesWidth ? "../../../public/images/star.svg" : "../../../public/images/star-mobile.svg"} alt="#" />
            <img className='advantages__list-item-images-check' src={!changeImagesWidth ? "../../../public/images/check.svg" : "../../../public/images/check-mobile.svg"} alt="#" />
          </div></li>
      </ul>
    </div>
  );
}

export default Advantages;