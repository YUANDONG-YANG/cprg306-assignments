"use client";

import Item from "./item";
import { useState } from "react";

const STRATEGY_BY_NAME = "name";
const STRATEGY_BY_CATEGORY = "category";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState(STRATEGY_BY_NAME);

    // Create a copy of items to avoid mutating the prop (React immutability principle)
    let sortedItems = [...items];

    // Sort items based on selected strategy
    if (sortBy === STRATEGY_BY_NAME) {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === STRATEGY_BY_CATEGORY) {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <div>
            {/* Sorting buttons */}
            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => setSortBy(STRATEGY_BY_NAME)}
                    className={`p-2 my-4 rounded font-bold ${
                        sortBy === STRATEGY_BY_NAME ? "bg-yellow-500" : "bg-gray-400"
                    }`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy(STRATEGY_BY_CATEGORY)}
                    className={`p-2 my-4 rounded font-bold ${
                        sortBy === STRATEGY_BY_CATEGORY ? "bg-yellow-500" : "bg-gray-400"
                    }`}
                >
                    Sort by Category
                </button>
            </div>

            {/* Items list */}
            <div className="space-y-2">
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </div>
        </div>
    );
}