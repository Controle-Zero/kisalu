import { SubmitHandler } from "react-hook-form";

export type ProviderSignUpFormType = {
  fullName: string;
  bi: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  birthDay: Date;
  address: string;
  IBAN: string;
  description: string;
  province: string;
};

export type Props = {
  onSubmit: SubmitHandler<ProviderSignUpFormType>
};
