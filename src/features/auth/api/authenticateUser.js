import axios from 'axios';
import Cookie from 'js-cookie';

export default async (username, password) => {
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    const response = await axios.post('/api/v1/token/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      withCredentials: true
    });

    if (!!response.data.access) {
      Cookie.set('access', response.data.access);
    }

    return response.data;
  } catch (error) {
    return { error: true };
  }
};
