import { createContext, useContext } from 'react';
import { ITask } from '../Interfaces';

export type GlobalContent = {
  task: string;
  setTask: (t: string) => void;
  deadline: number;
  setDeadline: (n: number) => void;
  todoList: ITask[];
  setTodoList: (a: ITask[]) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  task: '', // set a default value
  setTask: () => {},
  deadline: 0,
  setDeadline: () => {},
  todoList: [],
  setTodoList: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
