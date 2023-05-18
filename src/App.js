import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './CSS/App.css'
import './CSS/sign.css'
import './CSS/index.css'
import Mockman from 'mockman-js'
import Navbar from './components/Navbar/Nav';
import Footer from './components/footer/Footer'
import Main from './pages/home/Main'
import Discription from './pages/singleProduct/Discription'
import Mens from './pages/mens/Mens'
import Womens from './pages/womens/Womens'
import Electronics from './pages/electronics/Electronics'
import Sign from './pages/signin/Sign'
import Cart from './pages/cart/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* <Mockman /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/mockman' element={<Mockman />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/Womens' element={<Womens />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/Cart' element={<Cart />} />
        {/* <Route path='/Empty' element={<Empty />} /> */}
        <Route path='/single-product/:id' element={<Discription />} />
      </Routes >
      <Footer />
      <ToastContainer />
    </>
  );

}

export default App;
