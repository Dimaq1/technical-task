import React from 'react';
import './style.scss'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <div className='footer__socials'>

          <div className='footer__socials-phones'>
            <p className='footer__socials-phones-country'>Украина</p>
            <a className='footer__socials-phones-number' href="tel:+1234567890">+38 089 420 02 28</a>
          </div>
          <div className='footer__socials-phones'>
            <p className='footer__socials-phones-country'>Европа</p>
            <a className='footer__socials-phones-number' href="tel:+1234567890">+370 7 004 47 69</a>
          </div>


          <a className='footer__socials-media footer__socials-media-telegram' target="_blank" rel="noopener noreferrer" href="https://web.telegram.org/a/">
            <img src="../../../public/images/telegram-footer.svg" alt="#" />
            <p>Telegram</p>
          </a>
          <a className='footer__socials-media footer__socials-media-mail' target="_blank" rel="noopener noreferrer" href="mailto:info@alexyanovsky.info">
            <img src="../../../public/images/mail.svg" alt="#" />
            <p>info@alexyanovsky.info</p>
          </a>

        </div>

        <div className='footer__notes'>
          <p className='footer__notes-text'>Дистанционный договор</p>
          <p className='footer__notes-text'>Архив дистанционных договоров до 2022 года</p>
          <p className='footer__notes-text'>© 2022ALEX YANOVSKY. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;