import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faPlane, faSun } from '@fortawesome/free-solid-svg-icons';

const CruiseDestinations = () => {
  const destinations = [
    {
      name: 'Norwegian Fjords',
      price: 'From £649pp',
      image: 'https://www.pocruises.com/content/dam/po/marketing-assets/pv-landing-pages/2023/jan-pv/shutterstock_505562185.jpg.1673878280036.image.1536.1048.high.jpg',
      description: 'Sail from Southampton',
      icon: faAnchor,
      link: 'https://eurocruises.co.uk/',
    },
    {
      name: 'Caribbean',
      price: 'From £799pp',
      image: 'https://www.pocruises.com/content/dam/po/marketing-assets/campaigns/pv-pages/2022/may/shutterstock_1289586409.jpg.1651224647339.image.1536.1048.high.jpg',
      description: 'Fly or Sail from Southampton',
      icon: faPlane,
      link: 'https://eurocruises.co.uk/',
      
    },
    {
      name: 'Canary Islands',
      price: 'From £519pp',
      image: 'https://www.pocruises.com/content/dam/po/marketing-assets/destination-new/canary-islands/santa-cruz-de-tenerife.png.1723235893310.image.1536.1048.high.png',
      description: 'Fly or Sail from Southampton',
      icon: faSun,
      link: 'https://eurocruises.co.uk/',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-4">Popular Cruise Holiday Destinations</h2>
      <p className="text-center text-gray-600 mb-8">Wherever you go, you'll find that first-time feeling, every time.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </div>
    </div>
  );
};

const DestinationCard = ({ destination }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: '100%' }}
    >
      <img
        src={destination.image}
        alt={destination.name}
        loading="lazy" // Add lazy loading here
        className={`w-full h-60 object-cover transform transition-transform duration-300 ${hovered ? 'scale-110' : 'scale-100'}`}
        
        
        
      /> 
      <div className={`absolute inset-0 transition-opacity duration-300 ${hovered ? 'bg-black bg-opacity-50' : 'bg-transparent'}`} />

      <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold rounded px-3 py-1">
        {destination.price}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start bg-gradient-to-t from-black p-4">
        <div className="flex items-center mb-1">
          <FontAwesomeIcon icon={destination.icon} className="text-white mr-2" />
          <p className="text-white font-semibold">{destination.name}</p>
          
        </div>
        <p className="text-white text-sm">{destination.description}</p>
        
      </div>
    </div>
  );
};

export default CruiseDestinations;
