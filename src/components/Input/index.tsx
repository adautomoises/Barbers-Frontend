import React, { useState } from "react";
import api from "../../services/api";

import { Container, Title, InputContainer, InputField, Error } from "./styles";

interface Props {
  title: string;
  type: string;
  name: string;
  register: any;
  error?: string;
  placeholder: string;
  onBlur?: boolean;
}

export function Input({
  title,
  type,
  name,
  register,
  placeholder,
  error,
  onBlur,
}: Props) {
  const [userNameExists, setUserNameExists] = useState();
  const [emailExists, setEmailExists] = useState();

  const handleValidate = (value: string) => {
    if (name === "email") {
      api
        .get("/users/emailExists", { params: { email: value } })
        .then((response) => {
          setEmailExists(response.data);
        });
    } else if (name === "userName") {
      api
        .get("/users/userNameExists", { params: { userName: value } })
        .then((response) => {
          setUserNameExists(response.data);
        });
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <InputField
        type={type}
        {...register}
        name={name}
        placeholder={placeholder}
        onBlur={(event) => {
          if (onBlur) {
            handleValidate(event.target.value);
          }
        }}
      ></InputField>
      <Error>{error}</Error>
      <Error>
        {name === "userName" && onBlur ? (
          userNameExists === true && (
            <>Esse nome de usuário já está em uso. Tente outro.</>
          )
        ) : name === "email" && onBlur ? (
          emailExists === true && <>Esse e-mail já está em uso. Tente outro.</>
        ) : (
          <></>
        )}
      </Error>
    </Container>
  );
}
