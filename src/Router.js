import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <switch>
          <Route path="/" exact Component={HomePage} />
          <Route path="/product/:id" exact Component={ProductPage} />
          <Route path="/cart" exact Component={CartPage} />
        </switch>
      </Router>
    </>
  );
};

export default RouterComponent;
