import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

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
  Button,
} from "./styles";

interface FormProps {
  email: string;
  userName: string;
  fullName: string;
  password: string;
  passwordConfirmation: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Digite um e-mail válido, Por favor!")
    .required("E-mail é obrigatório"),
  userName: yup.string().required("Digite seu Nome de Usuário, Por favor!"),
  fullName: yup.string().required("Digite seu Nome Completo, Por favor!"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(8, "A senha é muito curta")
    .test(
      "isValidPass",
      "Senha deve ter pelo menos 8 caracteres, uma letra maíuscula e um símbolo",
      (value: any) => {
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
    .required("Confirmação de senha é obrigatório")
    .oneOf([yup.ref("password"), null], "Senhas não podem ser diferentes!"),
});

export function Register() {
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
      fullName: data.fullName,
      password: data.password,
      userName: data.userName,
    };

    api
      .post("/users", request)
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
          <SubTitle>Bem-vindo! Por favor, informe seus dados.</SubTitle>
        </Header>
        <Body onSubmit={handleSubmit(onSubmit)}>
          <Input
            title={"Nome Completo"}
            type="text"
            name="fullName"
            placeholder="Nome Completo"
            register={{ ...register("fullName") }}
            error={errors.fullName?.message}
          />
          <Input
            title={"Nome de Usuário"}
            type="text"
            name="userName"
            placeholder="Nome de Usuário"
            register={{ ...register("userName") }}
            error={errors.userName?.message}
          />
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
          <Input
            title={"Confirmar Senha"}
            type="password"
            register={{ ...register("passwordConfirmation") }}
            name="passwordConfirmation"
            placeholder="Confirmar Senha"
            error={errors.passwordConfirmation?.message}
          />
          <ButtonForm
            type="submit"
            title="Cadastrar"
            color="green"
            onClick={() => console.log("clicado!")}
          />
        </Body>
        <Footer>
          <SubTitle>Já possui uma conta? </SubTitle>
          <Button onClick={() => navigate("/entrar")}>Entrar</Button>
        </Footer>
      </Form>
    </Container>
  );
}
