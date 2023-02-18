import React, {useContext, useEffect, useState} from "react";
import * as api from "../api/index";
const ProductsContext = React.createContext({});

const ProductsProdvider = ({children}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const {data} = await api.fetchProducts();
        setData(data);
      } catch (e) {
        if (e) setError(e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  return (
    <ProductsContext.Provider value={{data, error, loading}}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};

export {ProductsProdvider, useProducts};
