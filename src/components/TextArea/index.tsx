import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

type Props = TextInputProps;

export function TextArea({ ...rest }: Props) {
  const { COLORS } = useTheme();

  return <Container placeholderTextColor={COLORS.GRAY_300} {...rest} />;
}