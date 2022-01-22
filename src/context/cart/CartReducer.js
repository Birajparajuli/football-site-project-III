import { SHOWHIDE_CART, ADD_TO_CART, REMOVE_FROM_CART } from "../Types";

const cartReducer = (state, action) => {
  switch (action.type) {
    case SHOWHIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItem: state.cartItem.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
