import styled from "styled-components";

interface Props {
  photo: string;
}

export const Container = styled.main``;

export const ContainerCarousel = styled.div`
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 720px;
`;

export const Image = styled.img<Props>`
  object-fit: fill;
  width: auto;
  height: 720px;
`;

export const ScrollUp = styled.button`
  position: absolute;
  top: 330px;
  left: 190px;
  transform: rotate(90deg);

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.surface};
  font-weight: bolder;
  font-size: 25px;

  :hover {
    color: ${({ theme }) => theme.colors.black100};
    border: 1px solid ${({ theme }) => theme.colors.black100};
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

export const ScrollDown = styled.button`
  position: absolute;
  top: 390px;
  left: 190px;
  transform: rotate(90deg);

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.surface};
  font-weight: bolder;
  font-size: 25px;

  :hover {
    color: ${({ theme }) => theme.colors.black100};
    border: 1px solid ${({ theme }) => theme.colors.black100};
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

export const ImageIndexes = styled.div`
  position: absolute;
  top: 330px;
  right: 190px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
