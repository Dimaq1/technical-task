import React, { useState } from 'react';
import './style.scss'
import { addNewUser } from '../../services/usersServices';

function FormComments() {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      alert('No comment');
    } else if (!name.trim()) {
      alert('No name');
    } else {
      const createdAt = new Date().toISOString();
      await addNewUser({ name, message: comment, avatar: '../../public/images/avatar.svg', createdAt });
    }
  }




  return (
    <form className='form' onSubmit={handleSubmit}>

      <textarea className='form__comment' onChange={e => setComment(e.target.value)} name="comment" id="comment" cols="30" rows="10" placeholder='Добавить комментарий...'></textarea>

      <div className='form__socials'>
        <p className='form__socials-text'>Войти через:</p>
        <ul className='form__socials-list'>
          <li className='form__socials-list-item'>
            <a className='form__socials-list-item-link' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/login.php">
              <img src="../../public/images/facebook.svg" alt="#" />
            </a>
          </li>
          <li className='form__socials-list-item'>
            <a className='form__socials-list-item-link' target="_blank" rel="noopener noreferrer" href="https://twitter.com/login">
              <img src="../../public/images/twitter.svg" alt="#" />
            </a>
          </li>
          <li className='form__socials-list-item'>
            <a className='form__socials-list-item-link' target="_blank" rel="noopener noreferrer" href="https://accounts.google.com/login">
              <img src="../../public/images/google.svg" alt="#" />
            </a>
          </li>
          <li className='form__socials-list-item'>
            <a className='form__socials-list-item-link' target="_blank" rel="noopener noreferrer" href="https://web.telegram.org/#/login">
              <img src="../../public/images/telegram.svg" alt="#" />
            </a>
          </li>
          <li className='form__socials-list-item'>
            <a className='form__socials-list-item-link' target="_blank" rel="noopener noreferrer" href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0">
              <img src="../../public/images/vk.svg" alt="#" />
            </a>
          </li>
          <li className='form__socials-list-item'>
            <a className='form__socials-list-item-link' target="_blank" rel="noopener noreferrer" href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0">
              <img src="../../public/images/yandex.svg" alt="#" />
            </a>
          </li>
        </ul>
      </div>

      <div className='form__name'>
        <label className='form__name-text' htmlFor='name'>Или как гость</label>
        <div className='form__name-inner'>
          <input className='form__name-inner-field' onChange={(e) => setName(e.target.value)} placeholder='Имя *' type="text" />
          <img className='form__name-inner-img' src="../../public/images/share.svg" alt="#" />
        </div>
      </div>

      <button className='form__button' type="submit">Отправить</button>

    </form>
  );
}

export default FormComments;

