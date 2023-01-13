import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  z-index: 2;
  bottom: 0;

  display: flex;
  align-items: center;

  width: 100vw;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.secondary_light};
`;

export const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
`;

export const Button = styled.button`
  margin: 10px;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Copyright = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25%;

  color: ${({ theme }) => theme.colors.surface};
`;
