import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { Container, MenuItems, Button, Copyright } from "./styles";

interface Props {
  Items: string[];
}

export function Footer({ Items }: Props) {
  const navigate = useNavigate();

  const handleNavigate = (name: string) => {
    navigate(`/${name}`);
  };

  return (
    <Container>
      <Logo style={{ width: "25%" }} fill={"white"} />
      <MenuItems>
        {Items.map((item, index) => (
          <Button onClick={() => handleNavigate(item)} key={index}>
            {item}
          </Button>
        ))}
      </MenuItems>
      <Copyright>© 2022 Barber’s</Copyright>
    </Container>
  );
}
