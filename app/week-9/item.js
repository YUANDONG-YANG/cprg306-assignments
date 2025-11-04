export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="bg-slate-900 p-4 mb-2 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors shadow-md"
      onClick={onSelect}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-400 mt-1">
            Buy {quantity} in {category}
          </p>
        </div>
        <div className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </li>
  );
}
