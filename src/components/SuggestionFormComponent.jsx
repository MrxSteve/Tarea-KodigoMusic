import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SuggestionFormComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log("Sugerencia enviada:", data);
        toast.success("¡Gracias por tu sugerencia!");
        reset();
    };

    return (
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl bg-zinc-800 rounded-lg p-6 space-y-6 shadow-lg"
        >
        <div>
            <label className="block mb-2 text-sm font-medium text-white">
            Nombre del artista o canción
            </label>
            <input
            type="text"
            {...register("nombre", { required: "Este campo es obligatorio" })}
            className="w-full p-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            placeholder="Ej: Michael Jackson"
            />
            {errors.nombre && (
            <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
            )}
        </div>

        <div>
            <label className="block mb-2 text-sm font-medium text-white">
            Motivo de la sugerencia
            </label>
            <textarea
            {...register("motivo", {
                required: "Por favor explica el motivo",
                minLength: {
                value: 10,
                message: "Debe tener al menos 10 caracteres",
                },
            })}
            rows={4}
            className="w-full p-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            placeholder="¿Por qué debería agregarse esta canción?"
            />
            {errors.motivo && (
            <p className="text-red-500 text-sm mt-1">{errors.motivo.message}</p>
            )}
        </div>

        <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition-colors px-4 py-3 rounded-lg text-white font-semibold text-lg"
        >
            Enviar sugerencia
        </button>
        </form>
    );
};

export default SuggestionFormComponent;
