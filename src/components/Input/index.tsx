import React from "react";

import { Container, Title, InputField, Error } from "./styles";

interface Props {
  title: string;
  type: string;
  name: string;
  register: any;
  error?: string;
  placeholder: string;
}

export function Input({
  title,
  type,
  name,
  register,
  placeholder,
  error,
}: Props) {
  return (
    <Container>
      <Title>{title}*</Title>
      <InputField
        type={type}
        {...register}
        name={name}
        placeholder={placeholder}
      ></InputField>
      <Error>{error}</Error>
    </Container>
  );
}
