import React from 'react';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div>
      <NavBar/>
      <CartProvider>
        <Home/>
        <Cart/>
      </CartProvider>
    </div>
  );
}

export default App;
