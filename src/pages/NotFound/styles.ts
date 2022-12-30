import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary_light};
`;

export const GoBack = styled.button`
  display: flex;
  align-items: center;
  width: max-content;
  height: 44px;
  color: ${({ theme }) => theme.colors.black100};
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 1rem;

  :hover {
    color: ${({ theme }) => theme.colors.surface};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
