import axios from "axios";

export const DOMAIN = "https://jiranew.cybersoft.edu.vn";
export const KEY_TOKEN_CYBERSOFT = "TokenCybersoft";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0";
export const ACCESSTOKEN = "accessToken";

//AXIOS INTERCEPTER CONFIGURATION
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT,
      Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
    };
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);