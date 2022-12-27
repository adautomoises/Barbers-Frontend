import { Container, Button } from "./styles";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  title: string;
  color: string;
}

export function ButtonForm({ type, title, color }: Props) {
  return (
    <Container color={color}>
      <Button color={color} type={type}>
        {title}
      </Button>
    </Container>
  );
}
