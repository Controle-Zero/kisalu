import { FormikHelpers } from "formik";

type UserType = "client" | "provider";

export type LoginFormValues = {
  email: string;
  password: string;
  userType: UserType;
};

export type Props = {
  onSubmit: (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => void;
};

export type ToggleButtonStyle = {
  isClient: boolean;
};
