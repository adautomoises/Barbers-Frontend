import React from "react";

import { Container } from "./styles";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  title: string;
  color: string;
  onClick: () => void;
}

export function ButtonForm({ type, title, color, onClick }: Props) {
  return (
    <Container type={type} color={color} onClick={onClick}>
      {title}
    </Container>
  );
}
