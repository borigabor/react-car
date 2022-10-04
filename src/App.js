import React, { useState } from 'react';
import Cars from './components/Cars';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Sidebar from './components/Sidebar';
import Vehicles from './components/Vehicles';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Review from './components/Review';
import Footer from './components/Footer';

/*dd*/

function App() {


  

  const [isOpen, setIsOpen] = useState(false);

  const [login, setLogin] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const showLogin = () => setLogin(!login);

  return (
      <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} showLogin={showLogin}/>
      <Sidebar isOpen={isOpen} toggle={toggle} showLogin={showLogin}/>
      <Login login={login} showLogin={showLogin}/>
      <Hero />
      <Vehicles />
      <Services />
      <Cars />
      <Contact />
      <Review />
      <Footer />
      </Router>
  );
}

export default App;
