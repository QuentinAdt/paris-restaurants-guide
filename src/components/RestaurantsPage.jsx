import React, { useState } from 'react';

const RestaurantsPage = () => {
  const [restaurants] = useState([
    {
      name: "Faggio",
      description: "Une excellente pizzeria italienne située dans le mythique passage des Panoramas.",
      rating: 4.7,
      address: "Passage des Panoramas",
      cuisine: "Italien"
    },
    {
      name: "Restaurant des Grands Boulevards",
      description: "Une cuisine raffinée dans un cadre somptueux.",
      rating: 4.6,
      address: "17 Boulevard Poissonnière",
      cuisine: "Français"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Restaurants du 2ème arrondissement
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{restaurant.name}</h2>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm font-medium">
                  {restaurant.rating} ★
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
              <p className="text-gray-700 mb-4">{restaurant.description}</p>
              <p className="text-gray-500 text-sm">{restaurant.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsPage;