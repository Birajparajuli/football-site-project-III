import React from "react";
import "./css/App.css";

import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Pages
import Home from "./pages/home/Home";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Category from "./pages/category/Category";
import Cart from "./pages/cart/Cart";
import SignIn from "./pages/signUp/SignIn";
import LogIn from "./pages/logIn/LogIn";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:id">
          <ProductInfo />
        </Route>
        <Route path="/categories/:id">
          <Category />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/signup">
          <SignIn />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
