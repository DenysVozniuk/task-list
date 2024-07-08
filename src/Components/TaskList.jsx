import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearTaskList } from "../store/taskSlice";
import Task from "./Task";

function TaskList() {
    const taskList = useSelector((state) => state.tasks.taskList);
    const dispatch = useDispatch();

    const handlerClearTaskList = () => {
      const shouldDelete = window.confirm("Ви впевнені, що хочете очистити весь список?");
      shouldDelete && dispatch(clearTaskList());
    }
    return (
      <div className="task-list-container-body">
        <h2>Список справ:</h2>
        <div className="task-list">
          {taskList && (taskList.map((task, index) => {
              return (<Task key={task.id} task={task} index={index} />)
          }))}
        </div>
        {
          taskList.length > 0 && (<button className="clear-task-list" onClick={handlerClearTaskList}>Очистити весь список</button>)
        }
      </div>
    );
  }
  
  export default TaskList;
  