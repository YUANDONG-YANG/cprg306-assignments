export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li
            className="bg-slate-900 p-4 mb-2 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors"
            onClick={onSelect}
        >
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{name}</h3>
                    <p className="text-sm text-gray-400">
                        Buy {quantity} in {category}
                    </p>
                </div>
            </div>
        </li>
    );
}