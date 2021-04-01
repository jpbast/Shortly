/* eslint-disable max-len */
import React from 'react';
import Card from './Card.jsx';

function CardsSection() {
  const brandRecognition = 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.';

  const detailedRecords = 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.';

  const fullyCustomizable = 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.';

  return (
    <div className="cards-section">
      <div className="card1" >
        <Card title="Brand Recognition" desc={brandRecognition} />
      </div>
      <div className="card2">
        <Card title="Detailed Records" desc={detailedRecords} />
      </div>
      <div className="card3">
        <Card title="Fully Customizable" desc={fullyCustomizable} />
      </div>
      <div className="line">
      </div>
    </div>
  );
}

export default CardsSection;
