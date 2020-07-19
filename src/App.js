import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Suscribe from './components/Suscribe';
import Destiny from './components/Destiny';
import Productos from './components/Productos';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <body>
        <Home />
        <Navbar />
        <AboutUs />
        <Services />
        <Suscribe />
        <Destiny />
        <Productos />
        <Contact />
        <Footer />

      </body>
    </div>
  );
}

export default App;
