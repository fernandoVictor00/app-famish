import styled, { css } from "styled-components/native";
import { CaretLeft, Plus } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.ORANGE_600};

  padding: 28px 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.WHITE};
  `};
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
