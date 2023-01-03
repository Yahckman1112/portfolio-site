import React, { useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Service from './pages/services/service';
import Work from './pages/work/work';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
 
  return (
    <div  className="App">
     <NavBar/>
      <  Home />
      <  About />
     < Service/>
     <Work/>
     <Portfolio/>
     < Contact/>


    
{/*     
      <Routes>

        <Route path='/service' exact element={<  Service />}/>
        <Route path='/about' exact element={<  About />}/>
        <Route path='/' exact element={<  Home />}/>
      </Routes> */}
      
    
    </div>
  );
}

export default App;
