import axios from "axios";

import store from "../store";

axios.defaults.timeout = 100000;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.responseType = "json";
axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
axios.defaults.withCredentials = false;

const addTokenPayload = (data) => {
  if (data) {
    /* eslint-disable-next-line */
    data.publicKey = store.state.publicKey;
  } else {
    // No data available so we create it with user token
    const newData = {
      publicKey: store.state.publicKey,
    };
    return newData;
  }
  return data;
};

export default {
  request: (url, data) =>
    axios
      .post(url, JSON.stringify(addTokenPayload(data)))
      .then((response) => {
        if (response.data && response.data.error) {
          return Promise.reject(response.data.error.message);
        }
        return Promise.resolve(response.data.data);
      })
      // eslint-disable-next-line consistent-return
      .catch((error) => {
        if (error.message === "Network Error") {
          this.$emitter.emit("NetworkError", error);
        } else if (error) {
          switch (error.code) {
            case 500000: // Internal Server Error
            case 403000: // Access Denied (redirect to /sing-in)
            case 404000: // API returns Page Not Found
              this.$emitter.emit("ApplicationError", error);
              break;
            default:
              if (error.response.data) {
                return Promise.reject(error.response.data.error.message);
              }
          }
        } else {
          this.$emitter.emit("ApplicationError", []);
        }
      }),
};
