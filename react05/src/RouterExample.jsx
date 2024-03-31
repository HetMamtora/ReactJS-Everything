import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Error from './Error';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const RouterExample = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<div>Login</div>}></Route>

            <Route path='*' element={<Error />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterExample