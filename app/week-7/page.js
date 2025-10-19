"use client";

import { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="mx-auto max-w-2xl p-4 min-h-screen bg-slate-950">
            <h1 className="text-3xl font-bold mb-4 text-white">
                Week 7 — Shopping List
            </h1>

            {/* New Item Form */}
            <NewItem onAddItem={handleAddItem} />

            {/* Item List with sorting */}
            <ItemList items={items} />
        </main>
    );
}