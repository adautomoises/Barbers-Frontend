import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-bottom: 1rem;
`;

export const Title = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black100};
  margin-bottom: 0.25rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  flex-direction: row;
`;

export const InputField = styled.input`
  height: 44px;

  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: normal;

  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  margin-bottom: 5px;
`;

export const Error = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: normal;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.Error};
`;
