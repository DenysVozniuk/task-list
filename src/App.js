import React from 'react';
import NewTaskInput from './Components/NewTaskInput';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className='wrap'>
      <div className='container'>
        <div className='task-list-container'>
          <div className='task-list-container-header'><h1>Мої справи</h1></div>
          <NewTaskInput />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
