import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './CSS/App.css'
import './CSS/sign.css'
import './CSS/index.css'




import Mockman from 'mockman-js'
import Navbar from './components/Navbar/Nav';
import Footer from './components/footer/Footer'
import Main from './pages/home/Main'

function App() {
  return (
    <>
      {/* <Mockman /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/mockman' element={<Mockman />} /> */}
        {/* <Route path='/Sign' element={<Sign />} /> */}
        {/* <Route path='/Mens' element={<Mens />} /> */}
        {/* <Route path='/Womens' element={<Womens />} /> */}
        {/* <Route path='/Decoration' element={<Decoration />} /> */}
        {/* <Route path='/Cart' element={<Cart />} /> */}
        {/* <Route path='/Empty' element={<Empty />} /> */}
        {/* <Route path='/single-product/:id' element={<Discription />} /> */}
      </Routes >
      <Footer />


    </>
  );

}

export default App;
