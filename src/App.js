import React from 'react'
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Products from './Products';
import AboutUS from './AboutUS';
import ContactUS from './ContactUS';
import Services from './Services';
import Login from './Login';
import SignUP from './SignUP'
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/aboutus" component={AboutUS}>
          </Route>
          <Route path="/contactus" component={ContactUS}>
          </Route>
          <Route path="/services" component={Services}>
          </Route>
          <Route path="/products" component={Products}>
          </Route>
          <Route path="/signup" component={SignUP}>
          </Route>
          <Route path="/login" component={Login}>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App



