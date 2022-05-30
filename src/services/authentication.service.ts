import axios from "axios";
const API_URL = "http://localhost:3001/auth/"; //TODO: Put in .env

const signup = (username:string, password: string) => {
  return axios.post(API_URL + "signup", {
    username,
    password,
  }).then((response) => {
    if (response.data.access_token) {
      localStorage.setItem("accessToken", response.data.access_token);
    }
    return response.data;
  });
};

const login = (username:string, password: string) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("accessToken", response.data.access_token);
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("accessToken");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signup,
  login,
  logout,
};
