import { SubmitHandler } from "react-hook-form";

export type ProviderSignUpFormType = {
  fullName: string;
  bi: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  birthDay: Date;
  IBAN: string;
  description: string;
  province: string;
  county: string;
  district: string;
  neighbor: string;
  complementaryAddress: string;
};

export type Props = {
  onSubmit: SubmitHandler<ProviderSignUpFormType>;
};
