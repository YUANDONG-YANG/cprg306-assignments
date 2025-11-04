"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch meals from the API
  const fetchMealIdeas = async (ingredient) => {
    if (!ingredient) return;
    
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  // Load meal ideas when ingredient changes
  useEffect(() => {
    fetchMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="bg-slate-900 p-6 rounded-lg h-fit">
      <h2 className="text-2xl font-bold text-white mb-4">Meal Ideas</h2>
      
      {ingredient ? (
        <>
          <p className="mb-4 text-gray-300">
            Here are some meal ideas using <span className="font-semibold text-blue-400">{ingredient}</span>:
          </p>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="ml-2 text-gray-300">Loading meal ideas...</span>
            </div>
          ) : meals.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-2">🤔</div>
              <p className="text-gray-400">No meal ideas found for "{ingredient}".</p>
              <p className="text-sm text-gray-500 mt-2">Try selecting a different ingredient!</p>
            </div>
          ) : (
            <div className="grid gap-3 max-h-96 overflow-y-auto">
              {meals.map((meal) => (
                <div
                  key={meal.idMeal}
                  className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{meal.strMeal}</h3>
                      <p className="text-gray-400 text-sm">Click for recipe details</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🍽️</div>
          <p className="text-gray-400">Select an item from your shopping list to see meal ideas!</p>
          <p className="text-sm text-gray-500 mt-2">
            Click on any ingredient to discover delicious recipes you can make.
          </p>
        </div>
      )}
    </div>
  );
}
