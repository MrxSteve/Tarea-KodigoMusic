const Navbar = () => (
    <header className="w-full h-16 bg-zinc-900 text-white px-6 flex items-center justify-between">
        <div className="text-lg font-semibold">Explora música 🎧</div>
        <div>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded">
            Iniciar sesión
        </button>
        </div>
    </header>
);

export default Navbar;
