"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    // Redirect to landing page if user is not logged in
    if (user === null) {
      router.push("/week-9");
    }
  }, [user, router]);

  // Handle adding new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Handle item selection for meal ideas
  const handleItemSelect = (item) => {
    // Clean up the item name: remove quantity, emoji, and extra text
    const cleanName = item.name
      .split(",")[0] // Remove everything after comma
      .replace(/[0-9]/g, "") // Remove numbers
      .replace(/[\u{1F300}-\u{1F9FF}]/gu, "") // Remove emojis
      .trim(); // Remove whitespace
    
    setSelectedItemName(cleanName);
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-9");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Don't render anything if user is not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-300">
            🔒 Please sign in to access the shopping list
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-slate-900 shadow rounded-lg mb-6">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">
              🛒 Shopping List
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-white text-sm">
                  {user.displayName || user.email}
                </span>
              </div>
              <button
                onClick={() => router.push("/week-9")}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition duration-200"
              >
                Home
              </button>
              <button
                onClick={handleSignOut}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Left Panel - Shopping List */}
          <div className="w-1/2">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          {/* Right Panel - Meal Ideas */}
          <div className="w-1/2">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </div>
  );
}
