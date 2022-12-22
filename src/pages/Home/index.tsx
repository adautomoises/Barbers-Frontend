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

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
      setActions("Auth");
    } else {
      setActions("Login");
    }
  }, []);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log("getado!");
      });
  }, []);

  return (
    <Container>
      <Header Items={data} Actions={actions} />
      <Main></Main>
      <Footer />
    </Container>
  );
}
