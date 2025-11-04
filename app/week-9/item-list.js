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
    <div className="bg-slate-900 p-6 rounded-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">Items ({items.length})</h2>
        <div className="flex space-x-2">
          <span className="text-white font-medium">Sort by:</span>
          <button
            className={`px-4 py-2 rounded-md transition-colors font-medium ${
              sortBy === "name"
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
            onClick={() => setSortBy("name")}
          >
            Name
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors font-medium ${
              sortBy === "category"
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
            onClick={() => setSortBy("category")}
          >
            Category
          </button>
        </div>
      </div>

      <ul className="space-y-2">
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
