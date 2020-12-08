import axios from 'axios';

const instance =  axios.create({ baseURL: 'https://tzfrontend.herokuapp.com/' });

export const imagesAPI = {
  getImageList: () => {
    return instance.get('images')
      .then(response => response.data)
  },
  getImage: (id) => {
    return instance.get(`images/${id}`)
      .then(response => response.data.src)
  }
}

export const commentsAPI = {
  getCommentsList: (id) => {
    return instance.get(`comments/${id}`)
      .then(response => response.data)
  },
  addComments: ({ name, description, image_id}) => {
    return instance.post(`comments/add`, {
      name,
      description,
      image_id,
    })
      .then(response => response.data)
  }
}
