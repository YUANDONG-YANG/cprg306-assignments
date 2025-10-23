'use client';

import Item from '../week-3/item';
import { useState } from 'react';

const items = [
    {
        id: '1h2GJKH12gkHG31h1H',
        name: 'milk, 4 L 🥛',
        quantity: 1,
        category: 'dairy',
    },
    {
        id: '2KJH3k2j3H1k2J3K1H',
        name: 'bread 🍞',
        quantity: 2,
        category: 'bakery',
    },
    {
        id: '3h2KJH3k2j3H1k2J3',
        name: 'eggs, dozen 🥚',
        quantity: 2,
        category: 'dairy',
    },
    {
        id: '4k2J3K1H2GJKH12gk',
        name: 'bananas 🍌',
        quantity: 6,
        category: 'produce',
    },
    {
        id: '5H1h1H2KJH3k2j3H',
        name: 'broccoli 🥦',
        quantity: 3,
        category: 'produce',
    },
    {
        id: '6H1k2J3K1H2GJKH1',
        name: 'chicken breasts, 1 kg 🍗',
        quantity: 1,
        category: 'meat',
    },
    {
        id: '7gkHG31h1H2KJH3k',
        name: 'pasta sauce 🍝',
        quantity: 3,
        category: 'canned goods',
    },
    {
        id: '8j3H1k2J3K1H2GJK',
        name: 'spaghetti, 454 g 🍝',
        quantity: 2,
        category: 'dry goods',
    },
    {
        id: '9H12gkHG31h1H2KJ',
        name: 'toilet paper, 12 pack 🧻',
        quantity: 1,
        category: 'household',
    },
    {
        id: '10H3k2j3H1k2J3K1',
        name: 'paper towels, 6 pack',
        quantity: 1,
        category: 'household',
    },
    {
        id: '11k2J3K1H2GJKH12',
        name: 'dish soap 🍽️',
        quantity: 1,
        category: 'household',
    },
    {
        id: '12GJKH12gkHG31h1',
        name: 'hand soap 🧼',
        quantity: 4,
        category: 'household',
    },
];

const STRATEGY_BY_NAME = 'name';
const STRATEGY_BY_CATEGORY = 'category';
const STRATEGY_GROUP_BY_CATEGORY = 'groupByCategory';

export default function ItemList() {
    const [sortBy, setSortBy] = useState(STRATEGY_BY_NAME);
    if (sortBy === STRATEGY_BY_NAME) {
        items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === STRATEGY_BY_CATEGORY) {
        items.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <div>
            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => setSortBy(STRATEGY_BY_NAME)}
                    className={`p-2 my-4 rounded font-bold ${sortBy === STRATEGY_BY_NAME ? 'bg-yellow-500' : 'bg-gray-400'}`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy(STRATEGY_BY_CATEGORY)}
                    className={`p-2 my-4 rounded font-bold ${sortBy === STRATEGY_BY_CATEGORY ? 'bg-yellow-500' : 'bg-gray-400'}`}
                >
                    Sort by Category
                </button>
                {/* <button
                    onClick={() => setSortBy(STRATEGY_GROUP_BY_CATEGORY)}
                    className={`p-2 my-4 rounded font-bold ${sortBy === STRATEGY_GROUP_BY_CATEGORY ? 'bg-yellow-500' : 'bg-gray-400'}`}
                >
                    Group by Category
                </button> */}
            </div>
            <div className="space-y-2">
                {items.map(item => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </div>
        </div>
    );
}
