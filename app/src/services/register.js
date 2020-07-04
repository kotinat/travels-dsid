import axios from "axios";

const register = axios.create({
  baseURL: process.env.REACT_APP_API_REGISTER,
  headers: { "Content-Type": "application/json" },
});

export default register;
