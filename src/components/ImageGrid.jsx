import ImageCard from "./ImageCard";

export default function ImageGrid() {
    const placeholders = [
        "https://source.unsplash.com/random/800x600?nature",
        "https://source.unsplash.com/random/800x600?technogy",
        "https://source.unsplash.com/random/800x600?space",
        "https://source.unsplash.com/random/800x600?architecture",
        "https://source.unsplash.com/random/800x600?travel",
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {placeholders.map((src, i) => (
                <ImageCard key={i} img={src} />
            ))}
        </div>
    );
}