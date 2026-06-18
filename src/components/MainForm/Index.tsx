import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Container } from "../Container/Index";
import { Cycles } from "../Cycles/Index";
import { DefaultButton } from "../DefaultButton/Index";
import { Input } from "../Input/Index";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../Utils/GetNextCycle";
import { getNextCycleType } from "../../Utils/GetNextCycleType";
import { formatSecondsToMinutes } from "../../Utils/formatSecondsForMinutes";

import styles from "./styles.module.css";

export function MainForm() {
   const { state, setState } = useTaskContext();
   const taskNameInput = useRef<HTMLInputElement>(null);

   const nextCycle = getNextCycle(state.currentCycle);
   const nextCycleType = getNextCycleType(nextCycle);

   //==============FUNCAO USADA NO SUBMIT=========================
   function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
      event.preventDefault();

      if (taskNameInput.current === null) return;

      const taskName = taskNameInput.current.value.trim();

      if (!taskName) {
         alert("Digite o nome da tarefa");
      }

      const newTask: TaskModel = {
         id: Date.now().toString(),
         name: taskName,
         startDate: Date.now(),
         completeDate: null,
         interruptDate: null,
         duration: state.config[nextCycleType],
         type: nextCycleType,
      };

      const secondsRemainingi = newTask.duration * 60;

      setState((prevState) => {
         return {
            ...prevState,
            config: { ...prevState.config },
            activeTask: newTask,
            currentCycle: nextCycle,
            secondsRemaining: secondsRemainingi,
            formattedSecondsRemaining:
               formatSecondsToMinutes(secondsRemainingi),
            tasks: [...prevState.tasks, newTask],
         };
      });
   }
   //==============================================================================

   //=====================FUNCAO QUE INTERROMPE UMA TASK=============================
   function interuptTaskActivate(
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
   ) {
      event.preventDefault();
      setState((prevState) => {
         return {
            ...prevState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: "00:00",
            tasks: prevState.tasks.map((task) => {
               if (
                  prevState.activeTask &&
                  prevState.activeTask.id === task.id
               ) {
                  return { ...task, interruptDate: Date.now() };
               }
               return task;
            }),
         };
      });
   }

   //================================================================================

   // =========COMPONENTE===============
   return (
      <form onSubmit={handleCreateNewTask}>
         <Input type="text" ref={taskNameInput} disabled={!!state.activeTask} />
         <span className={styles.lorem}>Proxima tarefa de 25 minutos</span>
         {state.currentCycle > 0 && (
            <Container>
               <Cycles />
            </Container>
         )}

         <Container>
            {!state.activeTask ? (
               <DefaultButton
                  title="Iniciar nova Tarefa"
                  type="submit"
                  icon={<PlayCircleIcon />}
                  color="green"
                  key="submit"
               />
            ) : (
               <DefaultButton
                  type="button"
                  onClick={interuptTaskActivate}
                  color="red"
                  icon={<StopCircleIcon />}
                  key="button"
               />
            )}
         </Container>
      </form>
   );
}
