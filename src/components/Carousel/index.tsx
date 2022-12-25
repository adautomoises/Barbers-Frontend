import { RefObject, useRef, useState } from "react";

import {
  Container,
  Image,
  ContainerButtonUp,
  ContainerButtonDown,
  ScrollUp,
  ScrollDown,
} from "./styles";

type Props = {
  images: {
    id: string;
    photo: string;
    title: string;
    subtitle?: string;
  }[];
};

export function Carousel({ images }: Props) {
  const [data, setData] = useState<Props>();
  const carousel: RefObject<HTMLDivElement> = useRef(null);

  const handleCarouselNext = (e: any) => {
    e.preventDefault();

    carousel.current?.scrollBy({
      top: carousel.current?.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCarouselLast = (e: any) => {
    e.preventDefault();

    carousel.current?.scrollBy({
      top: -carousel.current?.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  if (!images || !images.length) return null;

  return (
    <Container ref={carousel}>
      {images.map((item) => (
        <Image key={item.id} src={item.photo} />
      ))}
      <ContainerButtonUp>
        <ScrollUp onClick={handleCarouselLast}>{"<"}</ScrollUp>
      </ContainerButtonUp>

      <ContainerButtonDown>
        <ScrollDown onClick={handleCarouselNext}>{">"}</ScrollDown>
      </ContainerButtonDown>
    </Container>
  );
}
