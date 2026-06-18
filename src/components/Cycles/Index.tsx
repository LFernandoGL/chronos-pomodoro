import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../Utils/GetNextCycle";
import { getNextCycleType } from "../../Utils/GetNextCycleType";
import styles from "./styles.module.css";

export function Cycles() {
   const { state } = useTaskContext();

   const cycleSteps = Array.from({ length: state.currentCycle });

   return (
      <div className={styles.cycles}>
         <span>Ciclos</span>

         <div className={styles.cycleDots}>
            {cycleSteps.map((_, index) => {
               const nextCycle = getNextCycle(index);
               const nextCycleType = getNextCycleType(nextCycle);

               return (
                  <span
                     key={nextCycle}
                     className={`${styles.cycleDot} ${styles[nextCycleType]}`}
                  ></span>
               );
            })}
         </div>
      </div>
   );
}
