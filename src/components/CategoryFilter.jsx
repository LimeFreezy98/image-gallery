export default function CategoryFilter() {
    const categories = ["All", "Nature", "Technogy", "Space", "Architecture", "Travel", "Food"];

    return (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
                <button 
                key={cat}
                className="px-4 py-2 rounded-full border border-slate-300 hover:bg-slate-800 hover:text-white transition"
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}