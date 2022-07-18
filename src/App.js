import React from 'react';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from "react-use-cart";
import ItemListContainer from "./components/ItemListContainer";
import{BrowserRouter, Routes, Route} from "react-router-dom";
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido!"/>
      <ItemCount/>
      
    </div>
  );
}

export default App;
