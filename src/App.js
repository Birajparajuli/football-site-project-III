import React from "react";
import "./css/App.css";

import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Pages
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";

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
        <Route path="/sign-in">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
