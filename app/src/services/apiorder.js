import axios from "axios";

const apiorder = axios.create({
  baseURL: process.env.REACT_APP_API_ORDER,
  headers: { "Content-Type": "application/json" },
});

export default apiorder;
