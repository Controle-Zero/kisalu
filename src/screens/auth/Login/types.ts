import { FormikHelpers } from "formik";
import { LoginFormValues } from "../../../components/Forms/LoginForm/types";

export type handleLogin = (
  values: LoginFormValues,
  actions: FormikHelpers<LoginFormValues>
) => Promise<void>;
