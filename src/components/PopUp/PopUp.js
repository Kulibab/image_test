import React, { useEffect, useState } from 'react';
import { commentsAPI, imagesAPI } from '../../apiRequests/api';
import Comments from './Comments/Comments';
import c from './PopUp.module.scss';

const PopUp = ({ image_id, handleClose }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const getData = async () => {
      let response = await imagesAPI.getImage(image_id);
      setImage(response);
    }

    getData();
  }, [image_id])

  const handleSubmit = (e) => {
    e.preventDefault()
    commentsAPI.addComments({
      name,
      description: comment,
      image_id
    }).then(r => setNewComment(r))
  }

  return (
    <div className={c.background}>
      <div className={c.wrap}>
        <div className={c.close} onClick={handleClose} />
        <div className={c.content}>
          {image && <img src={image} alt='img' className={c.image}/>}
          <div className={c.comments}>
          <Comments image_id={image_id} newComment={newComment}/>
        </div>
        </div>
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={({target}) => setName(target.value)} placeholder='Ваше имя'/>
            <input value={comment} onChange={({target}) => setComment(target.value)} placeholder='Ваш комментарий'/>
            <button>Оставить комментарий</button>
          </form>
      </div>
    </div>
  )
}

export default PopUp;