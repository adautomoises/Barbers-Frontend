import styled from "styled-components";

interface Props {
  color: string;
}

export const Container = styled.main<Props>`
  height: 44px;

  display: flex;
  justify-content: center;

  padding: 10px 14px;
  border-radius: 4px;

  background-color: ${({ theme, color }) =>
    color === "green" ? theme.colors.Confirm : theme.colors.Error};
`;

export const Button = styled.button`
  background: none;
  border: none;
`;

export const Title = styled.span<Props>`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme, color }) =>
    color === "green" ? theme.colors.surface : theme.colors.black100};
`;
