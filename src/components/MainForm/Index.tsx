import { PlayCircleIcon } from "lucide-react";
import { Container } from "../Container/Index";
import { Cycles } from "../Cycles/Index";
import { DefaultButton } from "../DefaultButton/Index";
import { Input } from "../Input/Index";

export function MainForm() {
  return (
    <form>
      <Input type="text" />

      <Container>
        <Cycles />
      </Container>

      <Container>
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </Container>
    </form>
  );
}
