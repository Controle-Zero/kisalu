import Atividade from "../../../models/Atividade";

type ActivityHandlerFunction = (activityId: string) => void;

export type ProviderActivityCardProps = {
  activity: Atividade;
  onActivityApply: ActivityHandlerFunction;
  onActivityReject: ActivityHandlerFunction;
  onActivityDone: ActivityHandlerFunction;
};
