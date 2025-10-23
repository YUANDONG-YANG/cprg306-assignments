"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            quantity,
            category,
        };

        onAddItem(newItem);

        // Reset form
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-slate-900 p-6 rounded-lg mb-6"
        >
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Item Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white"
                    placeholder="Enter item name"
                />
            </div>

            <div className="mb-4 flex gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Quantity</label>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            disabled={quantity === 1}
                            className="w-10 h-10 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed font-bold text-xl"
                        >
                            −
                        </button>
                        <span className="flex-1 text-center text-2xl font-semibold">
              {quantity}
            </span>
                        <button
                            type="button"
                            onClick={() => setQuantity(Math.min(99, quantity + 1))}
                            disabled={quantity === 99}
                            className="w-10 h-10 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed font-bold text-xl"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white"
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
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
                Add Item
            </button>
        </form>
    );
}