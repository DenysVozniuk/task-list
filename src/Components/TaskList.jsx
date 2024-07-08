import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function TaskList() {
    const taskList = useSelector((state) => state.tasks.taskList);
    return (
      <div className="task-list-container-body">
        {taskList && (taskList.map((task) => {
            return (<Task key={task.id} task={task} />)
        }))}
      </div>
    );
  }
  
  export default TaskList;
  