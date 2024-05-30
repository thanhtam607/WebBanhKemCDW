import axios from "../axios";
const getAllCategories = () => {
  return axios.get("/api/getAllCategories");
};

export { getAllCategories };
