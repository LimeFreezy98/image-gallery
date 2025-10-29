export default function ImageCard({ img }) {
    return (
        <div className="relative overflow-hidden rounded-xl shadow hover:scale-105 transition">
            <img
               src={img}
               alt="Gallery"
               className="w-full h-60 object-cover"
               />
        </div>
    );
}