import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import { Container, Button } from "./styles";

export function Example() {
  const navigate = useNavigate();

  React.useEffect(() => {
    api
      .get("/users")
      .then((response) => console.log(response.data))
      .catch((errors: any) => {
        console.log(errors);
      });
  }, []);

  return (
    <Container>
      Essa é a tela de exemplo!
      <Button onClick={() => navigate("/")}>Clique em mim!</Button>
    </Container>
  );
}
