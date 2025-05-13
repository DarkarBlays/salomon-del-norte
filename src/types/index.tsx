import { z } from "zod";

/**Pre Registro de aspirante */
export const preRegisterSchema = z.object({
  id: z.string(),
  documentId: z.string(),
  nombres: z.string(),
  apellidos: z.string(),
  fecha_nacimiento: z.string(),
  documento_identidad: z.string(),
  estado: z.string(),
});

export type PreRegister = z.infer<typeof preRegisterSchema>;

export type PreRegisterFormData = Pick<
  PreRegister,
  | "nombres"
  | "apellidos"
  | "fecha_nacimiento"
  | "documento_identidad"
  | "estado"
>;

/**Usuario */
export const userFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type UserFormData = z.infer<typeof userFormSchema>;

export const userAccessSchema = z.object({
  confirmed: z.boolean(),
  blocked: z.boolean(),
});
export type UserAccess = z.infer<typeof userAccessSchema>;
