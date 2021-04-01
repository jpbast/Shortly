/* eslint-disable max-len */
import React from 'react';
import ilustrationWorking from '../assets/images/illustration-working.svg';

function Description() {
  return (
    <div className="description-container">
      <div className="desc">
        <h1>More than just shorter links</h1>
        <span>Build your brand’s recognition and get detailed insights on how your links are performing.</span>
        <button>Get Started</button>
      </div>
      <div className="ilustration-work">
        <img width="900px" src={ilustrationWorking} alt="Ilustration work"/>
      </div>
    </div>
  );
}

export default Description;
