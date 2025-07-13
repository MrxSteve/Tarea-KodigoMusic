import { useAuth } from "../context/AuthContext";
import GoogleLoginButton from "./GoogleLoginButton";

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <header className="w-full h-16 bg-zinc-900 text-white px-6 flex items-center justify-between">
        <div className="text-lg font-semibold">Explora música 🎧</div>
        <div>
            {user ? (
            <div className="flex items-center gap-4">
                <span className="text-sm hidden sm:inline">Bienvenido, {user.name}!</span>
                <img src={user.photo} alt="avatar" className="w-8 h-8 rounded-full" />
                <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                >
                Cerrar sesión
                </button>
            </div>
            ) : (
            <GoogleLoginButton />
            )}
        </div>
        </header>
    );
}
