import { SubmitHandler } from "react-hook-form";
import { LoginFormValues } from "../../../components/Forms/LoginForm/types";

export type handleLogin = SubmitHandler<LoginFormValues>;
