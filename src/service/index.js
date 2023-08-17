import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'; // Change this URL if needed

export const postUserData = async (values) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, values);
    return response;
  } catch (error) {
    throw error; // we might want to handle errors according to your needs
  }
};
export const getPhotosByAlbumId = async (albumId) => {
    try {
      const response = await axios.get(`${BASE_URL}/photos?albumId=${albumId}`);
      return response.data;
    } catch (error) {
      throw error; // we might want to handle errors according to your needs
    }
};

export default postUserData;
