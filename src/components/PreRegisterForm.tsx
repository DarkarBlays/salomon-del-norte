import type { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "./ErrorsMessage";
import type { PreRegisterFormData } from "../types";

type PreRegisterFormProps = {
  register: UseFormRegister<PreRegisterFormData>;
  errors: FieldErrors<PreRegisterFormData>;
};

export default function PreRegisterForm({
  errors,
  register,
}: PreRegisterFormProps) {
  return (
    <>
      <div className="mb-5 space-y-3">
        <label
          htmlFor="documento_identidad"
          className="text-sm uppercase font-bold text-black text-right"
        >
          Documento de identidad
        </label>
        <input
          id="documento_identidad"
          className="w-full p-3 border border-gray-200 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="123456789"
          {...register("documento_identidad", {
            required: "El Documento de identidad es obligatorio",
          })}
        />
        {errors.documento_identidad && (
          <ErrorMessage>{errors.documento_identidad.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3">
        <label
          htmlFor="nombres"
          className="text-sm uppercase font-bold text-black text-right"
        >
          Nombres
        </label>
        <input
          id="nombres"
          className="w-full p-3 border border-gray-200 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Nombres"
          {...register("nombres", {
            required: "El Nombre del aspirante es obligatorio",
          })}
        />
        {errors.nombres && (
          <ErrorMessage>{errors.nombres.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3">
        <label
          htmlFor="apellidos"
          className="text-sm uppercase font-bold text-black text-right"
        >
          Apellidos
        </label>
        <input
          id="apellidos"
          className="w-full p-3 border border-gray-200 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Apellidos"
          {...register("apellidos", {
            required: "Los Apaellidos del aspirante son obligatorio",
          })}
        />
        {errors.apellidos && (
          <ErrorMessage>{errors.apellidos.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3">
        <label
          htmlFor="fecha_nacimiento"
          className="text-sm uppercase font-bold text-black text-right "
        >
          Fecha de Nacimiento
        </label>
        <input
          id="fecha_nacimiento"
          className="w-full p-3 border border-gray-200 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="date"
          max={new Date().toISOString().split("T")[0]}
          {...register("fecha_nacimiento", {
            required: "La fecha de Nacimiento no puede estar vacia",
          })}
        />
        {errors.fecha_nacimiento && (
          <ErrorMessage>{errors.fecha_nacimiento.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
