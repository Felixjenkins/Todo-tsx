import { FC, ChangeEvent } from 'react';
import { useGlobalContext } from '../Hooks/useGlobalContext';

import '../Styles/Header.scss';

const Header: FC = () => {
  const { task, deadline, todoList, setTask, setDeadline, setTodoList } =
    useGlobalContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.name === 'task'
      ? setTask(event.target.value)
      : setDeadline(Number(event.target.value));
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadline };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };

  return (
    <header className='header'>
      <div className='input-container'>
        <input
          type='text'
          name='task'
          value={task}
          placeholder='Task...'
          onChange={handleChange}
        />
        <input
          type='number'
          name='deadline'
          value={deadline !== 0 ? deadline.toString() : ' '}
          placeholder='Deadline (in Days)...'
          onChange={handleChange}
        />
      </div>
      <button onClick={addTask}>Add Task</button>
    </header>
  );
};

export default Header;
