import React from 'react';
import { Route, Routes }from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop/shop.component';
const Hatspage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>

      <Route path='/' element={< HomePage />}/>
      <Route path= '/hats' element={<Hatspage />}/>
      <Route path= '/shoppage' element={<ShopPage />}/>

      </Routes>
</div>
  );
}

export default App;
