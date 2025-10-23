'use client';
import { useState } from 'react';

export default function NewItem() {
    // Create a state variable 'quantity' using useState Hook with initial value of 1
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity >= 20) return;
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
    };

    return (
        // Main container: centered with white background and padding
        <main className="mx-auto my-4 justify-center flex space-x-4 bg-white w-45 p-2 ">
            {/* Decrement button: disabled when quantity <= 1 */}
            <button
                type="button"
                className={`px-3 py-1 rounded font-extrabold text-lg text-white ${quantity <= 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
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
                className={`px-3 py-1 rounded font-extrabold text-lg text-white ${quantity >= 20 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                onClick={() => increment()}
                disabled={quantity >= 20}
            >
                +
            </button>
        </main>
    );
}
