import { auth, googleProvider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        toast.success(`Bienvenido, ${user.displayName}`);
        navigate("/");
        } catch (error) {
        console.error("Error al iniciar sesión:", error);
        toast.error("Error al iniciar sesión con Google");
        }
    };

    return (
        <button
        onClick={handleLogin}
        className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 font-semibold flex items-center gap-2"
        >
        <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google icon"
            className="w-5 h-5"
        />
        Iniciar sesión con Google
        </button>
    );
};

export default GoogleLoginButton;
