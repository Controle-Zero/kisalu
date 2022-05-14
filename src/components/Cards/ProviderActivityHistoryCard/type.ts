import Atividade from "../../../models/Atividade";

type ActivityHandlerFunction = (activityId: string) => void;

export type Props = {
  activity: Atividade;
  onNavigate: ActivityHandlerFunction;
};

export type StatusColorProps = {
  color?: string;
};
