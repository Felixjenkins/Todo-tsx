import { FC, useState } from 'react';
import { Header } from './Components/Header';
import { TodoList } from './Components/TodoList';
import { MyGlobalContext } from './Hooks/useGlobalContext';
import { ITask } from './Interfaces';
import './App.scss';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  return (
    <div className='app'>
      <MyGlobalContext.Provider
        value={{ task, setTask, deadline, setDeadline, todoList, setTodoList }}
      >
        <Header />
        <TodoList />
      </MyGlobalContext.Provider>
    </div>
  );
};

export default App;
