import axios from "axios";
const BASE_URL = "https://api.dev.boka.co/user-management/providers/login";

export const loginService = (data) => {
  return axios.post(`${BASE_URL}`, data);
};
