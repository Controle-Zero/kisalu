import { HomeNavProps } from "../../../routes/types/Cliente/HomeParamsList";

export type NavigableFC = (
  navProps: HomeNavProps<"ProvidersList">
) => JSX.Element;
