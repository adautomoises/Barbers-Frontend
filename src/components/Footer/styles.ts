import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: 100px;

  background-color: var(--secondary-light);
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
    background-color: var(--secondary);
  }
`;

export const Copyright = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25%;
`;
