import { RefObject, useEffect, useRef, useState } from "react";
import { Bullet } from "../Bullet";

import {
  Container,
  ContainerCarousel,
  Image,
  ImageIndexes,
  ScrollUp,
  ScrollDown,
} from "./styles";

interface Props {
  images: {
    id: string;
    photo: string;
    title: string;
    subtitle?: string;
  }[];
}

export function Carousel({ images }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const carousel: RefObject<HTMLDivElement> = useRef(null);

  const handleCarouselNext = () => {
    let newCurrentImage = imageIndex + 1;
    if (newCurrentImage >= images.length) {
      newCurrentImage = 0;
    }
    setImageIndex(newCurrentImage);
    carousel.current?.scrollBy({
      top: carousel.current?.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCarouselLast = () => {
    let newCurrentImage = imageIndex - 1;
    if (newCurrentImage < 0) {
      newCurrentImage = images.length - 1;
    }
    setImageIndex(newCurrentImage);
    carousel.current?.scrollBy({
      top: -carousel.current?.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleCarouselNext();
    }, 5000);
    return () => clearTimeout(interval);
  }, [imageIndex]);

  useEffect(() => {
    carousel.current?.scrollTo({
      top: imageIndex * (carousel.current?.offsetHeight || 0),
      behavior: "smooth",
    });
  }, [imageIndex]);

  if (!images || !images.length) return null;
  return (
    <Container>
      <ContainerCarousel ref={carousel}>
        {images.map((item) => (
          <Image key={item.id} src={item.photo} photo={item.photo} />
        ))}
      </ContainerCarousel>

      <ScrollUp onClick={handleCarouselLast}>{"<"}</ScrollUp>

      <ScrollDown onClick={handleCarouselNext}>{">"}</ScrollDown>

      <ImageIndexes>
        {images.map((item, index) => (
          <Bullet key={String(item.id)} active={index === imageIndex} />
        ))}
      </ImageIndexes>
    </Container>
  );
}
