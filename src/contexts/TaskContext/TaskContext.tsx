import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialState } from "./initialState";

type TaskContextProps = {
   state: TaskStateModel;
   setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
   state: initialState,
   setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
