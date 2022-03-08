import React from 'react';
import { Route, Routes }from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop/shop.component';
const Hatspage =Props =>{
  console.log(Props);
  return(
  <div>
    <h1>HATS PAGE:</h1>
  </div>
  );
  };
function App() {
  return (
    <div>
      <Routes>

      <Route path='/' element={< HomePage />}/>
      <Route exact path= '/hats' element={<Hatspage />}/>
      <Route path= '/hats/shoppage' element={<ShopPage />}/>

      </Routes>
</div>
  );
}

export default App;
