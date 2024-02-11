import React, { useEffect, useState } from 'react';
import { getUsers, updateUserLikes } from '../../services/usersServices';
import { formatTimeAgo } from '../../helpers/utils';
import './style.scss'

function UsersComments() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async () => {
      try {
        setUsers(await getUsers());
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);

  return (
    <ul className='users'>
      {users.length ? (
        users
          .map((item) =>
            <li className='users__item' key={item.id}>
              <img className='users__item-img' src={item.avatar} alt="" />
              <div className='users__item-inner'>
                <p className='users__item-inner-name'>{item.name}</p>
                <p className='users__item-inner-time'>{formatTimeAgo(item.createdAt)}</p>
                <p className='users__item-inner-message'>{item.message}</p>

                <div className='users__actions'>
                  <button className='users__actions-answer btn-users'>Ответить</button>
                  <div className='users__actions-wrapp'>
                    <div className='users__actions-counters'>
                      <div className='users__actions-inner'>
                        <button onClick={() => handleLike(item.id)} className='users__actions-inner-button btn-users'>
                          <img src="./images/like.svg" alt="#" />
                        </button>
                        <p className='users__actions-inner-counter'>0</p>
                      </div>
                      <div className='users__actions-inner'>
                        <button onClick={() => handleDislike(item.id)} className='users__actions-inner-button btn-users'>
                          <img src="./images/dislike.svg" alt="#" />
                        </button>
                        <p className='users__actions-inner-counter'>0</p>
                      </div>
                    </div>
                    <button className='users__actions-options btn-users'>
                      <img src="./images/options.svg" alt="#" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          )
      ) : (
        <p>Loading...</p>
      )
      }
    </ul>
  );
}

export default UsersComments;
