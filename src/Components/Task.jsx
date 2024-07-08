import React from "react";
import {VscTrash} from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { deleteTask, taskChecked } from "../store/taskSlice";

function Task(props) {
    const { task } = props;
    const dispatch = useDispatch();
    
    const handlerChangeCheckedState = () => {
        dispatch(taskChecked({
            id: task.id
        }));
    };
    
    const handlerDeleteTask = () => {
        const shouldDelete = window.confirm("Ви впевнені, що хочете видалити це завдання?");
        if (shouldDelete) {
            dispatch(deleteTask({
                id: task.id
            }));
        }
    };

    return (
      <div id={`task-${task.id}`} className="task">
        <label className={task.isChecked ? "checked" : ""}>
            <input className="task-input" type="checkbox" checked={task.isChecked} onChange={(handlerChangeCheckedState)} />
            <span className="task-text">{task.text}</span>
        </label>
        <span className="delete-icon" onClick={handlerDeleteTask}>
            <VscTrash />
        </span>
      </div>
    );
  }
  
  export default Task;
  