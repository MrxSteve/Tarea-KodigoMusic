import { songs } from "../data/songs";
import SongCard from "../components/SongCard";

const Library = () => (
    <div>
        <h2 className="text-2xl font-bold mb-6">Tu Biblioteca</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {songs.map((song) => (
                <SongCard key={song.id} song={song} />
            ))}
        </div>
    </div>
);

export default Library;