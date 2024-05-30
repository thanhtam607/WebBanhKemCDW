import axios from "../axios";
// gett all cart by id user

const getAllCartsByIdUser = (idUser) => {
  return axios.get(`/api/getAllCartsByIdUser?id_user=${idUser}`);
};

// id_user || id_product || quantity

const addCart = (id_user, id_product, quantity) => {
  return axios.post(`/api/createCart`, {
    id_user: id_user,
    id_product: id_product,
    quantity: quantity,
  });
};

// /api/deleteCart
const deleteCart = (id) => {
  return axios.post(`/api/deleteCart`, { id: id });
};

// /api/updateCart
const updateCart = (id, quantity) => {
  return axios.post(`/api/updateCart`, { id: id, quantity: quantity });
};

// /api/updateStatusCart
const updateStatusCart = (id, status) => {
  return axios.post(`/api/updateStatusCart`, { id: id, status: status });
};

export {
  getAllCartsByIdUser,
  addCart,
  deleteCart,
  updateCart,
  updateStatusCart,
};
