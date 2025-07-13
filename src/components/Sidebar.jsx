import { Link } from "react-router-dom";

const Sidebar = () => (
    <aside className="w-60 h-full bg-black text-white p-4">
        <h1 className="text-2xl font-bold mb-6">Kodigo Music</h1>
        <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-green-400">Inicio</Link>
        <Link to="/buscar" className="hover:text-green-400">Buscar</Link>
        <Link to="/biblioteca" className="hover:text-green-400">Tu biblioteca</Link>
        <Link to="/sugerencia" className="hover:text-green-400">Sugerencia musical</Link>
        </nav>
    </aside>
);

export default Sidebar;