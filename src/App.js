import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import OrdersAndShipping from './OrdersAndShipping';
import logo from './attachment/logo-1.png'
import About from './About';

function App() {
  return (
    <div>
      <div className="header">
        <p className='par'>Free Standart Shipping</p>
    </div>
<Router>
  <nav>
    <img className='logo' src={logo} alt="logo" height="70px"/>
    <Link className='link' to="/" >Home</Link>
    <Link className='link' to="/about" >About Us</Link>
    <Link className='link' to="/shop" >Shop</Link>
    <Link className='link' to="/orders-and-shipping" >Orders and Shipping</Link>
    <Link className='link' to="/contact" >Contact</Link>
  </nav>
  <Routes>
    <Route path="/" element= {<Home />}></Route>
    <Route path="/shop" element= {<Shop />}></Route>
    <Route path="/about" element= {<About />}></Route>
    <Route path="/orders-and-shipping" element= {<OrdersAndShipping/>}></Route>
    <Route path="/contact" element= {<Contact/>}></Route>
  </Routes>
</Router>
    </div>
  );
}

export default App;
