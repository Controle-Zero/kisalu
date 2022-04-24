import { FormikHelpers } from "formik";

export type ClientSignUpFormType = {
  fullName: string;
  bi: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  birthDay: Date;
  address: string;
};

export type Props = {
  onSubmit: (
    values: ClientSignUpFormType,
    action: FormikHelpers<ClientSignUpFormType>
  ) => void;
};
