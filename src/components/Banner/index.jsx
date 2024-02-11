import React from 'react';
import './style.scss'

function Banner() {
  const changeText = window.innerWidth < 992



  return (
    <a className='banner' target="_blank" rel="noopener noreferrer" href="https://alexyanovsky.com/udvoenie_pribyli?utm_source=trafik_web">
      <div className='banner__inner'>
        <p className='banner__inner-text text__before'>Тренинг</p>
        <h3 className='banner__inner-title'>Удвоение прибыли</h3>
        <p className='banner__inner-text text__max-width'>Ты увеличишь прибыль в своем
          бизнесе от 2 до 6 раз за 3 месяца!</p>
      </div>
      {!changeText ? (
        <div className='banner__inner'>
          <p className='banner__inner-text'>
            <span className='text__medium'>Только до конца месяца действует</span>
            <span className='text__color-main'> специальное предложение</span>!
            Подробности у куратора после регистрации
          </p>
          <p className='banner__inner-button'>Получить спецпредложение</p>
        </div>
      ) : (<div className='banner__inner'>
        <p className='banner__inner-text banner__inner-text-border'>
          Получи
          <span className='text__color-main'> спецпредложение </span>
          у <br /> куратора после регистрации
        </p>
        <p className='banner__inner-button'>Получить спецпредложение</p>
      </div>)}
    </a>
  );
}

export default Banner;