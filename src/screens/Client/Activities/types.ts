import { ActivityState } from "../../../models/Atividade";
import { ActivityNavProps } from "../../../routes/types/Cliente/ActivityParamsList";

export type NavigableFC = (
  navProps: ActivityNavProps<"AtividadesScreen">
) => JSX.Element;

export type DropdownActivityStateType = {
  label: string;
  value: ActivityState;
};
