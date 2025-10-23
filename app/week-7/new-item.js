"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    // Increment function from Week 4 - increases quantity up to 20
    const increment = () => {
        if (quantity >= 20) return;
        setQuantity(quantity + 1);
    };

    // Decrement function from Week 4 - decreases quantity down to 1
    const decrement = () => {
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create new item object with random ID
        const newItem = {
            id: Math.random().toString(36).substr(2, 9),
            name: name,
            quantity: quantity,
            category: category,
        };

        // Call the onAddItem prop instead of showing alert
        onAddItem(newItem);

        // Reset form to initial state
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form
            className="mx-auto my-4 gap-3 flex flex-col justify-content text-black bg-white w-100 p-4"
            onSubmit={handleSubmit}
        >
            {/* Item name input field */}
            <input
                type="text"
                placeholder="Item Name"
                className="border border-gray-600 rounded p-2"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {/* Quantity controls and category selector */}
            <div className="flex space-x-24">
                {/* Quantity increment/decrement controls from Week 4 */}
                <div className="flex items-center space-x-2">
                    {/* Decrement button: disabled when quantity <= 1 */}
                    <button
                        type="button"
                        className={`px-3 py-1 rounded font-extrabold text-lg text-white ${
                            quantity <= 1
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600"
                        }`}
                        onClick={() => decrement()}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>

                    {/* Read-only input field: displays the current quantity */}
                    <input
                        readOnly
                        type="text"
                        value={quantity}
                        className="text-black w-12 text-lg font-extrabold text-center border border-black rounded"
                    />

                    {/* Increment button: disabled when quantity >= 20 */}
                    <button
                        type="button"
                        className={`px-3 py-1 rounded font-extrabold text-lg text-white ${
                            quantity >= 20
                                ? "bg-gray-300 cursor-not-allowed"
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
                    className="border text-black border-gray-300 rounded p-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen_foods">Frozen Foods</option>
                    <option value="canned_goods">Canned Goods</option>
                    <option value="dry_goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="others">Others</option>
                </select>
            </div>

            {/* Submit button */}
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
                Add Item
            </button>
        </form>
    );
}