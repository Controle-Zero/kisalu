import { SubmitHandler } from "react-hook-form";

type UserType = "client" | "provider";

export type LoginFormValues = {
  email: string;
  password: string;
  userType: UserType;
};

export type Props = {
  onSubmit: SubmitHandler<LoginFormValues>;
};

export type ToggleButtonStyle = {
  isClient: boolean;
};
