import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  z-index: 2;
  top: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.secondary50};
`;

export const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
`;

export const Button = styled.button`
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.secondary50};

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const LoginSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25%;
  gap: 1rem;
`;

export const Login = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary50};

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SignIn = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary50};

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const User = styled.label``;

export const Logout = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary50};

  :hover {
    color: ${({ theme }) => theme.colors.Error};
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
