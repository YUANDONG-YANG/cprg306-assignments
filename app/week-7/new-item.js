"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    // Increment function - increases quantity up to 20
    const increment = () => {
        if (quantity >= 20) return;
        setQuantity(quantity + 1);
    };

    // Decrement function - decreases quantity down to 1
    const decrement = () => {
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create new item object with timestamp-based ID (fixes hydration issue)
        const newItem = {
            id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            name: name,
            quantity: quantity,
            category: category,
        };

        // Call the onAddItem prop
        onAddItem(newItem);

        // Reset form to initial state
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form
            className="mx-auto my-4 gap-3 flex flex-col bg-slate-900 p-4 rounded-lg"
            onSubmit={handleSubmit}
        >
            {/* Item name input field */}
            <input
                type="text"
                placeholder="Item Name"
                className="border border-gray-600 rounded p-2 bg-slate-800 text-white placeholder-gray-400"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {/* Quantity controls and category selector */}
            <div className="flex gap-4">
                {/* Quantity increment/decrement controls */}
                <div className="flex items-center gap-2 flex-1">
                    {/* Decrement button */}
                    <button
                        type="button"
                        className={`px-4 py-2 rounded font-extrabold text-lg text-white ${
                            quantity <= 1
                                ? "bg-gray-600 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600"
                        }`}
                        onClick={() => decrement()}
                        disabled={quantity <= 1}
                    >
                        −
                    </button>

                    {/* Quantity display */}
                    <span className="flex-1 text-center text-2xl font-extrabold text-white">
                        {quantity}
                    </span>

                    {/* Increment button */}
                    <button
                        type="button"
                        className={`px-4 py-2 rounded font-extrabold text-lg text-white ${
                            quantity >= 20
                                ? "bg-gray-600 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600"
                        }`}
                        onClick={() => increment()}
                        disabled={quantity >= 20}
                    >
                        +
                    </button>
                </div>

                {/* Category selection dropdown */}
                <select
                    className="border border-gray-600 rounded p-2 bg-slate-800 text-white flex-1"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold"
            >
                Add Item
            </button>
        </form>
    );
}