import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { StarIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const RestaurantsPage = () => {
  const restaurants = [
    {
      name: "Faggio",
      description: "Une excellente pizzeria italienne située dans le mythique passage des Panoramas. Le four au bois de hêtre donne une saveur unique aux pizzas napolitaines authentiques.",
      rating: 4.7,
      address: "Passage des Panoramas",
      cuisine: "Italien",
      notes: "Spécialité : Pizza napolitaine au four à bois"
    },
    // ... autres restaurants
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Top 10 Restaurants du 2ème arrondissement
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-white border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {restaurant.name}
                  </CardTitle>
                  <div className="flex items-center space-x-1">
                    <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-700">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>
                <CardDescription className="text-sm text-gray-600">
                  {restaurant.cuisine}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-700 mb-4">
                  {restaurant.description}
                </p>
                <div className="flex items-start space-x-2 text-gray-600 text-sm mb-2">
                  <MapPinIcon className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>{restaurant.address}</span>
                </div>
                <div className="mt-4 px-3 py-2 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 italic">
                    {restaurant.notes}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsPage;