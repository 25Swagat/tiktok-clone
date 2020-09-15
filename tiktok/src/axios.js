import axios from "./axios";
const instance = axios.create({
  baseURL: "https://tiktok25.herokuapp.com/",
});
export default instance;
