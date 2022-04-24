import Atividade from "../../../models/Atividade";

export type ClientActivityCardProps = {
  activity: Atividade;
  onActivityCancel: (activityId: string) => void;
  onActivityEvaluate: (activity: string) => void;
};
