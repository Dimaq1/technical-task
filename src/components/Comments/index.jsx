import React from 'react';
import FormComments from '../FormComments';
import './style.scss'
import UsersComments from '../UsersComments';

function Comments() {
  return (
    <div className='comments'>
      <FormComments />
      <UsersComments />
    </div>
  );
}

export default Comments;