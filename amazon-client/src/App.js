import './App.css';
import React, { Fragment } from "react";
import { useEffect } from "react";
import { auth } from "./firebase";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import Footer from './Footer';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51K7FUDSImPApRlyOggI87hqksNc4GXcXhGep0O6AESesUSEhGZZ6D2W7ccUgJan4iiJOyAGqKmbHCeTetQElQ2rT00rGOth3UE"
);

function App() {
  
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        var userRef = db.collection('users').doc(authUser.uid);
        var cart = [];
        userRef.get().then((doc) => {
          if (doc.exists) {
            cart = doc.data().basket;
            console.log("ccc", cart);
            dispatch({
              type: "SET_USER",
              user: authUser,
              ccc: cart
            });
          }
          else {
            console.log("ccc", cart);
            dispatch({
              type: "SET_USER",
              user: authUser,
              ccc: cart
            });
          }
        }).catch((error) => {
          console.log("Error getting document:", error);
          dispatch({
            type: "SET_USER",
            user: authUser,
            ccc: cart
          });
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
          ccc: []
        });
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);
  console.log(" USER IS >>>>>>>> ", user)
  return (
    <div className="App container-fluid">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/orders">
              <Header />
              <Orders />
              <Footer/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
              <Footer/>
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              <Footer/>
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer/>
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
