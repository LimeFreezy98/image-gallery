import { useEffect, useState } from "react";

import ImageCard from "./ImageCard.jsx"; 


export default function ImageGrid() {
    const [photos, setPhotos] = useState([]);

    const fetchPhotos = async () => {
        try {
         const response = await fetch("https://api.unsplash.com/search/photos?query=space&per_page=5&page=1",  {

        headers: {
            Authorization: "Client-ID YOUR_ACCESS_KEY ", //require authorization  // YOUR_ACCESS_KEY 
          },
        }
    );
        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }
        
        const data = await response.json();

        // new photos to previous one
        setPhotos(data.results);

        console.log("Fetched photos:", data.results);
    } catch (err) {
        console.error("Fetch failed:", err);
      }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

   
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <ImageCard key={photo.id} img={photo.urls.small} />
          ))}
        </div>
  
    );
  }