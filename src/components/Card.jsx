/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import brandRecognition from '../assets/images/icon-brand-recognition.svg';

function Card(props) {
  return (
    <div className="container-card">
      <div className="container-card-img">
        <img src={brandRecognition} alt=""/>
      </div>
      <div className="card-desc">
        <h3 className="title">{props.title}</h3>
        <span>
          {props.desc}
        </span>
      </div>
    </div>
  );
}

export default Card;
