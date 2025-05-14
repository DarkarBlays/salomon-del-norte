import { isAxiosError } from "axios";
import api from "../lib/axios";
import type { UserFormData } from "../types";

export async function login(formData: UserFormData) {
  try {
    
    const response = await api.post("/auth/local", {
      identifier: formData.email,
      password: formData.password,
    });

    if(response.data.user.blocked) {
      return {
        success: false,
        message: "Usuario bloqueado. Comuníquese con el administrador.",
      };
    }

    if(!response.data.user.confirmed) {
      return {
        success: false,
        message: "Usuario no esta confirmado. Comuníquese con el administrador.",
      };
    }

    const { jwt, user } = response.data;

    // Guardar el JWT y datos del usuario en localStorage
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('user', JSON.stringify(user));

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
