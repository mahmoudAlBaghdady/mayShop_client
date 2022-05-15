import React, { Fragment } from "react";
import "./App.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import MainPage from "./components/Main page/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Login from "./components/loginReg/Login";
import Register from "./components/loginReg/Register";
import NotFound from "./components/LoadingError/NotFound";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Purchasing/Shipping";
import PlaceOrder from "./components/Purchasing/PlaceOrder";
import Payment from "./components/Purchasing/Payment";
import Order from "./components/Purchasing/Order";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/products/:id">
          <SingleProduct />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/shipping">
          <Shipping />
        </Route>
        <Route path="/placeorder">
          <PlaceOrder />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
