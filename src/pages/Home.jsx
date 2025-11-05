import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ImageGrid from "../components/ImageGrid";
import Navbar from "../components/navbar";

export default function Home() {
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [searchQuery, setSearchQuery] = useState("");
    
    const handleSearch = (query) => {
        setSearchQuery(query);
        setSelectedCategory("");
    };
   
   const handleCategoryChange = (category) => {
     setSelectedCategory(category);
     setSearchQuery("") // this will clear search when press category
   }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
           <div className="max-w-6xl mx-auto px-4">
            <Navbar  onSearch={handleSearch} />
            <CategoryFilter 
             selectedCategory={selectedCategory}
             onCategoryChange={handleCategoryChange}
            />
            <ImageGrid selectedCategory={selectedCategory}  searchQuery={searchQuery}/>
            
            </div> 
        </div>
    );
}