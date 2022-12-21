import styled from "styled-components";

interface Props {
  color: string;
}

export const Container = styled.button<Props>`
  flex: 1;

  background-color: ${({ theme, color }) =>
    color === "green" ? theme.colors.Confirm : theme.colors.Error};
`;
