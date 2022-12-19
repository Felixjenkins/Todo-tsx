import React from 'react';
import { useGlobalContext } from '../Hooks/useGlobalContext';
import { ITask } from '../Interfaces';

interface Props {
  task: ITask;
}

export const TodoTask = ({ task }: Props) => {
  const { todoList, setTodoList } = useGlobalContext();

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => task.taskName != taskNameToDelete));
  };

  return (
    <div className='task'>
      <div className='content'>
        <span>{task.taskName} </span>
        <span>{task.deadLine} days</span>
      </div>
      <button onClick={() => completeTask(task.taskName)}>X</button>
    </div>
  );
};
