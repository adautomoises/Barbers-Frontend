import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  font-family: "Montserrat", sans-serif;
  font-family: "Libre Baskerville", serif;
  font-size: 1rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.black100};
`;

export const Form = styled.div`
  width: 404px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
`;

export const Title = styled.label`
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const SubTitle = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 24px;
  text-transform: uppercase;
`;

export const Body = styled.form`
  display: flex;
  flex-direction: column;

  width: 404px;

  margin-bottom: 0.5rem;
`;

export const ForgetPassword = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
`;

export const ContainerCheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  gap: 0.5rem;
`;

export const CheckBox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  -webkit-appearance: none;
  appearance: none;

  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  border-radius: 2px;

  transition: background-color 0.5s;

  :checked {
    border: none;
    background-color: ${({ theme }) => theme.colors.Confirm};

    /* ::before {
      content: "X";
      display: flex;
      justify-content: center;
      align-items: center;
      color:   border: 1px solid ${({ theme }) => theme.colors.black100};

    } */
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    color: ${({ theme }) => theme.colors.surface};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LoginSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  gap: 12px;
  margin: 16px 0;
`;

export const LoginWithGoogle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  color: ${({ theme }) => theme.colors.black100};

  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  border-radius: 8px;

  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  :hover {
    border: none;
    color: ${({ theme }) => theme.colors.surface};
    background: linear-gradient(to right, #eb4335, #fbbc05, #34a853, #4285f4);
  }
`;

export const LoginWithFace = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  color: ${({ theme }) => theme.colors.black100};

  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  border-radius: 8px;

  :hover {
    border: none;
    color: ${({ theme }) => theme.colors.surface};
    background-color: #1877f2;
  }
`;

export const LoginWithApple = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  color: ${({ theme }) => theme.colors.black100};

  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  border-radius: 8px;

  :hover {
    border: none;
    color: ${({ theme }) => theme.colors.surface};
    background-color: #283544;
  }
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
