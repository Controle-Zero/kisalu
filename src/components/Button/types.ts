export type ButtonProps = {
  text: string;
  buttonColor?: string;
  textColor?: string;
  width?: number | string;
  icon?: string;
  onPress: () => void;
};

export type ButtonContainerStyle = {
  backgroundColor: string;
  width?: number | string;
};

export type ButtonTextStyle = {
  textColor: string;
};
