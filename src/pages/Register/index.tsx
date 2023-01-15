import { useEffect, useState } from "react";
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
  TopHeader,
  Body,
  Footer,
  Title,
  SubTitle,
  Button,
  Error,
  GoBack,
  ToggleSwitchContainer,
} from "./styles";

interface FormProps {
  email: string;
  userName: string;
  fullName: string;
  password: string;
  passwordConfirmation: string;

  //business
  cnpj: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Digite um e-mail válido, Por favor!")
    .required("E-mail é obrigatório"),
  userName: yup.string().required("Digite seu Nome de Usuário, Por favor!"),
  fullName: yup.string().required("Digite seu Nome Completo, Por favor!"),
  cnpj: yup
    .string()
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "CNPJ inválido")
    .required("CNPJ é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(6, "A senha é muito curta, mínimo de 6 caracteres!"),
  // .test(
  //   "isValidPass",
  //   "Senha deve ter pelo menos 8 caracteres, uma letra maíuscula e um símbolo",
  //   (value: any) => {
  //     const hasUpperCase = /[A-Z]/.test(value);
  //     const hasNumber = /[0-9]/.test(value);
  //     const hasLowerCase = /[a-z]/.test(value);
  //     const hasSymbole = /["!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/.test(value);
  //     let validConditions = 0;
  //     const numberOfMustBeValidConditions = 3;
  //     const conditions = [hasUpperCase, hasLowerCase, hasNumber, hasSymbole];
  //     conditions.forEach((condition) =>
  //       condition ? validConditions++ : null
  //     );
  //     if (validConditions >= numberOfMustBeValidConditions) {
  //       return true;
  //     }
  //     return false;
  //   }
  // ),
  passwordConfirmation: yup
    .string()
    .required("Confirmação de senha é obrigatório")
    .oneOf([yup.ref("password"), null], "Senhas não podem ser diferentes!"),
});

export function Register() {
  const navigate = useNavigate();
  const [emailUserExists, setEmailUserExists] = useState();

  const [type, setType] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    // watch,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmitUser = (data: FormProps) => {
    let request = {
      email: data.email,
      fullName: data.fullName,
      password: data.password,
      userName: data.userName,
      type: "USER",
    };

    api
      .post("/users", request)
      .then(() => {
        login(data.email, data.password);
      })
      .catch((e) => {
        setEmailUserExists(e.response.data.message);
      });
  };

  const onSubmitBusiness = (data: FormProps) => {
    let request = {
      cnpj: data.cnpj,
      email: data.email,
      fullName: data.fullName,
      password: data.password,
      type: "BUSINESS",
    };

    api
      .post("/users", request)
      .then(() => {
        login(data.email, data.password);
      })
      .catch((e) => {
        setEmailUserExists(e.response.data.message);
      });
  };

  const login = (email: string, password: string) => {
    let request = {
      email: email,
      password: password,
    };
    api
      .post("/login", request)
      .then((response) => {
        localStorage.setItem("@barbers:user-id-1.0.0", response.data.id);
        localStorage.setItem("@barbers:user-token-1.0.0", response.data.token);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    setType(!type);
    reset();
    setValue("cnpj", "");
    setValue("userName", "");
  };

  return (
    <Container>
      <Form>
        <Header>
          <TopHeader>
            <GoBack onClick={() => navigate("/")}>🡠 Voltar ao Início</GoBack>
            <ToggleSwitchContainer>
              <label>meu negócio</label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-checkbox"
                  checked={isChecked}
                />
                <label className="toggle-switch-label" onClick={handleClick}>
                  <span className="toggle-switch-inner" />
                  <span className="toggle-switch-switch" />
                </label>
              </div>
            </ToggleSwitchContainer>
          </TopHeader>
          <Title>Bem-vindo</Title>
          {type === false ? (
            <SubTitle>Por favor, informe seus dados pessoais.</SubTitle>
          ) : (
            <SubTitle>Por favor, informe os dados do seu negócio.</SubTitle>
          )}
        </Header>
        {type === false ? (
          <Body onSubmit={handleSubmit(onSubmitUser)}>
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
            <ButtonForm type="submit" title="Cadastrar" color="green" />
          </Body>
        ) : (
          <Body onSubmit={handleSubmit(onSubmitBusiness)}>
            <Input
              title={"Nome do Negócio"}
              type="text"
              name="fullName"
              placeholder="Nome do Negócio"
              register={{ ...register("fullName") }}
              error={errors.fullName?.message}
            />
            <Input
              title={"CNPJ"}
              type="text"
              name="cnpj"
              placeholder="CNPJ"
              register={{ ...register("cnpj") }}
              error={errors.cnpj?.message}
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
            <ButtonForm type="submit" title="Cadastrar" color="green" />
          </Body>
        )}
        <Footer>
          {emailUserExists && <Error>{emailUserExists}</Error>}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <SubTitle>Já possui uma conta? </SubTitle>
            <Button onClick={() => navigate("/entrar")}>Entrar</Button>
          </div>
        </Footer>
      </Form>
    </Container>
  );
}
