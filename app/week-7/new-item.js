"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.random().toString(36).substring(2, 9);
        const item = {
            id: id,
            name: name,
            quantity: quantity,
            category: category
        };
        onAddItem(item);
        alert(`Item submitted:\n- Name: ${name}\n- Quantity: ${quantity}\n- Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="mb-4 bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">Add New Item</h2>

                {/* Item Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">
                        Item Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., milk, 4 L 🥛"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>

                {/* Quantity */}
                <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1">
                        Quantity (1-20)
                    </label>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={decrement}
                            disabled={quantity <= 1}
                            className={`w-10 h-10 rounded-lg font-bold ${
                                quantity <= 1
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-red-500 text-white hover:bg-red-600"
                            }`}
                        >
                            -
                        </button>

                        <span className="min-w-12 text-center font-bold text-xl text-gray-900">
                            {quantity}
                        </span>

                        <button
                            type="button"
                            onClick={increment}
                            disabled={quantity >= 20}
                            className={`w-10 h-10 rounded-lg font-bold ${
                                quantity >= 20
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-green-500 text-white hover:bg-green-600"
                            }`}
                        >
                            +
                        </button>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Current: {quantity}</p>
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-800 mb-1">
                        Category
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-2.5 transition"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
}