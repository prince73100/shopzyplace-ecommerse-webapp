import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shops from './pages/Shops';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Carts from './pages/Carts';
import LoginSignup from './pages/LoginSignup';
import Footer from './component/footer/Footer';
import banner_mens from './component/assets/banner_mens.png'
import banner_women from './component/assets/banner_women.png'
import banner_kids from './component/assets/banner_kids.png'
import './App.css'
function App() {
  return (
    <div className='main-app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shops />} />
          <Route path='/mens' element={<ShopCategory banner={banner_mens} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={banner_women} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid" />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/carts' element={<Carts/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
        <Footer  />
      </BrowserRouter>
    </div>
  )
}

export default App
