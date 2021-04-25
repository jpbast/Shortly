import React, {useContext} from 'react';
import Navbar from './components/Navbar.jsx';
import Description from './components/Description.jsx';
import ShortenLink from './components/ShortenLink.jsx';
import Features from './components/Features.jsx';
import GetStarted from './components/GetStarted.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import {LoadingContext} from './contexts/LoadingContext';

function App() {
  const loadingCtx = useContext(LoadingContext);
  const loading = loadingCtx[0];

  return (
    <>
      <div className="loading-spinner">
        <Loader />
      </div>
      <div style={ loading ? {opacity: '0.5'} : null }>
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
    </>
  );
}

export default App;
