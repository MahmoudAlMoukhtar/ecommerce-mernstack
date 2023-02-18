import React, {useContext, useEffect, useState} from "react";
import * as api from "../api/index";
const CartContext = React.createContext({});

const CartProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fun = async () => {
      const user = JSON.parse(localStorage.getItem("userEcommerce"));
      try {
        if (user) {
          const {data} = await api.fetchCart();
          setCartProducts(data);
        } else {
          setCartProducts([]);
        }
      } catch (e) {
        if (e) setError(e);
      } finally {
        setLoading(false);
      }
    };
    fun();
  }, []);
  return (
    <CartContext.Provider
      value={{cartProducts, setCartProducts, loading, error}}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export {useCart, CartProvider};
