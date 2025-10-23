"use client";

import { useState, useEffect } from "react";

// Fetch meal ideas from TheMealDB API
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

// Fetch detailed meal information including ingredients
async function fetchMealDetails(mealId) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
}

// Component for individual meal item
function MealItem({ meal, isExpanded, onToggle }) {
  const [mealDetails, setMealDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch meal details when expanded
  useEffect(() => {
    if (isExpanded && !mealDetails) {
      setIsLoading(true);
      fetchMealDetails(meal.idMeal).then((details) => {
        setMealDetails(details);
        setIsLoading(false);
      });
    }
  }, [isExpanded, meal.idMeal, mealDetails]);

  // Extract ingredients from meal details
  const getIngredients = () => {
    if (!mealDetails) return [];
    
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealDetails[`strIngredient${i}`];
      const measure = mealDetails[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          name: ingredient,
          measure: measure || "",
        });
      }
    }
    return ingredients;
  };

  return (
    <li className="bg-slate-900 rounded-lg overflow-hidden">
      {/* Clickable meal header */}
      <div
        onClick={onToggle}
        className="p-3 hover:bg-slate-800 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex-1">
            <span className="text-lg font-medium">{meal.strMeal}</span>
          </div>
          {/* Expand/Collapse indicator */}
          <span className="text-2xl transition-transform duration-300" 
                style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            ▼
          </span>
        </div>
      </div>

      {/* Expanded details section */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-slate-700">
          {isLoading ? (
            <div className="py-4 text-center text-gray-400">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <p className="mt-2">Loading ingredients...</p>
            </div>
          ) : mealDetails ? (
            <div className="space-y-4 pt-4">
              {/* Ingredients section */}
              <div>
                <h4 className="font-semibold text-lg mb-2 text-blue-400">
                  📋 Ingredients:
                </h4>
                <ul className="space-y-1 ml-4">
                  {getIngredients().map((item, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>
                        <span className="font-medium">{item.name}</span>
                        {item.measure && (
                          <span className="text-gray-400"> - {item.measure}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions section */}
              {mealDetails.strInstructions && (
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-green-400">
                    👨‍🍳 Instructions:
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line ml-4">
                    {mealDetails.strInstructions}
                  </p>
                </div>
              )}

              {/* Additional info */}
              <div className="flex flex-wrap gap-2 pt-2">
                {mealDetails.strCategory && (
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">
                    🍽️ {mealDetails.strCategory}
                  </span>
                )}
                {mealDetails.strArea && (
                  <span className="px-3 py-1 bg-orange-900 text-orange-200 rounded-full text-sm">
                    🌍 {mealDetails.strArea}
                  </span>
                )}
              </div>

              {/* YouTube link if available */}
              {mealDetails.strYoutube && (
                <a
                  href={mealDetails.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  🎥 Watch Video Tutorial
                </a>
              )}
            </div>
          ) : (
            <p className="py-4 text-gray-400">Failed to load details</p>
          )}
        </div>
      )}
    </li>
  );
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedMealId, setExpandedMealId] = useState(null);

  // Load meal ideas whenever ingredient changes
  async function loadMealIdeas() {
    if (ingredient) {
      setIsLoading(true);
      setExpandedMealId(null); // Collapse all when loading new meals
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
      setIsLoading(false);
    } else {
      setMeals([]);
      setExpandedMealId(null);
    }
  }

  // Use useEffect to call loadMealIdeas when ingredient changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Toggle expanded state for a meal
  const toggleMeal = (mealId) => {
    setExpandedMealId(expandedMealId === mealId ? null : mealId);
  };

  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      {!ingredient ? (
        <p className="text-gray-400">Select an item to see meal ideas</p>
      ) : (
        <>
          <p className="mb-4 text-gray-300">
            Here are some meal ideas using{" "}
            <span className="font-semibold text-white">{ingredient}</span>:
          </p>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              <p className="mt-4 text-gray-400">Loading meal ideas...</p>
            </div>
          ) : meals.length === 0 ? (
            <div className="bg-slate-900 p-6 rounded-lg text-center">
              <p className="text-gray-400">No meal ideas found for {ingredient}.</p>
              <p className="text-sm text-gray-500 mt-2">Try selecting another item!</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-400 mb-2">
                💡 Click on any meal to see ingredients and instructions
              </p>
              <ul className="space-y-2">
                {meals.map((meal) => (
                  <MealItem
                    key={meal.idMeal}
                    meal={meal}
                    isExpanded={expandedMealId === meal.idMeal}
                    onToggle={() => toggleMeal(meal.idMeal)}
                  />
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
}
