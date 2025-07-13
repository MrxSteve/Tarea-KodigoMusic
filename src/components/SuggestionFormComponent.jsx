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
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
        <div>
            <label className="block mb-1">Nombre del artista o canción</label>
            <input
            type="text"
            {...register("nombre", { required: "Este campo es obligatorio" })}
            className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600"
            />
            {errors.nombre && (
            <p className="text-red-500 text-sm">{errors.nombre.message}</p>
            )}
        </div>

        <div>
            <label className="block mb-1">Motivo de la sugerencia</label>
            <textarea
            {...register("motivo", {
                required: "Por favor explica el motivo",
                minLength: {
                value: 10,
                message: "Debe tener al menos 10 caracteres",
                },
            })}
            className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600"
            />
            {errors.motivo && (
            <p className="text-red-500 text-sm">{errors.motivo.message}</p>
            )}
        </div>

        <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-semibold"
        >
            Enviar
        </button>
        </form>
    );
};

export default SuggestionFormComponent;
