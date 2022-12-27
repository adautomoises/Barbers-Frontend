import styled from "styled-components";

export const Container = styled.main`
  overflow-y: hidden;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 720px;
`;

export const Image = styled.img`
  object-fit: contain;
  width: auto;
  height: 720px;
`;

export const ContainerButtonUp = styled.div`
  position: absolute;
  top: 330px;
  left: calc(50% - 500px);
  transform: rotate(90deg);
`;
export const ContainerButtonDown = styled.div`
  position: absolute;
  top: 390px;
  left: calc(50% - 500px);
  transform: rotate(90deg);
`;
export const ScrollUp = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  font-weight: bolder;
  font-size: 25px;

  background-color: var(--secondary50);

  :hover {
    background-color: var(--secondary);
  }
`;
export const ScrollDown = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  font-weight: bolder;
  font-size: 25px;

  background-color: var(--secondary50);

  :hover {
    background-color: var(--secondary);
  }
`;
