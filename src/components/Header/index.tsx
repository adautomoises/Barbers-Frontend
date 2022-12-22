import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import {
  Container,
  MenuItems,
  LoginSignIn,
  Login,
  SignIn,
  User,
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

  return (
    <Container>
      <Logo style={{ width: "25%" }} />
      <MenuItems>
        {Items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </MenuItems>
      {Actions === "Login" ? (
        <LoginSignIn>
          <Login onClick={() => navigate("/entrar")}>Entrar</Login>
          <SignIn onClick={() => navigate("/cadastro")}>Cadastrar</SignIn>
        </LoginSignIn>
      ) : (
        <LoginSignIn>
          <User>Nome do usuário, Logado!</User>
          <button onClick={handleLogout}>Sair</button>
        </LoginSignIn>
      )}
    </Container>
  );
}
