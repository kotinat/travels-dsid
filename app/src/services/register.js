import axios from "axios";

const register = axios.create({
  baseURL: "https://backend-dsid.herokuapp.com/auth",
  headers: {'Content-Type': 'application/json'}
});

export default register;
