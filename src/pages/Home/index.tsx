import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import api from "../../services/api";

import { Container, Main, Button } from "./styles";

export function Home() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [actions, setActions] = useState("Login");

  const data = ["Parceiros", "Serviços", "Sobre"];

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
      setActions("Auth");
    } else {
      setActions("Login");
    }
  }, []);

  const eventCarousel = [
    {
      id: "1",
      photo:
        "https://saboresdacidade.com/wp-content/uploads/2019/11/AA7EE845-3C02-48A5-8145-C72B6F996779.jpg",
      title: "Cultural",
      subtitle: "Rota da Gastronomia",
    },
    {
      id: "2",
      photo:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmega.ibxk.com.br%2F2015%2F07%2F31%2F31153218446351.jpg%3Fims%3D1920x1080&f=1&nofb=1&ipt=325234f9d00e54a1ecbb91cffbbb41f0cc1c1952ba4ac60ab90c389279500feb&ipo=images",
      title: `Rota da\nGastronomia`,
      subtitle: "Rota da Gastronomia",
    },
    {
      id: "3",
      photo:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gadoo.com.br%2Fwp-content%2Fuploads%2F2016%2F11%2F731.jpg&f=1&nofb=1&ipt=99deb967cb8c87172a70d684aeaab07f6c1aa6cad8f15199a7ede21b09688105&ipo=images",
      title: "Gastronomia Cultural",
    },
  ];

  return (
    <Container>
      <Header Items={data} Actions={actions} />
      <Main>
        <Carousel images={eventCarousel} />
      </Main>
      <Footer />
    </Container>
  );
}
