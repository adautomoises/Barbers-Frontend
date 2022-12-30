import { useNavigate } from "react-router-dom";
import { GoBack } from "../Register/styles";

import { Container, Button } from "./styles";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <GoBack onClick={() => navigate("/")}>🡠 Voltar ao Início</GoBack>
    </Container>
  );
}
