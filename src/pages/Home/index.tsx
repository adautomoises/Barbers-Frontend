import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Button } from "./styles";

export function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      Barber's
      <Button onClick={() => navigate("/example")}>Clique em mim!</Button>
    </Container>
  );
}
