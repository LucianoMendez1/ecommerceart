import React from 'react';
import './App.css';
import Producto from './components/producto/Producto';
import Carrito from './components/carrito/Carrito';
import { CartProvider } from './components/carrito/CartContext';
import Navegacion from './components/navegacion/Navegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Conctacto from './components/contacto/Contacto';
import ProductoDetalle from './components/producto/ProductoDetalle';

const App = () => {
  return (
    <CartProvider>
      <Navegacion />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productos" element={<Producto />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path='/conctacto' element ={<Conctacto/>}/>
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
