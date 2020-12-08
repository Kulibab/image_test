import React from 'react';
import c from './Comment.module.scss';

const Comment = ({ name, description }) => {
  return (
    <div className={c.wrap}>
      <p className={c.name}>{name}:</p>
      <p className={c.desc}>{description}</p>
    </div>
  )
}

export default Comment;