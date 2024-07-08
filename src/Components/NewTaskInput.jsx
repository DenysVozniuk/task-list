import React, { useState } from 'react';
import { VscAdd } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask } from '../store/taskSlice';

function NewTaskInput() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.taskList);
  const handlerAddNewTask = () => {
    if(value !== ''){
      const newId = taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 1;
      dispatch(addNewTask({
        id: newId,
        text: value
      }));
      setValue('');
    }
  }
  return (
    <div className='new-task'>
      <textarea
        className='new-task-input'
        type="text"
        rows={1}
        cols={25}
        style={
          {
            resize: 'none',
            lineHeight: 1.4
          }
        }
        value={value}
        onChange={(e) => {setValue(e.target.value)}}
        placeholder='Введіть текст нової справи...'
      />
      <span className='add-icon' onClick={handlerAddNewTask}><VscAdd /></span>
    </div>
  );
}

export default NewTaskInput;
