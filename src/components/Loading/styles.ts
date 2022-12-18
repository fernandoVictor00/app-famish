import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const LoadingIndicator = styled.ActivityIndicator`
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;
