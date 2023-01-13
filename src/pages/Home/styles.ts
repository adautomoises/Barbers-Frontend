import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.main``;

export const Button = styled.button``;
