import { isAxiosError } from "axios";
import api from "../lib/axios";
import type { UserFormData } from "../types";

export async function login(formData: UserFormData) {
  try {
    
    const response = await api.post("/auth/local", {
      identifier: formData.email,
      password: formData.password,
    });

    console.log("Respuesta completa:", response);

    if(response.data.user.blocked) {
      return {
        success: false,
        message: "Usuario bloqueado. Comuníquese con el administrador.",
      };
    }

    return {
      success: true,
      message: "Ingreso exitoso.",
      user: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Error detallado:", {
        status: error.response?.status,
        data: error.response?.data,
        headers: error.response?.headers,
      });

      const errorMessage =
        error.response?.data?.error?.message ||
        error.response?.data?.message?.[0]?.messages?.[0]?.message ||
        "Error en la autenticación";

      return {
        success: false,
        message: errorMessage,
      };
    }

    return {
      success: false,
      message: "Ocurrió un error inesperado",
    };
  }
}
