import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import { Input } from "../../components/Input";
// import { ButtonForm } from "../../components/ButtonForm";

import {
  Container,
  Form,
  Header,
  Body,
  Footer,
  Title,
  SubTitle,
} from "./styles";
import api from "../../services/api";

interface FormProps {
  email: string;
  userName: string;
  fullName: string;
  password: string;
  passwordConfirmation: string;
}

const schema = yup.object({
  email: yup.string().email().required("Digite um e-mail válido, Por favor!"),
  userName: yup.string().required("Digite seu Nome de Usuário, Por favor!"),
  fullName: yup.string().required("Digite seu Nome Completo, Por favor!"),
  password: yup
    .string()
    .required("Password Required")
    .min(8, "Password too short")
    .test(
      "isValidPass",
      "Passowrd must be 8 char (One UpperCase & One Symbol)",
      (value: any, context: any) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasSymbole = /["!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 3;
        const conditions = [hasUpperCase, hasLowerCase, hasNumber, hasSymbole];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null
        );
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      }
    ),
  passwordConfirmation: yup
    .string()
    .required("Confirm Password Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export function Register() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormProps) => {
    console.log(data);

    let request = {
      email: data.email,
      fullName: data.fullName,
      password: data.password,
      userName: data.userName,
    };

    api
      .post("/users/register", request)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log("postado!");
      });
  };

  return (
    <Container>
      <Form>
        <Header>
          <Title>Bem-vindo</Title>
          <SubTitle>Bem-vindo! Por favor, informe sua conta.</SubTitle>
        </Header>
        <Body onSubmit={handleSubmit(onSubmit)}>
          <>
            <label>Nome Completo*</label>
            <input
              // title={"Nome Completo"}
              type="text"
              {...register("fullName")}
              name="fullName"
              placeholder="Nome Completo"
            />
            <p>{errors.fullName?.message}</p>
          </>
          <>
            <label>Nome de Usuário*</label>
            <input
              title={"Nome de Usuário"}
              type="text"
              {...register("userName")}
              name="userName"
              placeholder="Nome de Usuário"
            />
            <p>{errors.userName?.message}</p>
          </>
          <>
            <label>E-mail*</label>
            <input
              title={"E-mail"}
              type="email"
              {...register("email")}
              name="email"
              placeholder="E-mail"
            />
            <p>{errors.email?.message}</p>
          </>
          <>
            <label>Senha*</label>
            <input
              title={"Senha"}
              type="password"
              {...register("password")}
              name="password"
              placeholder="Senha"
            />
            <p>{errors.password?.message}</p>
          </>
          <>
            <label>Confirmar Senha*</label>
            <input
              title={"Confirmar Senha"}
              type="password"
              {...register("passwordConfirmation")}
              name="passwordConfirmation"
              placeholder="Confirmar Senha"
            />
            <p>{errors.passwordConfirmation?.message}</p>
          </>
          <button type="submit" onClick={() => console.log("clicado!")}>
            Cadastrar
          </button>
        </Body>
        <Footer>
          {/* <ButtonForm
          type="submit"
          title="Cadastrar"
          color="green"
          onClick={() => onSubmit}
        /> */}
          <SubTitle>Já possui uma conta? Entrar</SubTitle>
        </Footer>
      </Form>
    </Container>
  );
}
