import axios from "axios";



const Axios = axios.create({
  baseURL: "http://63.142.251.101:3000/",
  headers: {
    "Content-type": "application/json",
  },
});
export default Axios;
