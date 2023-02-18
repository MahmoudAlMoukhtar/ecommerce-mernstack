import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import {BrowserRouter} from "react-router-dom";
import "animate.css";
import {ProductsProdvider} from "./context/ProductsContext";
import {CartProvider} from "./context/CartContext";

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <ProductsProdvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProdvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);
