import React, { useState } from 'react';
import PopUp from '../../PopUp/PopUp';
import c from './ListElem.module.scss';

const ListElem = ({ img, image_id }) => {
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <div className={c.wrap}>
      {openPopUp && <PopUp image_id={image_id} handleClose={() => setOpenPopUp(false)}/>}
      <img src={img} alt='img' onClick={() => setOpenPopUp(true)} />
    </div>
  )
}

export default ListElem;