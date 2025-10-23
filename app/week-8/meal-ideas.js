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

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    // Load meal ideas whenever ingredient changes
    async function loadMealIdeas() {
        if (ingredient) {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        }
    }

    // Use useEffect to call loadMealIdeas when ingredient changes
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
            {ingredient ? (
                <>
                    <p className="mb-4">
                        Here are some meal ideas using {ingredient}:
                    </p>
                    {meals.length === 0 ? (
                        <p>No meal ideas found for {ingredient}.</p>
                    ) : (
                        <ul className="space-y-2">
                            {meals.map((meal) => (
                                <li
                                    key={meal.idMeal}
                                    className="bg-slate-900 p-3 rounded-lg hover:bg-slate-800 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={meal.strMealThumb}
                                            alt={meal.strMeal}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <span className="text-lg">{meal.strMeal}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <p>Select an item to see meal ideas</p>
            )}
        </div>
    );
}