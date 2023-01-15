import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";
import { Input } from "../../components/Input";
import { ButtonForm } from "../../components/ButtonForm";
import { Divider } from "../../components/Divider";

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
  ForgetPassword,
  ContainerCheckBox,
  CheckBox,
  LoginSocial,
  LoginWithGoogle,
  LoginWithFace,
  LoginWithApple,
  GoBack,
} from "./styles";

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
        localStorage.setItem("@barbers:user-id-1.0.0", response.data.id);
        localStorage.setItem("@barbers:user-token-1.0.0", response.data.token);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container>
      <Form>
        <Header>
          <GoBack onClick={() => navigate("/")}>🡠 Voltar ao Início</GoBack>
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
          <ForgetPassword>
            <ContainerCheckBox>
              <CheckBox type="checkbox" />
              <label>Salvar senha</label>
            </ContainerCheckBox>
            <Button onClick={() => navigate("/esquecisenha")}>
              Esqueci a senha
            </Button>
          </ForgetPassword>
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
