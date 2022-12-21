import React from "react";

import { Container, Title, InputField } from "./styles";

interface Props {
  title: string;
  name: string;
  register: any;
}

export function Input({ title, name, register }: Props) {
  return (
    <Container>
      <Title>{title}*</Title>
      <InputField {...register} name={name}></InputField>
    </Container>
  );
}
