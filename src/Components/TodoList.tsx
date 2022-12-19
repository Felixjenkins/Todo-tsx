import { FC } from 'react';
import { useGlobalContext } from '../Hooks/useGlobalContext';
import { TodoTask } from './TodoTask';
import { ITask } from '../Interfaces';

import '../Styles/TodoList.scss';

export const TodoList: FC = () => {
  const { todoList } = useGlobalContext();

  return (
    <div className='todo-list'>
      {todoList.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task} />;
      })}
    </div>
  );
};
