import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import ItemPage from './pages/item/ItemPage';
import './App.scss';
import ShopFooter from './components/ShopFooter';

function App() {
  return (
    <div className="App">


      
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/item/:id" element={<ItemPage />} />

      </Routes>
      <ShopFooter />
    </div>
  );
}

export default App;
