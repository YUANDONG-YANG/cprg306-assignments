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

  const increment = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Item Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Item Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter item name"
          />
        </div>

        <div className="flex gap-4">
          {/* Quantity */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Quantity
            </label>
            <div className="flex items-center bg-slate-800 rounded-md border border-slate-700">
              <button
                type="button"
                onClick={decrement}
                disabled={quantity <= 1}
                className="px-3 py-3 text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-md transition-colors"
              >
                −
              </button>
              <span className="px-4 py-3 text-white font-medium bg-slate-800 min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={increment}
                disabled={quantity >= 99}
                className="px-3 py-3 text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-r-md transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Category */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          + Add Item
        </button>
      </form>
    </div>
  );
}
