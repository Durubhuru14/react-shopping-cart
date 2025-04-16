/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useCartReducer } from "../Reducers/CartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const[cartState, dispatch] = useCartReducer()
  return (
    <CartContext.Provider value={{cartState, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};