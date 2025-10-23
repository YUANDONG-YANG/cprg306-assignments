"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    // Handle adding new item
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    // Handle item selection
    const handleItemSelect = (item) => {
        // Clean up the item name: remove quantity, emoji, and extra text
        let cleanedName = item.name
            .split(",")[0] // Remove everything after comma
            .trim()
            .replace(
                /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                ""
            ) // Remove emojis
            .trim();

        setSelectedItemName(cleanedName);
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white p-8">
            <h1 className="text-4xl font-bold mb-8">Week-8 Shopping List</h1>

            <div className="flex gap-8">
                {/* Left side: New Item Form and Shopping List */}
                <div className="flex-1">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                {/* Right side: Meal Ideas */}
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}