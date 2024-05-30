import axios from "../axios";
const getListProducts = () => {
  return axios.get("/api/getListProducts");
};
const getProductById = (id) => {
  return axios.get(`/api/getProductById?id=${id}`);
};

let getAllProductsByIdCategory = (id) => {
  return axios.get(`/api/getAllProductsByIdCategory?id=${id}`);
};

const getPageCount = (totalItem, limit) => {
  return Math.ceil(totalItem / limit);
};

// get product by keyword
let getProductsByKeyword = (keyword) => {
  return axios.get(`/api/getProductsByKeyword?keyword=${keyword}`);
};

export {
  getListProducts,
  getProductById,
  getPageCount,
  getAllProductsByIdCategory,
  getProductsByKeyword,
};
