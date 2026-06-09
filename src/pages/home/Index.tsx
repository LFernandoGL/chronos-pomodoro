import { MainForm } from "../../components/MainForm/Index";
import { MainTemplate } from "../../templates/MainTemplate/Index";
import { Container } from "../../components/Container/Index";
import { CountDown } from "../../components/CountDown/Index";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
