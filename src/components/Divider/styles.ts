import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  text-transform: uppercase;

  margin: 16px 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin: 0 2px;
`;
