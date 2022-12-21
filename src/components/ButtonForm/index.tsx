import React from "react";

import { Container, Button, Title } from "./styles";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  title: string;
  color: string;
  onClick: () => void;
}

export function ButtonForm({ type, title, color, onClick }: Props) {
  return (
    <Container color={color}>
      <Button type={type} onClick={onClick}>
        <Title color={color}>{title}</Title>
      </Button>
    </Container>
  );
}
