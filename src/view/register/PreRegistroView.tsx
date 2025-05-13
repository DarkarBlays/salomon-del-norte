import { useForm } from "react-hook-form";
import PreRegisterForm from "../../components/PreRegisterForm";
import { useMutation } from "@tanstack/react-query";
import { createPreRegister } from "../../api/PreRegisterAPI";
import { toast } from "react-toastify";
import type { PreRegisterFormData } from "../../types";

export default function PreRegistroView() {
  
  const initialValues: PreRegisterFormData = {
    nombres: "",
    apellidos: "",
    fecha_nacimiento: "",
    documento_identidad: "",
    estado: "pendiente",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: createPreRegister,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        reset();
      } else {
        toast.error(data.message);
      }
    },
  });

  const handleForm = (FormData: PreRegisterFormData) => mutate(FormData);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center mt-10">
        <div className="bg-white rounded-lg p-10 md:w-1/2 flex flex-col">
          <h1 className="text-5xl text-black font-black text-center">
            Formulario de Pre-Inscripcion
          </h1>
          <p className="text-2xl font-light text-gray-700 mt-5 text-center">
            Estimado aspirante, llene el siguiente formulario para realizar su
            Pre-Inscripcion
          </p>
          <form
            className="mt-4 bg-white p-10 rounded-lg"
            onSubmit={handleSubmit(handleForm)}
            noValidate
          >
            <PreRegisterForm register={register} errors={errors} />
            <input
              type="submit"
              value="Realizar inscripcion"
              className="bg-blue-600 hover:bg-blue-700 w-full p-3 text-white font-bold cursor-pointer transition-colors rounded-xl mt-5 text-xl"
            />
          </form>
        </div>
      </div>
    </>
  );
}
