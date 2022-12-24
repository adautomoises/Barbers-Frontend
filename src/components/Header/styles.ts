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

  background-color: var(--secondary50);
`;

export const MenuItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 50%;
`;

export const LoginSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25%;
  gap: 1rem;
`;

export const Login = styled.button``;

export const SignIn = styled.button`
  background-color: var(--primary);
`;

export const User = styled.label``;

export const Logout = styled.button``;
