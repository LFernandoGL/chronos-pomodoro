import { PlayCircleIcon } from "lucide-react";
import { Container } from "../Container/Index";
import { Cycles } from "../Cycles/Index";
import { DefaultButton } from "../DefaultButton/Index";
import { Input } from "../Input/Index";
import { useState } from "react";

export function MainForm() {
   const [taskName, setTaskName] = useState("");

   function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
      event.preventDefault();
      console.log("Deu certo" + taskName);
   }

   return (
      <form onSubmit={handleCreateNewTask}>
         <Input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
         />

         <Container>
            <Cycles />
         </Container>

         <Container>
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
         </Container>
      </form>
   );
}
