import { useState } from "react";
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
  const [values, setValues] = useState({ cnpj: "" });

  const inputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const cnpjMask = (value: string) => {
    return value
      .replace(/\D+/g, "") // não deixa ser digitado nenhuma letra
      .replace(/(\d{2})(\d)/, "$1.$2") // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2") // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura os dois últimos 2 números, com um - antes dos dois números
  };

  return (
    <Container>
      <Title>{title}</Title>
      {name === "cnpj" ? (
        <InputField
          type={type}
          {...register}
          name={name}
          placeholder={placeholder}
          value={cnpjMask(values.cnpj)}
          onChange={inputChange}
        ></InputField>
      ) : (
        <InputField
          type={type}
          {...register}
          name={name}
          placeholder={placeholder}
        ></InputField>
      )}
      <Error>{error}</Error>
    </Container>
  );
}
