import axios from "axios";
import { AlertError } from "components/Alert";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// after send request
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const res = error.response;
    switch (res && res.status) {
      case 401:
        break;
      case 403:
        //do something
        break;
      case 404:
        AlertError(res.data);
        //do something
        break;
      //...
      case 500:
        break;
      default:
        AlertError(res.data);
        break;
    }
    return Promise.reject(error);
  }
);

export default request;
