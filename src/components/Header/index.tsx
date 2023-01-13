import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import api from "../../services/api";

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

interface UserProps {
  email: string;
  fullName: string;
  id: string;
  userName: string;
}

export function Header({ Items, Actions }: Props) {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProps>();

  const handleLogout = () => {
    localStorage.removeItem("@barbers:user-id-1.0.0");
    localStorage.removeItem("@barbers:user-token-1.0.0");
    window.location.reload();
  };

  const handleNavigate = (name: string) => {
    navigate(`/${name}`);
  };

  useEffect(() => {
    const userId = localStorage.getItem("@barbers:user-id-1.0.0");
    api
      .get(`/users/getUsersById`, { params: { uuid: userId } })
      .then((response) => {
        setUser(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleRegisterService = () => {
    navigate("/cadastrarmeunegocio");
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
          <User>{user?.userName}</User>
          <Logout onClick={handleLogout}>Sair</Logout>
        </LoginSignIn>
      )}
    </Container>
  );
}
