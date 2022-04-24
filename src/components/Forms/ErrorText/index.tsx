import React from "react";
import { Text } from "./style";

type Props = {
  text: string;
};

const ErrorText: React.FC<Props> = ({ text }) => <Text>{text}</Text>;
export default ErrorText;
