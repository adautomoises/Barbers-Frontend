import styled from "styled-components";

interface Props {
  active: boolean;
}

export const Container = styled.div<Props>`
  width: 15px;
  height: 15px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.surface : theme.colors.gray_light};

  margin: 8px;
  border-radius: 15px;
`;
