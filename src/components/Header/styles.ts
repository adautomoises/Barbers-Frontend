import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  z-index: 2;
  top: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100vw;
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
  border: none;

  :hover {
    border: none;
    color: black;
    background-color: ${({ theme }) => theme.colors.surface};
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
  border: none;

  :hover {
    border: none;
    color: ${({ theme }) => theme.colors.black100};
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

export const SignIn = styled.button`
  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.primary};

  :hover {
    color: ${({ theme }) => theme.colors.black100};
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

export const User = styled.button``;

export const Logout = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary50};

  :hover {
    color: ${({ theme }) => theme.colors.Error};
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
