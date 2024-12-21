import React from 'react';
import { Search } from 'lucide-react';

const FilterBar = ({ onFilterChange, onSearch }) => {
  const cuisineTypes = [
    "Tous",
    "Français",
    "Italien",
    "Japonais",
    "Thaïlandais",
    "Grec"
  ];

  const handleCuisineChange = (e) => {
    onFilterChange('cuisine', e.target.value);
  };

  const handleRatingChange = (e) => {
    onFilterChange('rating', parseFloat(e.target.value));
  };

  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Barre de recherche */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher un restaurant..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Filtre par cuisine */}
        <div className="md:w-48">
          <select
            onChange={handleCuisineChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {cuisineTypes.map((cuisine) => (
              <option key={cuisine} value={cuisine === "Tous" ? "" : cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>

        {/* Filtre par note minimale */}
        <div className="md:w-48">
          <select
            onChange={handleRatingChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="0">Note minimum</option>
            <option value="3">3+ étoiles</option>
            <option value="4">4+ étoiles</option>
            <option value="4.5">4.5+ étoiles</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;