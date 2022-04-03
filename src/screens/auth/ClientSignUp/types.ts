import { FormikHelpers } from "formik";
import { ClientSignUpFormType } from "../../../components/Forms/ClientSignUpForm/types";

export type ClientSignUpHandler = (
  values: ClientSignUpFormType,
  actions: FormikHelpers<ClientSignUpFormType>
) => Promise<void>;
