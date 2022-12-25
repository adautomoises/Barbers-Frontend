import { Container, Button } from "./styles";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  title: string;
  color: string;
  onClick: () => void;
}

export function ButtonForm({ type, title, color, onClick }: Props) {
  return (
    <Container color={color}>
      <Button color={color} type={type} onClick={onClick}>
        {title}
      </Button>
    </Container>
  );
}
