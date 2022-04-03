import { FormikHelpers } from "formik";

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
};

export type Props = {
  onSubmit: (
    values: ProviderSignUpFormType,
    actions: FormikHelpers<ProviderSignUpFormType>
  ) => void;
};
