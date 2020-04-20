import axios from "axios";

axios.interceptors.response.use(
  response => response,
  error => {
    (error.response.status === 401 /*|| error.response.status === 403*/) &&
      window.location.replace("/authentication/login");
    return Promise.reject(error);
  }
);
