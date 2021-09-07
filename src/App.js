import React from "react";
import "./css/App.css";

import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Pages
import Homepage from "./pages/HomePage";
import ProductInfo from "./pages/ProductInfo";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/details/:id">
          <ProductInfo />
        </Route>
        <Route path="/category/:id">
          <Category />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
