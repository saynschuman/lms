import axios from 'axios';

export const getActiveUser = async () => {
  try {
    const response = await axios.get('/api/v1/client/users/user/', {
      withCredentials: true
    });

    return response.data;
  } catch (error) {
    return { error: true };
  }
};
