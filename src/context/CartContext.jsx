import { createContext, useContext, useReducer } from "react";

const initialState = {};

const reducer = (state, action) => {
  console.log(action);
};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  // const result = useContext(CartContext);
  // console.log(result);
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
}; // custom hook

export default CartProvider;

export { useCart };
