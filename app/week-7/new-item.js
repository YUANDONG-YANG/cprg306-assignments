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

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Generate a random ID
        const id = Math.random().toString(36).substring(2, 9);

        // Create the item object
        const item = {
            id: id,
            name: name,
            quantity: quantity,
            category: category
        };

        // Call the parent's handler
        onAddItem(item);

        // Display confirmation alert
        alert(
            `Item submitted:\n- Name: ${name}\n- Quantity: ${quantity}\n- Category: ${category}`
        );

        // Reset form fields
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="mb-8 bg-white p-6 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-amber-900">Add New Item</h2>

                {/* Name */}
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Apples"
                        className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold">Quantity</label>
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={decrement}
                            disabled={quantity <= 1}
                            className={`rounded-xl px-4 py-2 font-bold mr-3 ${
                                quantity <= 1
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed opacity-60"
                                    : "bg-red-100 text-red-700 hover:bg-red-200"
                            }`}
                        >
                            -
                        </button>

                        <span className="min-w-16 text-center font-semibold">
                            {quantity}
                        </span>

                        <button
                            type="button"
                            onClick={increment}
                            disabled={quantity >= 20}
                            className={`rounded-xl px-4 py-2 font-bold ml-3 ${
                                quantity >= 20
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed opacity-60"
                                    : "bg-green-100 text-green-700 hover:bg-green-200"
                            }`}
                        >
                            +
                        </button>
                    </div>
                    <p className="text-xs text-gray-500">Range: 1–20</p>
                </div>

                {/* Category */}
                <div className="space-y-2">
                    <label htmlFor="category" className="block text-sm font-semibold">
                        Category
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-amber-400"
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
                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white font-bold px-6 py-3 transition"
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
}