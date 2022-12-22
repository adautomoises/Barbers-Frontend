import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";
import { Input } from "../../components/Input";
import { ButtonForm } from "../../components/ButtonForm";

import {
  Container,
  Form,
  Header,
  Body,
  Footer,
  Title,
  SubTitle,
} from "./styles";
import { useNavigate } from "react-router-dom";

interface FormProps {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Digite um e-mail válido, Por favor!")
    .required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

export function Login() {
  const navigate = useNavigate();

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
      password: data.password,
    };

    api
      .post("/login", request)
      .then((response) => {
        localStorage.setItem("user", response.data);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log("logado!");
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
          <Input
            title={"E-mail"}
            type="email"
            name="email"
            placeholder="E-mail"
            register={{ ...register("email") }}
            error={errors.email?.message}
          />
          <Input
            title={"Senha"}
            type="password"
            name="password"
            placeholder="Senha"
            register={{ ...register("password") }}
            error={errors.password?.message}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <div>
              <input type="checkbox"></input>
              <label>Salvar senha</label>
            </div>
            <button onClick={() => navigate("/esquecisenha")}>
              Esqueci a senha
            </button>
          </div>
          <ButtonForm
            type="submit"
            title="Entrar"
            color="green"
            onClick={() => console.log("clicado!")}
          />
        </Body>
        <Footer>
          <SubTitle>
            Não tem uma conta?{" "}
            <button onClick={() => navigate("/cadastro")}>Cadastrar</button>
          </SubTitle>
        </Footer>
      </Form>
    </Container>
  );
}
