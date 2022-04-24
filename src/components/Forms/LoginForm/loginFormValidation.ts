import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email não deve estar vazio")
    .email("Deve ser um email"),
  password: yup
    .string()
    .required("Password não deve estar vazia")
    .min(7, "Deve ter pelo menos 7 caracteres"),
});
