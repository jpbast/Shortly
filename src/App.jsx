import React from 'react';
import Navbar from './components/Navbar.jsx';
import Description from './components/Description.jsx';
import ShortenLink from './components/ShortenLink.jsx';
import Features from './components/Features.jsx';
import GetStarted from './components/GetStarted.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <div className="container bg-white">
        <Navbar />
      </div>
      <Description />
      <ShortenLink />
      <div className="bg-gray">
        <Features />
      </div>
      <GetStarted />
      <Footer />
    </div>

  );
}

export default App;
