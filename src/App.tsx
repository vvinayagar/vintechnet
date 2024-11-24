import logo from './logo.svg';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import React, { Component } from 'react';

// const store = createStore(rootReducer, applyMiddleware(api));
function App() {
  return (
    <div className="body-inner">
      <Header />
      {/* <Provider store={store} > */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/gallery' element={ <Gallery />} />
          <Route path='/contact' element={ <Contact />} />
        </Routes>
         
        </BrowserRouter>
      {/* </Provider> */}
      <Footer />
    </div>
  );
}

export default App;
