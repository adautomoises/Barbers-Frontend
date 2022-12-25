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
    localStorage.clear();
    window.location.reload();
  };

  const handleNavigate = (name: string) => {
    navigate(`/${name}`);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    api
      .get(`/users/getUsersById`, { params: { uuid: loggedInUser } })
      .then((response) => {
        setUser(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
