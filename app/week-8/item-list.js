"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    // Sort items based on sortBy state
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div className="flex-1">
            <div className="mb-4">
                <label className="mr-2 font-semibold">Sort by:</label>
                <button
                    className={`px-4 py-2 mr-2 rounded ${
                        sortBy === "name"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setSortBy("name")}
                >
                    Name
                </button>
                <button
                    className={`px-4 py-2 rounded ${
                        sortBy === "category"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setSortBy("category")}
                >
                    Category
                </button>
            </div>

            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect(item)}
                    />
                ))}
            </ul>
        </div>
    );
}