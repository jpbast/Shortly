/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import brandRecognition from '../assets/images/icon-brand-recognition.svg';
import detailRecords from '../assets/images/icon-detailed-records.svg';
import fullyCustomizable from '../assets/images/icon-fully-customizable.svg';

function Card(props) {
  let image = null;
  switch (props.title) {
    case 'Brand Recognition':
      image = brandRecognition;
      break;
    case 'Detailed Records':
      image = detailRecords;
      break;
    case 'Fully Customizable':
      image = fullyCustomizable;
    default:
      break;
  }

  return (
    <div className="container-card">
      <div className="container-card-img">
        <img src={image} alt=""/>
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
