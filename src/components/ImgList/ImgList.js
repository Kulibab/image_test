import React, { useEffect, useState } from 'react';
import ListElem from './ListElem/ListElem';
import c from './ImgList.module.scss';
import { imagesAPI } from '../../apiRequests/api';

const ImgList = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let response = await imagesAPI.getImageList();
      setImages(response);
    }

    getData();
  }, []);

  return (
    <div className = { c.wrap }>
    { images && images.map(({ src, image_id }) => <ListElem img={src} image_id={image_id} key={image_id} />) } 
    </div>
  )
}

export default ImgList;