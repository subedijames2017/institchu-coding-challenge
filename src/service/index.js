import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'; // Change this URL if needed


// We could have imlented this by using redux, but for this challenge I havent's seen any use of use redux

export const postUserData = async (values) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, values);
    return response;
  } catch (error) {
    throw error; // we might want to handle errors according to your needs later
  }
};
export const getPhotosByAlbumId = async (albumId) => {
    try {
      const response = await axios.get(`${BASE_URL}/photos?albumId=${albumId}`);
      return response.data;
    } catch (error) {
      throw error; // we might want to handle errors according to your needs later
    }
};

export default postUserData;
