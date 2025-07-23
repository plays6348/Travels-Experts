import React, { useState } from 'react';

const CruiseDestinations = () => {
  const destinations = [
    {
      name: 'Norwegian Fjords',
      price: 'From £649pp',
      image: 'https://example.com/norwegian-fjords.jpg', // Replace with actual image URLs
      description: 'Sail from Southampton',
    },
    {
      name: 'Caribbean',
      price: 'From £799pp',
      image: 'https://example.com/caribbean.jpg', // Replace with actual image URLs
      description: 'Fly or Sail from Southampton',
    },
    {
      name: 'Canary Islands',
      price: 'From £519pp',
      image: 'https://example.com/canary-islands.jpg', // Replace with actual image URLs
      description: 'Fly or Sail from Southampton',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-4">Popular Cruise Holiday Destinations</h2>
      <p className="text-center text-gray-600 mb-8">Wherever you go, you'll find that first-time feeling, every time.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold">{destination.name}</p>
        <p className="text-white text-sm">{destination.description}</p>
      </div>
      <div className="absolute top-0 left-0 m-4 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded">
        {destination.price}
      </div>
    </div>
  );
};

export default CruiseDestinations;
