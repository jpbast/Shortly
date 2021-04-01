/* eslint-disable max-len */
import React from 'react';
import CardsSection from './CardsSection.jsx';

function Features() {
  return (
    <div className="container container-features">
      <div className="text-center">
        <h2>Advanced Statistics</h2>
        <span>
            Track how your links are performing across the web with our advanced statistics dashboard
        </span>
      </div>
      <CardsSection />
    </div>
  );
}

export default Features;
