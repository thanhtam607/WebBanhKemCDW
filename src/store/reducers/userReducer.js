import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  userInfo: null,
  carts: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.userInfo,
        carts: action.carts,
      };
    case actionTypes.ADD_CART_SUCCESS:
      return {
        ...state,
        carts: action.carts,
      };
    case actionTypes.UPDATE_CART_SUCCESS:
      return {
        ...state,
        carts: action.carts,
      };

    default:
      return state;
  }
};

export default appReducer;
