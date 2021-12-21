import * as yup from "yup";

export const cadastroProvedorSchema = yup.object({
  fullName: yup.string().required("Nome completo não deve estar vazio"),
  bi: yup
    .string()
    .required("BI não deve estar vazio")
    .matches(/^\d{9}[A-Z]{2}\d{3}$/g, "Deve ser um BI válido"),
  email: yup
    .string()
    .required("Email não deve estar vazio")
    .email("Deve ser um email"),
  phoneNumber: yup
    .string()
    .required("Nº de telefone não deve estar vazio")
    .matches(
      /^(\+2449\d{8})|(9\d{8})$/g,
      "Deve ser um número de telefone de Angola"
    ),
  password: yup
    .string()
    .required("Password não pode estar vazia")
    .min(7, "Deve ter pelo menos 7 caracteres"),
  passwordConfirmation: yup
    .string()
    .required("A confirmação não pode estar vazia"),
});
