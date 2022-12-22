import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import api from "../../services/api";

import { Container, Main, Button } from "./styles";

export function Home() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [actions, setActions] = useState("Login");

  const data = ["Parceiros", "Serviços", "Sobre"];

  const handleUsers = () => {
    api
      .get("/users")
      .then((response) => {
        console.log("getado!");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log("logado!");
      });
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
      setActions("Auth");
    } else {
      setActions("Login");
    }
  }, []);

  return (
    <Container>
      <Header Items={data} Actions={actions} />
      <Main>
        <button onClick={handleUsers}>Clique em mim para dar o get!!!</button>
      </Main>
      <Footer />
    </Container>
  );
}
