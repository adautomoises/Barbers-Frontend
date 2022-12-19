import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Button } from "./styles";

export function Example() {
  const navigate = useNavigate();

  return (
    <Container>
      Essa é a tela de exemplo!
      <Button onClick={() => navigate("/")}>Clique em mim!</Button>
    </Container>
  );
}
