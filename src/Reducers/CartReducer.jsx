import { useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.newEntry];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.payload.product.id
          ? { ...item, quantity: action.payload.value }
          : item
      );
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload.product.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export const useCartReducer = () => {
  const [cartState, dispatch] = useReducer(cartReducer, []);
  return [cartState, dispatch];
};
