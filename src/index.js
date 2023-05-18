import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
// import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./contexts/cart-context";
import { LoginProvider } from './contexts/login-context';
import { WishlistProvider } from './contexts/wishlist-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <WishlistProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </WishlistProvider>
      </LoginProvider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
