import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorsMessage";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/AuthAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { UserFormData } from "../../types";

export default function LoginView() {
  const initialValues : UserFormData = {
    email: "",
    password: "",
  };
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const navigate = useNavigate();
  
  const { mutate } = useMutation({
    mutationFn: login,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        navigate('/dashboard');
        reset();
      } else {
        toast.error(data.message);
      }
    },
  });

  const handleFormLogin = (formData: UserFormData) => mutate(formData);

  return (
    <div className="py-12 flex justify-center mt-10">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 w-full max-w-sm shadow-lg">
        <h2 className="text-center text-3xl font-bold text-black mb-1">
          Bienvenido
        </h2>
        <p className="text-center text-gray-500 mb-8">Ingrese su cuenta</p>
        <form className="space-y-6" onSubmit={handleSubmit(handleFormLogin)} noValidate>
          <div className="relative">
            <input
              placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500"
              id="email"
              type="email"
              {...register("email", {
                required: "El Correo electrónico es obligatorio",
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all 
                         peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                         peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 
                         peer-focus:text-sm"
              htmlFor="email"
            >
              Correo electrónico
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500 text-black"
              id="password"
              type="password"
              {...register("password", {
                required: "La Contraseña es obligatoria",
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all 
                         peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                         peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 
                         peer-focus:text-sm"
              htmlFor="password"
            >
              Contraseña
            </label>
          </div>

          <input
            value="Iniciar sesión"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
