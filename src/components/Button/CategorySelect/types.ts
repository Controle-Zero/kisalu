export type Props = {
  title: string;
  onPress: (title: string) => void;
  id: string;
};

export type ButtonContainerProps = {
  isSelected: boolean;
};
