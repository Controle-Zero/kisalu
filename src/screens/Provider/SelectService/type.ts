import { ProfileNavProps } from "../../../routes/types/Provider/ProfileParamsList";

export type RadioButtonProps = {
  label: string;
  value: string;
};

export type NavigableFC = (
  navProps: ProfileNavProps<"SelectServiceScreen">
) => JSX.Element;
