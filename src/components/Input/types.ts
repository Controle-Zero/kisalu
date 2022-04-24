import { KeyboardTypeOptions } from "react-native";

export type InvalidInput = {
  hasError: boolean;
};

export interface TextInputProps extends InvalidInput {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

export interface InputFieldProps extends TextInputProps {
  icon?: string;
  secureText?: boolean;
  keyboardType?: KeyboardTypeOptions;
}
