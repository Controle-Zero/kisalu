import { FormikHelpers } from "formik";
import { ProviderSignUpFormType } from "../../../components/Forms/ProviderSignUpForm/type";

export type ProviderSignUpHandler = (
  values: ProviderSignUpFormType,
  actions: FormikHelpers<ProviderSignUpFormType>
) => Promise<void>;
