// test before using api test ui test
export default function Navbar() {
 return (
    <nav className="flex justify-between items-center py-4 border-b mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Gallery app</h1>

        <div className="flex items-center gap-3">
            <input 
            type="text" 
            placeholder="search.."
            className="border px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400">

            </input>
            <button className="bg-slate-800 text-white px-4 py-1 rounded-md hover:bg-slate-700">
                Search
            </button>
        </div>
    </nav>
 );

}