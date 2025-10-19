"use client";

import Item from "./item.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    // Copy and sort items
    let itemsCopy = [...itemsData];
    itemsCopy.sort((a, b) => {
        const aName = a.name.trim().toLowerCase();
        const bName = b.name.trim().toLowerCase();

        if (sortBy === "name") {
            return aName.localeCompare(bName);
        }

        // Sort by category, with name as secondary sort
        const aCat = a.category.trim().toLowerCase();
        const bCat = b.category.trim().toLowerCase();
        const byCat = aCat.localeCompare(bCat);
        return byCat !== 0 ? byCat : aName.localeCompare(bName);
    });

    return (
        <div>
            {/* Sorting buttons */}
            <div className="mb-4 flex gap-2">
                <button
                    type="button"
                    onClick={() => setSortBy("name")}
                    className={`px-4 py-2 rounded font-semibold ${
                        sortBy === "name"
                            ? "bg-amber-500 text-white"
                            : "bg-amber-200 text-gray-800 hover:bg-amber-300"
                    }`}
                >
                    Sort by Name
                </button>
                <button
                    type="button"
                    onClick={() => setSortBy("category")}
                    className={`px-4 py-2 rounded font-semibold ${
                        sortBy === "category"
                            ? "bg-amber-500 text-white"
                            : "bg-amber-200 text-gray-800 hover:bg-amber-300"
                    }`}
                >
                    Sort by Category
                </button>
            </div>

            {/* Render items list */}
            <ul className="space-y-2">
                {itemsCopy.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name.trim()}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
}