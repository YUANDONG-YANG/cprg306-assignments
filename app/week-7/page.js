"use client";

import { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    // Handle adding a new item to the list
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="mx-auto max-w-2xl p-8 min-h-screen bg-slate-950">
            <h1 className="text-4xl font-bold mb-6 text-white">Shopping List</h1>

            {/* New Item Form */}
            <NewItem onAddItem={handleAddItem} />

            {/* Item List with sorting */}
            <ItemList items={items} />
        </main>
    );
}