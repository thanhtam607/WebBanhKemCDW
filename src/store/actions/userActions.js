import { update } from "lodash";
import actionTypes from "./actionTypes";

export const addUserSuccess = () => ({
  type: actionTypes.ADD_USER_SUCCESS,
});

export const userLoginSuccess = (userInfo, carts) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  userInfo: userInfo,
  carts: carts,
});

// add  cart
export const addCartSuccess = (carts) => ({
  type: actionTypes.ADD_CART_SUCCESS,
  carts: carts,
});

// update carts
export const updateCartSuccess = (carts) => ({
  type: actionTypes.UPDATE_CART_SUCCESS,
  carts: carts,
});
