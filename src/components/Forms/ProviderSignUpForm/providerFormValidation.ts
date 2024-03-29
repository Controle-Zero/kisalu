import * as yup from "yup";

const regexBI = /^\d{9}[A-Z]{2}\d{3}$/g;
const regexPhoneNumber = /^(\+2449\d{8})|(9\d{8})$/g;
const regexIban = /^AO06(\.\d{4}){5}\.\d$/g;

export const providerSignUpSchema = yup.object({
  fullName: yup.string().required("Nome completo não deve estar vazio"),
  bi: yup
    .string()
    .required("BI não deve estar vazio")
    .matches(regexBI, "Deve ser um BI válido"),
  email: yup
    .string()
    .required("Email não deve estar vazio")
    .email("Deve ser um email"),
  phoneNumber: yup
    .string()
    .required("Nº de telefone não deve estar vazio")
    .matches(regexPhoneNumber, "Deve ser um número de telefone de Angola"),
  password: yup
    .string()
    .required("Password não pode estar vazia")
    .min(7, "Deve ter pelo menos 7 caracteres"),
  passwordConfirmation: yup
    .string()
    .required("A confirmação não pode estar vazia"),
  IBAN: yup
    .string()
    .required("O IBAN não pode estar vazio")
    .matches(regexIban, "O IBAN não é válido"),
  description: yup.string().required("A descrição não pode estar vazia"),
  province: yup.string().required("Especifique a sua província"),
  county: yup.string().required("Especifique o seu município"),
  district: yup.string().required("Especifique o seu distrito"),
});
