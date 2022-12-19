import { FC } from 'react';
import { useGlobalContext } from '../Hooks/useGlobalContext';
import { TodoTask } from '../Components';
import { ITask } from '../Interfaces';

import '../Styles/TodoList.scss';

const TodoList: FC = () => {
  const { todoList } = useGlobalContext();

  return (
    <div className='todo-list'>
      {todoList.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task} />;
      })}
    </div>
  );
};

export default TodoList;
