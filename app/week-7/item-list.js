"use client";

import Item from "./item.js";
import { useState } from "react";

// ItemList component that displays a list of shopping items
export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    // Copy and sort items
    let itemsCopy = [...items];
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
            <div className="mb-4 flex gap-2 font-bold">
                <button
                    type="button"
                    onClick={() => setSortBy("name")}
                    className={
                        sortBy === "name"
                            ? "px-3 py-1.5 rounded bg-yellow-600 text-black"
                            : "px-3 py-1.5 rounded bg-yellow-200 text-gray-800"
                    }
                >
                    Sort by Name
                </button>
                <button
                    type="button"
                    onClick={() => setSortBy("category")}
                    className={
                        sortBy === "category"
                            ? "px-3 py-1.5 rounded bg-yellow-600 text-black"
                            : "px-3 py-1.5 rounded bg-yellow-200 text-gray-800"
                    }
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