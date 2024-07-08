import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        taskList: JSON.parse(localStorage.getItem('taskList')) || []
    },
    reducers: {
        addNewTask: function(state, action){
            state.taskList.push({
                id: action.payload.id,
                text: action.payload.text,
                isChecked: false
            });
            localStorage.setItem('taskList', JSON.stringify(state.taskList));
        },
        deleteTask: function(state, action){
            state.taskList = state.taskList.filter((task) => task.id !== action.payload.id);
            localStorage.setItem('taskList', JSON.stringify(state.taskList));
        },
        taskChecked: function(state, action){
            state.taskList = state.taskList.map((task) => task.id === action.payload.id ? {...task, isChecked: !task.isChecked} : task);
            localStorage.setItem('taskList', JSON.stringify(state.taskList));
        },
        clearTaskList: function(state, action){
            state.taskList = [];
            localStorage.clear();
        }
    }
});

export const {addNewTask, deleteTask, taskChecked, clearTaskList} = taskSlice.actions;

export default taskSlice.reducer;