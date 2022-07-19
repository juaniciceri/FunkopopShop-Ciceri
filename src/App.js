import React from 'react';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from "react-use-cart";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import{BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ItemCount from './components/ItemCount';
import ItemDetail from './components/ItemDetail';
import Data from './components/Data';



function App() {
  return (
    <>
       <BrowserRouter>
          <NavBar/>
        <Routes> 
          <Route path='/products' element={<CartProvider>
        <Home/>
        <Cart/>
      </CartProvider>}/>
      <Route path='*' element={<div style={{backgroundColor: "red"}}>ERROR 404 NOT FOUND</div>}/>
      <Route path='/marvel' />
      <Route path='/dc' />
        </Routes>
       </BrowserRouter> 
    </>
  )
}

export default App;