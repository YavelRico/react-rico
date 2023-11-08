import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemListDetails';
import Checkout from './components/Checkout';
import Brief from './components/Brief';
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categories" element={<ItemListContainer />} />
            <Route path="/detalles/:productId" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/brief" element={<Brief />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

