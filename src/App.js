import React from "react";

//import css
import "./css/App.css";

//react Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import component
import Navbar from "./components/Navbar";

//Import Pages
import Home from "./pages/home/Home";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Category from "./pages/category/Category";
import Cart from "./pages/cart/Cart";
import SignIn from "./pages/signUp/SignIn";
import LogIn from "./pages/logIn/LogIn";
import PageNotFound from "./pages/404/PageNotFound";
import CheckOut from "./pages/checkout/CheckOut";
import AllProduct from "./pages/allProduct/AllProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details/:id">
          <ProductInfo />
        </Route>
        <Route exact path="/categories/:id">
          <Category />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/signup">
          <SignIn />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
        <Route exact path="/checkout">
          <CheckOut />
        </Route>
        <Route exact path="/all">
          <AllProduct />
        </Route>
        <Route
          path="/admin"
          component={() => {
            window.location.href =
              "https://football-site-backend.herokuapp.com/admin/";
            return null;
          }}
        />

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
