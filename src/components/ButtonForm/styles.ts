import styled from "styled-components";

interface Props {
  color: string;
}

export const Container = styled.main<Props>`
  height: 44px;

  display: flex;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({ theme, color }) =>
    color === "green" ? theme.colors.Confirm : theme.colors.Error};

  :hover {
    background-color: green;
  }
`;

export const Button = styled.button<Props>`
  width: 100%;
  height: 44px;

  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme, color }) =>
    color === "green" ? theme.colors.surface : theme.colors.black100};

  border-radius: 8px;

  :hover {
    color: var(--surface);
  }
`;
