import axios from 'axios';
import Cookie from 'js-cookie';

axios.interceptors.request.use(async requestConfig => {
  if (!/^\/api\/v1\/token/.test(requestConfig.url)) {
    const access = Cookie.get('access');
    if (access) {
      requestConfig.headers = {
        ...requestConfig.headers,
        Authorization: `Bearer ${access}`
      };
    }
  }

  return requestConfig;
});
