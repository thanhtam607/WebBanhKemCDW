import axios from "../axios";
// login
const userLogin = (email, pass) => {
  return axios.post("/api/login", { email: email, pass: pass });
};

export { userLogin };
