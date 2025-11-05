import { useEffect, useState } from "react";

import ImageCard from "./ImageCard.jsx"; 


export default function ImageGrid({ selectedCategory, searchQuery }) {
    const [photos, setPhotos] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const fetchPhotos = async (query) => {
        try {
        //    handle "All" as a generic keyword
        const searchTerm = !query || query === "All" ? "random" : query.toLowerCase();

        //  default:  per page image 5 page number 1
         const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=10&page=1`,  {

        headers: {
            Authorization: "Client-ID YOUR_ACCESS_KEY ", //require authorization  // YOUR_ACCESS_KEY 
          },
        }
    );
        if (!response.ok) 
            throw new Error(`Error ${response.status}`);
        
        
        const data = await response.json();

        // new photos to previous one
        setPhotos(data.results || []);

        console.log("Fetched photos:", data.results);
    } catch (err) {
        console.error("Fetch failed:", err);
      }
    };

    useEffect(() => {
        const activeQuery = searchQuery || selectedCategory;
        fetchPhotos(activeQuery);
      }, [selectedCategory, searchQuery]);

   
    return (
        <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
            <div key={photo.id} onClick={() => setSelectedImage(photo.urls.full)}>
          <ImageCard key={photo.id} img={photo.urls.small} />
          </div>
          ))}
        </div>
  
        {/* // full view function  */}
       {selectedImage && (
         <div 
           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
           onClick={() => setSelectedImage(null)}
           >
            <div className="relative">
             <img
              src={selectedImage}
              alt="Full view"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
             />
             <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-white test-black px-3 py-1 rounded-md hover:bg-gray-200"
                >
                 x
                </button>
            </div>
           </div>
       )}
        </>
    );
  }