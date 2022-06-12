import { SubmitHandler } from "react-hook-form";

export type ClientSignUpFormType = {
  fullName: string;
  bi: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  birthDay: Date;
  province: string;
  county: string;
  district: string;
  neighbor: string;
  complementaryAddress: string;
};

export type Props = {
  onSubmit: SubmitHandler<ClientSignUpFormType>;
};
