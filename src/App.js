import React from 'react';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from "react-use-cart";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido!"/>
      
    </div>
  );
}

export default App;
