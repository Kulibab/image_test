import React, { useEffect, useState } from 'react';
import { commentsAPI } from '../../../apiRequests/api';
import Comment from './Comment/Comment';
import c from './Comments.module.scss';

const Comments = ({ image_id, newComment }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await commentsAPI.getCommentsList(image_id);
      setComments(response);
    }

    getData();
  }, [image_id, newComment])

  if (comments.detail) {
    return <div className={c.wrap}>
      {comments.detail}
    </div>
  }


  return (
    <div className={c.wrap}>
      {comments && comments.map(({name, description, id}) => <Comment name={name} description={description} key={id}/>)}
    </div>
  )
}

export default Comments;