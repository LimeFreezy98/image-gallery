export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
    const categories = ["All", "Nature", "Technology", "Space", "Architecture", "Travel", "Food"];

    return (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
                <button 
                key={cat}
                onClick={() => onCategoryChange(cat)} // this will tell which category choose
                className={`px-4 py-2 rounded-full border border-slate-300 transition ${
                    selectedCategory === cat
                      ? "bg-slate-800 text-white"
                      : "hover:bg-slate-800 hover:text-white"
                  }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}