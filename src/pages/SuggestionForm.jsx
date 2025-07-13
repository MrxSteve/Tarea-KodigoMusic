import { useAuth } from "../context/AuthContext";
import SuggestionFormComponent from "../components/SuggestionFormComponent";

const SuggestionForm = () => {
    const { user } = useAuth();

    return (
        <div className="flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Enviar sugerencia musical</h2>
            {user ? (
            <SuggestionFormComponent />
            ) : (
            <div className="bg-yellow-100 text-yellow-800 p-4 rounded">
                Debes iniciar sesión para dejar tu sugerencia musical.
            </div>
            )}
        </div>
        </div>
    );
};

export default SuggestionForm;
