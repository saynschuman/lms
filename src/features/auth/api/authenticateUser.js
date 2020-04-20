import axios from 'axios';

export default async (username, password) => {
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    const response = await axios.post('/api/v1/token/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    return { error: true };
  }
};
