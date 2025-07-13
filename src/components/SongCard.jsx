import { FaPlay } from "react-icons/fa";

const SongCard = ({ song }) => (
    <div className="relative group bg-zinc-800 rounded-2xl p-3 shadow-lg hover:bg-zinc-700 transition-all duration-200 hover:scale-105 overflow-hidden">
        <div className="relative w-full h-100 rounded-xl bg-black flex items-center justify-center overflow-hidden">
        <img
            src={song.cover}
            alt={song.title}
            className="max-w-full max-h-full object-contain"
        />

        <button className="absolute bottom-2 right-2 bg-green-500 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg hover:bg-green-600">
            <FaPlay size={14} />
        </button>
        </div>

        <div className="mt-3">
        <h3 className="text-white text-base font-semibold truncate">{song.title}</h3>
        <p className="text-sm text-gray-300 truncate">{song.artist}</p>
        <p className="text-sm text-gray-400 italic truncate">{song.album}</p>
        </div>
    </div>
);

export default SongCard;
