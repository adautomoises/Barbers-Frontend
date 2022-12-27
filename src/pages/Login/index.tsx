import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";
import { Input } from "../../components/Input";
import { ButtonForm } from "../../components/ButtonForm";

import { ReactComponent as GoogleIcon } from "../../assets/google.svg";
import { ReactComponent as FaceIcon } from "../../assets/Facebook.svg";
import { ReactComponent as AppleIcon } from "../../assets/apple.svg";

import {
  Container,
  Form,
  Header,
  Body,
  Footer,
  Title,
  SubTitle,
  Button,
  LoginSocial,
  LoginWithGoogle,
  LoginWithFace,
  LoginWithApple,
} from "./styles";
import { Divider } from "../../components/Divider";

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
    let request = {
      email: data.email,
      password: data.password,
    };

    api
      .post("/login", request)
      .then((response) => {
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        alert("E-mail ou Senha não confere!");
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
            <Button onClick={() => navigate("/esquecisenha")}>
              Esqueci a senha
            </Button>
          </div>
          <ButtonForm type="submit" title="Entrar" color="green" />
        </Body>
        <Divider />
        <LoginSocial>
          <LoginWithGoogle>
            <GoogleIcon style={{ marginRight: "12px" }} />
            Entrar com Google
          </LoginWithGoogle>
          <LoginWithFace>
            <FaceIcon style={{ marginRight: "12px" }} />
            Entrar com Facebook
          </LoginWithFace>
          <LoginWithApple>
            <AppleIcon style={{ marginRight: "12px" }} />
            Entrar com Apple
          </LoginWithApple>
        </LoginSocial>
        <Footer>
          <SubTitle>Não tem uma conta? </SubTitle>
          <Button onClick={() => navigate("/cadastrar")}>Cadastrar</Button>
        </Footer>
      </Form>
    </Container>
  );
}
