import * as yup from "yup";

export const cadastroProvedorSchema = yup.object({
  fullName: yup.string().required("Nome completo não deve estar vazio"),
  // TODO: Add regex for BI
  bi: yup.string().required("BI não deve estar vazio"),
  email: yup
    .string()
    .required("Email não deve estar vazio")
    .email("Deve ser um email"),
  // TODO: Add regex for phone number +244
  phoneNumber: yup.string().required("Nº de telefone não deve estar vazio"),
  password: yup
    .string()
    .required("Password não pode estar vazia")
    .min(7, "Deve ter pelo menos 7 caracteres"),
  // TODO: Check equality of original password
  passwordConfirmation: yup
    .string()
    .required("A confirmação não pode estar vazia"),
});
