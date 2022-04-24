import { ProfileNavProps } from "../../../routes/types/Provider/ProfileParamsList";

export type ProfileDataType = {
  label: string;
  text: string;
  icon: string;
}[];

export type NavigableFC = (
  navProps: ProfileNavProps<"ProfileScreen">
) => JSX.Element;
