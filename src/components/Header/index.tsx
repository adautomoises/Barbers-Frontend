import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import {
  Container,
  MenuItems,
  Button,
  LoginSignIn,
  Login,
  SignIn,
  User,
  Logout,
} from "./styles";

interface Props {
  Items: string[];
  Actions: string;
}

export function Header({ Items, Actions }: Props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleNavigate = (name: string) => {
    navigate(`/${name}`);
  };

  return (
    <Container>
      <Logo style={{ width: "25%" }} fill={"white"} />
      <MenuItems>
        {Items.map((item, index) => (
          <Button onClick={() => handleNavigate(item)} key={index}>
            {item}
          </Button>
        ))}
      </MenuItems>
      {Actions === "Login" ? (
        <LoginSignIn>
          <Login onClick={() => navigate("/entrar")}>Entrar</Login>
          <SignIn onClick={() => navigate("/cadastrar")}>Cadastrar</SignIn>
        </LoginSignIn>
      ) : (
        <LoginSignIn>
          <User>Nome do usuário</User>
          <Logout onClick={handleLogout}>Sair</Logout>
        </LoginSignIn>
      )}
    </Container>
  );
}
