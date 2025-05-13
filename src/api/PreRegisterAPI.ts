import { isAxiosError } from "axios";
import api from "../lib/axios";
import type { PreRegisterFormData } from "../types";

export async function createPreRegister(formData: PreRegisterFormData) {
  /**Validando que el aspirante no este registrado */
  const documento = formData.documento_identidad;

  try {
    const exist = await api.get(
      `/aspirantes?filters[documento_identidad][$eq]=${documento}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN_PRE_REGISTER}`,
        },
      }
    );

    if (exist.data.data.length > 0) {
      return { success: false, message: "Este aspirante ya está registrado." };
    }

    const response = await api.post(
      "/aspirantes",
      { data: formData },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN_PRE_REGISTER}`,
        },
      }
    );

    if (response.data) {
      return { success: true, message: "Registro exitoso." };
    }

    return { success: false, message: "Error desconocido al registrar." };
    
  } catch (error) {
    if (isAxiosError(error) && error.response?.data?.error) {
      return { success: false, message: error.response.data.error };
    } else {
      return { success: false, message: "Ocurrió un error inesperado." };
    }
  }
}
