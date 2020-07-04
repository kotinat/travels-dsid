import axios from "axios";

const apiorder = axios.create({
  baseURL: "https://backend-dsid.herokuapp.com",
  headers: { "Content-Type": "application/json" },
});

export default apiorder;
