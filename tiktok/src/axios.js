import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok25.herokuapp.com/",
  timeout: 1000,
});
export default instance;
