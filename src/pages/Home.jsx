import CategoryFilter from "../components/CategoryFilter";
import Navbar from "../components/navbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
           <div className="max-w-6xl mx-auto px-4">
            <Navbar />
            <CategoryFilter />
            
            </div> 
        </div>
    );
}